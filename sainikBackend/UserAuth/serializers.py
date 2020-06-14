from rest_framework import serializers
from .models import *
from django.conf import settings


common_fields = ["slno", "email", "username", "userType", 'userCategory',
                 'approvalStatus', 'documents', 'date_joined', 'last_login', "mobileNumber"]
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
            }
        }

    def validate(self, data):

        user = self.context["request"].user
        if user.is_authenticated and user.is_staff:
            data["approvalStatus"] = UserAuthDetails.APPROVED
        else:
            data["approvalStatus"] = UserAuthDetails.PENDING

        if user.is_authenticated:

            if user.is_superuser:
                pass
            elif user.is_admin and "userType" in data and data["userType"] in [UserAuthDetails.KENDRIYA_SAINIK, UserAuthDetails.RAJYA_SAINIK]:
                data["userType"] = UserAuthDetails.USER
            elif user.is_staff and "userType" in data:
                data["userType"] = UserAuthDetails.USER

            if data.get("userType") and data["userType"] == UserAuthDetails.ZILLA_SAINIK:
                data["is_staff"] = True
            if data.get("userType") and data["userType"] == UserAuthDetails.RAJYA_SAINIK:
                data["is_staff"] = True
                data["is_admin"] = True
            if data.get("userType") and data["userType"] == UserAuthDetails.KENDRIYA_SAINIK:
                data["is_staff"] = True
                data["is_admin"] = True
                data["is_superuser"] = True
        else:
            data["userType"] = UserAuthDetails.USER
        return data

    def create(self, validated_data):
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

