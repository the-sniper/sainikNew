from django.db import models
from RanksAndServices.models import *


class Trade(models.Model):

    slno = models.AutoField(primary_key=True)
    tradeName = models.CharField(
        max_length=40, null=False
    )
    serviceType = models.ForeignKey(
        Service, on_delete=models.CASCADE, null=False)
    ncoCode = models.CharField(max_length=6, null=True)

    class Meta:
        db_table = "Trade"

    def __str__(self):
        return str(f"Slno : {self.slno}, tradeName : {self.tradeName}, serviceType : {self.serviceType}")

# Create your models here.
