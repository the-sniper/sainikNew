from rest_framework import permissions
from .models import *


class IsUserOrAdmin(permissions.BasePermission):

    def has_permission(self, request, view):

        if request.user.is_authenticated:
            return True

        if "pk" in view.kwargs and view.kwargs["pk"]:
            return request.user.is_authenticated

        return request.user.is_staff

    def has_object_permission(self, request, view, obj):
        return request.user.pk == obj.pk or request.user.is_staff


class AdminAccess(permissions.BasePermission):

    def has_permission(self, request, view):

        if request.user.is_authenticated:
            return request.user.userType in [ZILLA_SAINIK, RAJYA_SAINIK, KENDRIYA_SAINIK]

        return False

    def has_object_permission(self, request, view, obj):

        if request.user.is_authenticated:

            if request.user.userType == ZILLA_SAINIK:
                return obj.userType == USER and obj.zila.all()[0] in request.user.zila.all()

            elif request.user.userType == RAJYA_SAINIK:
                return obj.userType in [USER, ZILLA_SAINIK] and obj.state == request.user.state

            return request.user.userType == KENDRIYA_SAINIK

        return False
