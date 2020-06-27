from django.db import models


class State(models.Model):

    S_Id = models.PositiveIntegerField(primary_key=True)
    StateName = models.CharField(max_length=30)

    class Meta:
        db_table = "State"

    def __str__(self):
        return str(f"S_Id : {self.S_Id}, State : {self.StateName}")


class District(models.Model):

    D_Id = models.PositiveIntegerField(primary_key=True)
    State = models.ForeignKey(State, on_delete=models.CASCADE)
    DistrictName = models.CharField(max_length=50)

    class Meta:
        db_table = "District"

    def __str__(self):
        return str(f"D_Id : {self.D_Id}, State : {self.State}, DistrictName : {self.DistrictName}")


# Create your models here.
