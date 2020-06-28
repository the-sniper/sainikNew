from rest_framework import serializers
from .models import *
from django.conf import settings
from StateDistrictList.models import *
import logging

logger = logging.getLogger("apps_logger")


common_fields = ["slno", "email", "username", "userType", 'userCategory',
                 'approvalStatus', 'documents', 'date_joined', 'last_login',
                 "mobileNumber", "zila", "state"]
common_read_only_fields = ['slno', 'date_joined', 'last_login', ]


class UserSerializer(serializers.ModelSerializer):

    password = serializers.CharField(
        write_only=True, min_length=settings.MIN_PASSWORD_LENGTH, required=False)

    class Meta:
        model = UserAuthDetails
        fields = common_fields + ["password", ]
        read_only_fields = common_read_only_fields
        extra_kwargs = {
            "username": {
                "required": False
            },
            "state": {
                "required": True
            },
            "zila": {
                "required": True
            },
            "documents": {
                "required": True
            },
            "userCategory": {
                "required": True
            }
        }

    def validate(self, data):

        user = self.context["request"].user
        requestFrom = self.context.get("requestFrom")
        if  requestFrom and requestFrom == "adminPage":
            return data

        if(user.is_authenticated and user.userType not in [ZILLA_SAINIK]):
            if data.get("zila").__len__ > 1:
                raise serializers.ValidationError(
                    "User cannot belong to more than one zila.")

        if user.is_authenticated:
            logger.debug(
                f"THis is the data :  {data} and user.zila : {user.zila}")
            if user.userType == ZILLA_SAINIK and data["zila"][0] not in user.zila.all():
                raise serializers.ValidationError(
                    "This zila doesn't fall under your board.")
            if user.userType == RAJYA_SAINIK and data.state != user.state:
                raise serializers.ValidationError(
                    "This state doesn't fall under your board.")
            if user.userType == USER:
                raise serializers.ValidationError(
                    "Please log out and try registering again.")
            data["approvalStatus"] = APPROVED
        else:
            data["approvalStatus"] = PENDING

        if user.is_authenticated:

            if user.is_superuser:
                if not data.get("userType"):
                    data["userType"] = USER
            elif user.is_admin and "userType" in data and data["userType"] in [KENDRIYA_SAINIK, RAJYA_SAINIK]:
                data["userType"] = USER
            elif user.is_staff and "userType" in data:
                data["userType"] = USER

        else:
            data["userType"] = USER

        if not data.get("userType"):
            data["userType"] = USER

        if (user.is_authenticated and user.userType not in [RAJYA_SAINIK, KENDRIYA_SAINIK]) or (not user.is_authenticated):
            if data.get("userCategory") == BOARD:
                raise serializers.ValidationError(
                    f"UserCategory cannot be {BOARD}")

        state = State.objects.filter(S_Id=data.get("state").pk)
        if state.exists():
            for zila in data.get("zila"):
                if not state[0].district_set.filter(D_Id=zila.pk).exists():
                    raise serializers.ValidationError(
                        "District is not a part of state.")

        return data

    def create(self, validated_data):

        if validated_data["userType"] == ZILLA_SAINIK:
            return UserAuthDetails.objects.create_zsb(**validated_data)
        if validated_data["userType"] == RAJYA_SAINIK:
            return UserAuthDetails.objects.create_rsb(**validated_data)
        if validated_data["userType"] == KENDRIYA_SAINIK:
            return UserAuthDetails.objects.create_ksb(**validated_data)
        else:
            return UserAuthDetails.objects.create_user(**validated_data)

    def update(self, instance, validated_data):

        if "password" in validated_data:
            raise serializers.ValidationError(
                "Cannot reset password at this api endpoint.")
        email = validated_data.get("email")
        if email and email == instance.email:
            raise serializers.ValidationError(
                "Current email and new email cannot be same.")

        return super().update(instance, validated_data)
