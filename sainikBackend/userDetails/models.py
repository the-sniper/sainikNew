from django.db import models
from UserAuth.models import UserAuthDetails
from sainikBackend import helper_functions
from django.core.exceptions import ValidationError


class userDetails(models.Model):

    slno = models.AutoField(primary_key=True)
    user = models.OneToOneField(UserAuthDetails, on_delete=models.CASCADE)
    fullName = models.CharField(max_length=50, null=True)
    dob = models.DateField(null=True)
    fatherName = models.CharField(max_length=50, null=True)
    motherName = models.CharField(max_length=50, null=True)
    idMark = models.CharField(max_length=50, null=True)
    aadharNum = models.PositiveIntegerField(null=True)
    panNum = models.CharField(max_length=15, null=True)
    echsCardNum = models.CharField(max_length=20, null=True)
    religion = models.CharField(max_length=20, null=True, blank=True)
    caste = models.CharField(max_length=20, null=True, blank=True)
    birthPlace = models.CharField(max_length=30, null=True)
    birthState = models.CharField(max_length=25, null=True)
    birthCity = models.CharField(max_length=30, null=True)
    eduQualInCivil = models.CharField(max_length=20, null=True)
    eduQualInService = models.CharField(max_length=20, null=True, blank=True)
    isCivilEmployed = models.BooleanField(default=False)
    isCivilPensioner = models.BooleanField(default=False)
    civilPensionAmount = models.PositiveIntegerField(default=0, null=True)
    civilEmployer = models.CharField(max_length=25, null=True, blank=True)
    monthlyIncome = models.PositiveIntegerField(default=0)
    deptInCivil = models.CharField(max_length=25, null=True, blank=True)
    civilDateRetirement = models.DateField(null=True, blank=True)
    officialContactNum = models.PositiveIntegerField(null=True, blank=True)

    class Meta:

        db_table = "PersonalDetails"

    def __str__(self):
        return str(f"Slno : {self.slno}.")

    def clean(self):
        self.birthState = helper_functions.validate_indian_states(
            self.birthState)
        if not self.birthState:
            raise ValidationError("Please enter a valid birth state")


class ContactDetails(models.Model):

    TEMPORARY = "T"
    PERMANENT = "P"

    TEMP_OR_PERM = (
        (TEMPORARY, "Temporary"),
        (PERMANENT, "Permanent")
    )

    slno = models.AutoField(primary_key=True)
    user = models.ForeignKey(UserAuthDetails, on_delete=models.CASCADE)
    telephoneNumber = models.PositiveIntegerField(null=True)
    state = models.CharField(max_length=20, null=True)
    district = models.CharField(max_length=20, null=True)
    city = models.CharField(max_length=20, null=True)
    streetAddress = models.CharField(max_length=45, null=True)
    houseNumber = models.CharField(max_length=10, null=True)
    policeStation = models.CharField(max_length=30, null=True)
    tempOrPerm = models.CharField(
        choices=TEMP_OR_PERM, max_length=9, blank=True, null=True)
    class Meta:
        db_table = "ContactDetails"

    def __str__(self):
        return str(f"Slno : {self.slno}")
