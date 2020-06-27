from django.shortcuts import render
from rest_framework.views import APIView
from StateDistrictList.serializers import RegistrationEssentialSerializer, StateDistrictList
from django.http import JsonResponse
from UserAuth.models import USER_CATEGORY, KENDRIYA_SAINIK, RAJYA_SAINIK, BOARD


class RegistrationEssentials(APIView):

    def get(self, request):

        if(request.user.is_authenticated and request.user.userType in [KENDRIYA_SAINIK, RAJYA_SAINIK]):
            user_categories = [{"value": x[0], "label": x[1]}
                               for x in USER_CATEGORY]
        else:
            user_categories = [{"value": x[0], "label": x[1]}
                               for x in USER_CATEGORY if x[0] != BOARD]

        sd_list = RegistrationEssentialSerializer(
            StateDistrictList.objects.all(), many=True).data

        sd_dict = {}
        for element in sd_list:
            state = element["StateName"]
            if state not in sd_dict:
                sd_dict[state] = {
                    "S_Id": element["S_Id"],
                    "districts": {},
                }
            sd_dict[state]["districts"][element["DistrictName"]] = {
                "D_Id": element["D_Id"],
                "Slno": element["Slno"]
            }

        return JsonResponse({
            "sd_dict": sd_dict,
            "user_categories": user_categories
        }, safe=False)


# Create your views here.
