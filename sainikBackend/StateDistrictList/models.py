from django.db import models


class StateDistrictList(models.Model):

    S_Id = models.PositiveIntegerField()
    D_Id = models.PositiveIntegerField()
    Slno = models.AutoField(primary_key=True)
    StateName = models.CharField(max_length=30)
    DistrictName = models.CharField(max_length=50)
    NumberOfWorkers = models.PositiveIntegerField(null=True)
    NameOfDistrictNodalOfficer = models.CharField(max_length=50, null = True)
    Designation = models.CharField(max_length=25, null = True)
    MobileNo = models.CharField(max_length=15, null = True)
    EmailId = models.CharField(max_length=30, null = True)

    class Meta:
        db_table = "StateDistrictList"

    def __str__(self):
        return str(f"Slno : {self.Slno}, State : {self.StateName}, DistrictName : {self.DistrictName}, NodalOfficer : {self.NameOfDistrictNodalOfficer}")


# Create your models here.
