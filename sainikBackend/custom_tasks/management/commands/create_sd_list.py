from django.core.management.base import BaseCommand
from StateDistrictList.models import *


class Command(BaseCommand):

    def add_arguments(self, parser):
        parser.add_argument('-n', '--no_update', action='store_true',
                            help='Do not update if states and district list already exists.')

    def handle(self, *args, **options):

        if options['no_update']:
            if State.objects.all().__len__() > 0:
                print("States and District list already present. Not updating as --no_update passed.")
                return

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
