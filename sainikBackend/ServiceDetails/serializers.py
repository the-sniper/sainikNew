from rest_framework import serializers
from django.conf import settings
from .models import *
import logging

logger = logging.getLogger("apps_logger")


class ServiceDetailsSerializer(serializers.ModelSerializer):

    class Meta:

        model = ServiceDetails
        fields = '__all__'

    def validate(self, data):

        return data


class DischargeDetailsSerializer(serializers.ModelSerializer):

    class Meta:

        model = DischargeDetails
        fields = '__all__'

    def validate(self, data):

        return data
