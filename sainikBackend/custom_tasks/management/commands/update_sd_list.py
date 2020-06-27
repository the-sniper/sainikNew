from django.core.management.base import BaseCommand
from StateDistrictList.models import *


class Command(BaseCommand):

    def handle(self, *args, **options):

        with open('./districtData.csv', "r") as file:
            data = file.read().split("\n")
            headings = data[1].split(",")
            for element in data[2:]:
                element = element.split(",")
                toBeAdded = {}
                for i in range(len(headings)):
                    toBeAdded[headings[i]] = str(element[i]).strip()

                state = State.objects.get_or_create(
                    S_Id=toBeAdded["S_Id"], StateName=toBeAdded["StateName"])[0]
                objectCreated = state.district_set.get_or_create(
                    D_Id=toBeAdded["D_Id"], DistrictName=toBeAdded["District Name"])[0]

                print(objectCreated)
