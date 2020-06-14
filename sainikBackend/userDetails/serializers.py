from rest_framework import serializers
from .models import *
from UserAuth.models import *
from sainikBackend import helper_functions

class UserDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = userDetails
        fields = '__all__'
    
    def validate(self, data):
        state = data.get("birthState")
        state = helper_functions.validate_indian_states(state)
        if not state:
            raise serializers.ValidationError("Invalid State. Please enter a valid state for birthState")
        
        data["birthState"] = state

        return data 