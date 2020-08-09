from django.db import models
from UserAuth.models import *


ARMY = "AR"
NAVY = "NV"
AIRFORCE = "AF"

SERVICE_TYPES = (
    (ARMY, 'ARMY'),
    (NAVY, 'NAVY'),
    (AIRFORCE, 'AIR FORCE'),
)

OFFICER = 'OF'
OTHERS = 'OR'

CATEGORIES = (
    (OFFICER, 'OFFICER'),
    (OTHERS, 'OTHERS')
)


class Service(models.Model):

    slno = models.AutoField(primary_key=True)
    serviceType = models.CharField(
        max_length=3, choices=SERVICE_TYPES, default=ARMY)

    class Meta:
        db_table = "Service"

    def __str__(self):
        return str(f"Slno : {self.slno}, serviceType : {self.serviceType}")


class Rank(models.Model):

    slno = models.AutoField(primary_key=True)
    rank = models.CharField(max_length=25, null=False)
    service = models.ForeignKey(Service, null=False, on_delete=models.CASCADE)
    category = models.CharField(
        max_length=3, choices=CATEGORIES, default=OTHERS)

    class Meta:
        db_table = "Rank"

    def __str__(self):
        return str(f"Slno : {self.slno}, rank : {self.rank}, category : {self.category}, service : {self.service}")
