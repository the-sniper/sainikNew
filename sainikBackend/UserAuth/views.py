from knox.views import LoginView as KnoxLoginView
from rest_framework.authtoken.serializers import AuthTokenSerializer
from django.contrib.auth import login
from knox import views as knox_views
from rest_framework import permissions

from rest_framework import viewsets
from rest_framework import status
from .models import *
from .permissions import *
from .serializers import *
from django.shortcuts import get_object_or_404
from rest_framework.decorators import action
from rest_framework.response import Response


class LoginView(KnoxLoginView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        if user.approvalStatus == PENDING:
            serializer = UserSerializer(user)
            return Response({"user": serializer.data,
                             "error": 'Approval status pending.'}, status=status.HTTP_202_ACCEPTED)
        login(request, user)
        response = super(LoginView, self).post(request, format=None)
        return response


class UserAuthViewset(viewsets.ModelViewSet):

    queryset = UserAuthDetails.objects.filter(is_active=1)
    serializer_class = UserSerializer
    def get_queryset(self):

        if self.request.user.userType == ZILLA_SAINIK:
            return UserAuthDetails.objects.filter(userType=USER)
        elif self.request.user.userType == RAJYA_SAINIK:
            return UserAuthDetails.objects.filter(userType__in=[USER, ZILLA_SAINIK])
        elif self.request.user.userType == KENDRIYA_SAINIK:
            return UserAuthDetails.objects.all()
        elif self.request.user.userType == USER:
            return UserAuthDetails.objects.filter(pk=self.request.user.pk)

    def get_permissions(self):
        if self.action == "create":
            return [permissions.AllowAny(), ]
        else:
            return [IsUserOrAdmin(), ]

    @action(detail=True, methods=["post"])
    def set_password(self, request, pk=None):
        user = self.get_object()
        serializer = PasswordSerializer(user, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
        return Response(serializer.data)


