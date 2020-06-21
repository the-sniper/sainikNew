from django.core.management.base import BaseCommand
from StateDistrictList.models import StateDistrictList


class Command(BaseCommand):

    def handle(self, *args, **options):

        with open('./districtData.csv', "r") as file:
            data = file.read().split("\n")
            headings = data[1].split(",")
            for element in data[2:]:
                element = element.split(",")
                toBeAdded = {}
                for i in range(len(headings)):
                    toBeAdded[headings[i]] = element[i]

                objectCreated = StateDistrictList.objects.create(
                    S_Id=toBeAdded["S_Id"],
                    D_Id=toBeAdded["D_Id"],
                    Slno=toBeAdded["Sno."],
                    StateName=toBeAdded["StateName"],
                    DistrictName=toBeAdded["District Name"],
                    # NumberOfWorkers=toBeAdded["Number of volunteers/ workers"],
                    # NameOfDistrictNodalOfficer=toBeAdded["Name of District Nodal Officer"],
                    # Designation=toBeAdded["Designation"],
                    # MobileNo=toBeAdded["MobileNo"],
                    # EmailId=toBeAdded["Emailid"]
                )
                print(objectCreated)
