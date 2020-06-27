from rest_framework import serializers
from .models import *
from django.conf import settings


class DistrictSerializer(serializers.ModelSerializer):

    class Meta:
        model = District
        fields = "__all__"


class StateSerializer(serializers.ModelSerializer):
    district_set = DistrictSerializer(many=True)

    class Meta:
        model = State
        fields = ("S_Id", "StateName", "district_set")


# class RegistrationEssentialSerializer(serializers.ModelSerializer):

#     class Meta:
#         model = State
#         fields = "__all__"
#         depth = 1
