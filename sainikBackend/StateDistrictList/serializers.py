from rest_framework import serializers
from .models import *
from django.conf import settings


class StateDistSerializer(serializers.ModelSerializer):

    class Meta:
        model = StateDistrictList
        fields = "__all__"


class RegistrationEssentialSerializer(serializers.ModelSerializer):

    class Meta:
        model = StateDistrictList
        fields = ["S_Id", "D_Id", "Slno", "StateName", "DistrictName"]
