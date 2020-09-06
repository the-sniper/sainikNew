from rest_framework import serializers
from django.conf import settings
from .models import *
import logging

logger = logging.getLogger('app_logger')

class FamilyDetailsSerializer(serializers.ModelSerializer):

    class Meta:
        model = FamilyDetails
        fields = '__all__'
        extra_kwargs = {
            'user' : {
                'required' : False
            }
        }

    def validate(self, data):

        return {
            **data, 
            'user': self.context.user
        }

class DependentDetailsSerializer(serializers.ModelSerializer):

    class Meta:
        model = DependentDetails
        fields = '__all__'
        extra_kwargs = {
            'user' : {
                'required' : False
            }
        }

    def validate(self, data):

        return {
            **data, 
            'user': self.context.user
        }