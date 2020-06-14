from django.db import models
from UserAuth.models import *

class FamilyDetails(models.Model):

    MARRIED = "M"
    SINGLE = "S"
    DIVORCEE = "D"

    MARITAL_STATUS = (
        (MARRIED, "Married"),
        (SINGLE, "Single"),
        (DIVORCEE, "Divorcee")
    )

    WIFE = "W"
    HUSBAND = "H"

    SPOUSE_RELATION = (
        (WIFE, "Wife"),
        (HUSBAND, "Husband")
    )

    EMPLOYED = "E"
    UN_EMPLOYED = "U"

    SPOUSE_EMP_STATUS = (
        (EMPLOYED, "Employed"),
        (UN_EMPLOYED, "Un employed")
    )



    slno = models.AutoField(primary_key=True)
    user = models.OneToOneField(UserAuthDetails, on_delete=models.CASCADE, related_name="family")
    maritalStatus = models.CharField(max_length=10, choices=MARITAL_STATUS, default = MARRIED)
    marriageDate = models.DateField()
    spouseName = models.CharField(max_length=20)
    spouseRelation = models.CharField(max_length=8, choices=SPOUSE_RELATION, default=WIFE)
    spouseDOB = models.DateField()
    spouseID = models.CharField(max_length=20)
    spouseQualification = models.CharField(max_length=25)
    spouseEmpStatus = models.CharField(max_length=10, choices = SPOUSE_EMP_STATUS, default=UN_EMPLOYED)
    spouseEmpProf = models.CharField(max_length=25)
    spouseRetirementDate = models.DateField()
    nextOfKin = models.CharField(max_length=25)
    relationToESM = models.CharField(max_length=15)

    
    class Meta:
        db_table = "FamilyDetails"

    def __str__(self):
        return str(f"Slno : {self.slno}")



class DependentDetails(models.Model):

    MARRIED = "M"
    SINGLE = "S"
    DIVORCEE = "D"

    MARITAL_STATUS = (
        (MARRIED, "Married"),
        (SINGLE, "Single"),
        (DIVORCEE, "Divorcee")
    )


    EMPLOYED = "E"
    UN_EMPLOYED = "U"

    EMP_STATUS = (
        (EMPLOYED, "Employed"),
        (UN_EMPLOYED, "Un employed")
    )


    SON = "S"
    DAUGHTER = "D"
    FATHER = "F"
    MOTHER = "M"

    DEPENDENT_RELATION = (
        (SON, "Son"),
        (DAUGHTER, "Daughter"),
        (FATHER, "Father"),
        (MOTHER, "Mother")
    )


    slno = models.AutoField(primary_key=True)
    user = models.ForeignKey(UserAuthDetails, on_delete=models.CASCADE, related_name="dependents")
    nameOfDependent = models.CharField(max_length=25)
    dependentRelation = models.CharField(max_length=10, choices = DEPENDENT_RELATION, default=SON)
    DOB = models.DateField()
    qualification = models.CharField(max_length=25)
    academicYear = models.PositiveIntegerField()
    empStatus = models.CharField(max_length=10, choices = EMP_STATUS, default=UN_EMPLOYED)
    maritalStatus = models.CharField(max_length=10, choices=MARITAL_STATUS, default = MARRIED)

    
    class Meta:
        db_table = "DependentDetails"

    def __str__(self):
        return str(f"Slno : {self.slno}")




# Create your models here.
