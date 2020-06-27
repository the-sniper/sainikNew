from rest_framework import viewsets, mixins
from rest_framework import status
from django.http import JsonResponse
from UserAuth.models import *
from UserAuth.permissions import *
from UserAuth.serializers import *


class ZsbAdmin(mixins.ListModelMixin):

    queryset = UserAuthDetails.objects.all()
    serializer_class = UserSerializer
    permission_classes = (ZSBAdminAccess,)

    def get_queryset(self):
        user = self.request.user
        if user.userType == ZILLA_SAINIK:
            return UserAuthDetails.objects.filter(zila__in=user.zila)
        if user.userType == RAJYA_SAINIK:
            return UserAuthDetails.objects.filter(state=user.state)
        if user.userType == KENDRIYA_SAINIK:
            return UserAuthDetails.objects.all()

    def list(self, request):
        queryset = self.get_queryset()
        return UserSerializer(queryset.filter(approvalStatus=PENDING))
