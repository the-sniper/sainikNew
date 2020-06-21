from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.conf import settings
from django.core.exceptions import ValidationError
from rest_framework import serializers


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

        user = self.model(
            email=self.normalize_email(email),
            username=username,
            **kwargs
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, *args, **kwargs):

        user = self.create_user(
            *args, **kwargs
        )

        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.userType = self.model.KENDRIYA_SAINIK
        user.approvalStatus = "A"

        user.save(using=self._db)
        return user

    # def create_zsb_user(self, *args, **kwargs):
    #     user = self.create_user(
    #         *args, **kwargs
    #     )


class UserAuthDetails(AbstractBaseUser):

    PENDING = "P"
    APPROVED = "A"

    APPROVAL_STATUS = (
        (PENDING, "Pending"),
        (APPROVED, "Approved")
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

    EX_SERVICE_MEN = "ESM"
    OFFICERS = "OFF"
    MILITARY_NURSING_SERVICES = "MNS"
    ARMY_POSTAL_SERVICE = "APS"
    WIDOWS = "WIDDOW"
    BOARD = "BRD"

    USER_CATEGORY = (
        (EX_SERVICE_MEN, "Ex Service men"),
        (OFFICERS, "Officers"),
        (MILITARY_NURSING_SERVICES, "Military Nursing Services"),
        (ARMY_POSTAL_SERVICE, "Army Postal Services"),
        (WIDOWS, "Widow"),
        (BOARD, "Board"),
    )

    slno = models.AutoField(primary_key=True)
    email = models.EmailField(null=True, blank=True, unique=True)
    username = models.CharField(max_length=50, null=False, unique=True)
    # registrationNumber = models.CharField(max_length=25, null=False)
    # isDeleted = models.BooleanField(default=False)
    userType = models.CharField(
        max_length=10, choices=USER_TYPES, default=USER)
    # userType = forms.ChoiceField(widget=forms.RadioSelect, choices=USER_TYPES)
    userCategory = models.CharField(
        max_length=10, choices=USER_CATEGORY, default=EX_SERVICE_MEN)
    # dateCreated = models.DateTimeField(auto_now_add=True)
    approvalStatus = models.CharField(
        max_length=10, choices=APPROVAL_STATUS, default=PENDING)
    documents = models.FileField(null=True, blank=True)
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


# Create your models here.
