from rest_framework import viewsets, mixins
from rest_framework import status
from django.http import JsonResponse
from UserAuth.models import *
from UserAuth.permissions import *
from UserAuth.serializers import *
from rest_framework.response import Response
import logging

logger = logging.getLogger("apps_logger")


class Admin(mixins.ListModelMixin, mixins.UpdateModelMixin, viewsets.GenericViewSet):

    queryset = UserAuthDetails.objects.all()
    serializer_class = UserSerializer
    permission_classes = (AdminAccess,)

    def get_queryset(self):
        user = self.request.user
        if user.userType == ZILLA_SAINIK:
            return self.queryset.filter(zila__in=user.zila.all(), userType=USER)
        if user.userType == RAJYA_SAINIK:
            return self.queryset.filter(state=user.state, userType__in=[USER, ZILLA_SAINIK])
        if user.userType == KENDRIYA_SAINIK:
            return self.queryset

    def list(self, request):

        queryset = self.get_queryset()
        userList = request.query_params.get("userList")
        userList = [x.strip()
                    for x in userList.split(",") if x] if userList else None

        if userList:
            logger.debug(f"UserList sent : {userList}")
            return Response(UserApprovalStatus(queryset.filter(slno__in=userList), many=True).data)
        else:

            return JsonResponse(UserSerializer(queryset.filter(approvalStatus=PENDING), many=True).data, safe=False)

    def update(self, request, pk=None):
        obj = self.get_object()
        serializer = self.serializer_class(
            obj, data=request.data, partial=True, context={
                "request": request,
                "requestFrom": "adminPage"
            })
        if serializer.is_valid(raise_exception=True):
            serializer.save()
        logger.info(
            f"{obj} updated with data : {request.data}. Updated by {request.user}")
        return JsonResponse(serializer.data)
