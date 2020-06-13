from django.db import models
from UserAuth.models import *


class ServiceDetails(models.Model):

    SEPOY = "SP"
    HAVILDAR = "HV"
    LEUTENANT = "LT"
    COLONEL = "CL"
    CAPTAIN = "CP"
    MAJOR = "MJ"

    RANKS = (
        (SEPOY, "SEPOY"),
        (HAVILDAR, "HAVILDAR"),
        (LEUTENANT, "LEUTENANT"),
        (COLONEL, "COLONEL"),
        (CAPTAIN, "CAPTAIN"),
        (MAJOR, "MAJOR")
    )

    NONE = ""
    PARAM_VEER_CHAKRA = "PVC"
    ASHOK_CHAKRA = "AC"

    DECORATIONS = (
        (NONE, "NONE"),
        (PARAM_VEER_CHAKRA, "PARAM_VEER_CHAKRA"),
        (ASHOK_CHAKRA, "ASHOK_CHAKRA"),
    )

    AIR_FORCE = "AF"
    ARMY = "AR"
    NAVY = "NV"

    SERVICE = (
        (AIR_FORCE, "Air Force"),
        (ARMY, "Army"),
        (NAVY, "Navy")
    )

    slno = models.AutoField(primary_key=True)
    user = models.OneToOneField(UserAuthDetails, on_delete = models.CASCADE, db_column = 'user')
    service = models.CharField(max_length=10, choices=SERVICE, default = AIR_FORCE)
    serviceNumber = models.CharField(max_length=20)
    enrollmentDate = models.DateField()
    rank = models.CharField(max_length=5, choices=RANKS, default=SEPOY)
    trade = models.CharField(max_length=20)
    operationsAttended = models.IntegerField()
    decorations = models.CharField(max_length=5, choices=DECORATIONS, default= NONE, blank=True)
    groups = models.CharField(max_length=5, blank=True, null=True)
    inWW2 = models.BooleanField(default=False)

    class Meta:
        db_table = "ServiceDetails"

    def __str__(self):
        return str(f"Slno : {self.slno}, serviceNumber : {self.serviceNumber}")

# Create your models here.


class PensionDetails(models.Model):

    slno = models.AutoField(primary_key=True)
    user = models.ForeignKey(UserAuthDetails, on_delete = models.CASCADE, db_column = 'user')
    lastUnit = models.CharField(max_length=20)
    dateDischarged = models.DateField()
    deathOnService = models.BooleanField(default=False)
    deathDetails = models.CharField(max_length=20, blank=True, null=True)
    medCategoryAtDischarge = models.CharField(max_length=20)
    characterWhileDischarge = models.CharField(max_length=15)
    dischargeBook = models.CharField(max_length = 15)
    pppNum = models.PositiveIntegerField()
    recordOffice = models.CharField(max_length=20)
    pensionSanctioned = models.PositiveIntegerField(default = 0)
    disabilityPension = models.PositiveIntegerField(default = 0)
    percentDisability = models.PositiveIntegerField(default = 0)
    pensionAccNum = models.PositiveIntegerField()
    bankName = models.CharField(max_length = 30)
    branchName = models.CharField(max_length=20)
    ifsc = models.CharField(max_length=15)
    board = models.CharField(max_length=30)

    class Meta:
        db_table = "PensionDetails"

    def __str__(self):
        return str(f"Slno : {self.slno}.")



