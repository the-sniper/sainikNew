from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.conf import settings
from django.core.exceptions import ValidationError
from rest_framework import serializers
from StateDistrictList.models import *


class UserAuthManager(BaseUserManager):

    def create_user(self, email=None, username=None, password=None, **kwargs):
        if not email:
            raise serializers.ValidationError(
                "User must have an email address.")
        if not username:
            raise serializers.ValidationError("User must have a username.")
        if not password or str(password).__len__() < settings.MIN_PASSWORD_LENGTH:
            raise serializers.ValidationError(
                f"User must have a password with atleast {settings.MIN_PASSWORD_LENGTH} characters.")

        zila = kwargs.get("zila")
        del(kwargs["zila"])

        user = self.model(
            email=self.normalize_email(email),
            username=username,
            **kwargs
        )

        user.set_password(password)
        user.save(using=self._db)
        user.zila.set(zila)
        return user

    def create_superuser(self, *args, **kwargs):

        user = self.create_user(
            *args, **kwargs
        )

        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.userType = KENDRIYA_SAINIK
        user.approvalStatus = "A"

        user.save(using=self._db)
        return user

    def create_admin(self, *args, **kwargs):

        user = self.create_user(
            *args, **kwargs
        )

        user.is_staff = True
        user.is_admin = True
        user.userType = RAJYA_SAINIK
        user.approvalStatus = "A"

        user.save(using=self._db)
        return user

    def create_staff(self, *args, **kwargs):

        user = self.create_user(
            *args, **kwargs
        )

        user.is_staff = True
        user.userType = ZILLA_SAINIK
        user.approvalStatus = "A"

        user.save(using=self._db)
        return user

    create_zsb = create_staff
    create_rsb = create_admin
    create_ksb = create_superuser

    # def create_zsb_user(self, *args, **kwargs):
    #     user = self.create_user(
    #         *args, **kwargs
    #     )


# user category start
EX_SERVICE_MEN = "ESM"
OFFICERS = "OFF"
MILITARY_NURSING_SERVICES = "MNS"
ARMY_POSTAL_SERVICE = "APS"
WIDOWS = "WIDOW"
BOARD = "BRD"

USER_CATEGORY = (
    (EX_SERVICE_MEN, "Ex Service men"),
    (OFFICERS, "Officers"),
    (MILITARY_NURSING_SERVICES, "Military Nursing Services"),
    (ARMY_POSTAL_SERVICE, "Army Postal Services"),
    (WIDOWS, "Widow"),
    (BOARD, "Board"),
)

KENDRIYA_SAINIK = "KSB"
RAJYA_SAINIK = "RSB"
ZILLA_SAINIK = "ZSB"
USER = "USR"

USER_TYPES = (
    (KENDRIYA_SAINIK, "Kendriya Sainik Board"),
    (RAJYA_SAINIK, "Rajya Sainik Board"),
    (ZILLA_SAINIK, "Zilla Sainik Board"),
    (USER, "User")
)

PENDING = "P"
APPROVED = "A"

APPROVAL_STATUS = (
    (PENDING, "Pending"),
    (APPROVED, "Approved")
)

# user category end


class UserAuthDetails(AbstractBaseUser):

    slno = models.AutoField(primary_key=True)
    email = models.EmailField(null=True, blank=True, unique=True)
    username = models.CharField(max_length=50, null=False, unique=True)
    userType = models.CharField(
        max_length=10, choices=USER_TYPES, default=USER)
    userCategory = models.CharField(
        max_length=10, choices=USER_CATEGORY, default=EX_SERVICE_MEN)
    approvalStatus = models.CharField(
        max_length=10, choices=APPROVAL_STATUS, default=PENDING)
    documents = models.FileField(null=True, blank=True)
    state = models.ForeignKey(
        State, null=True, blank=True, on_delete=models.DO_NOTHING)
    zila = models.ManyToManyField(
        District, related_name="users", null=True, blank=True)
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    date_joined = models.DateTimeField(
        auto_now_add=True, blank=True, null=True)
    last_login = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    is_active = models.BooleanField(default=True)
    mobileNumber = models.PositiveIntegerField(default='1111111111')
    USERNAME_FIELD = "username"

    objects = UserAuthManager()

    class Meta:
        db_table = "UserAuthDetails"

    def __str__(self):
        return str(f"Slno : {self.slno}, username : {self.username}")

    def has_perm(self, perm, obj=None):
        return self.is_superuser

    def has_module_perms(self, app_label):
        return self.is_superuser
