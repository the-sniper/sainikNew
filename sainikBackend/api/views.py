from django.shortcuts import render
from rest_framework.views import APIView
from StateDistrictList.serializers import RegistrationEssentialSerializer, StateDistrictList
from django.http import JsonResponse
from UserAuth.models import USER_CATEGORY


class RegistrationEssentials(APIView):

    def get(self, request):
        sd_list = RegistrationEssentialSerializer(
            StateDistrictList.objects.all(), many=True).data
        user_categories = [{"value": x[0], "label": x[1]}
                           for x in USER_CATEGORY]
        return JsonResponse({
            "sd_list": sd_list,
            "user_categories": user_categories
        }, safe=False)


# Create your views here.
