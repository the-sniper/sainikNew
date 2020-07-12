from django.core.management.base import BaseCommand
from StateDistrictList.models import *
from RanksAndServices.models import *


class Command(BaseCommand):

    def add_arguments(self, parser):
        parser.add_argument('-n', '--no_update', action='store_true',
                            help='Do not update if ranks list already exists.')

    def handle(self, *args, **options):

        if options['no_update']:
            if Rank.objects.all().__len__() > 0:
                print("Ranks already present. Not updating as --no_update passed.")
                return

        with open('./ranksFiltered.csv') as file:

            data = file.read().split("\n")
            headings = [x.strip() for x in data[0].split(",")]
            print(headings)
            army = Service.objects.get_or_create(serviceType=ARMY)[0]
            navy = Service.objects.get_or_create(serviceType=NAVY)[0]
            airforce = Service.objects.get_or_create(serviceType=AIRFORCE)[0]
            print(army)
            for element in data[1:]:
                elementList = [x.strip().upper() for x in element.split(",")]
                if not elementList[0]:
                    continue

                element = {}
                for i in range(headings.__len__()):
                    element[headings[i]] = elementList[i]

                if(element['Service'].lower() == 'army'):
                    rank = army.rank_set.get_or_create(rank=element.get(
                        'Rank'), category=element.get('Category'))
                elif(element['Service'].lower() == 'navy'):
                    rank = navy.rank_set.get_or_create(rank=element.get(
                        'Rank'), category=element.get('Category'))
                elif(element['Service'].lower() == 'air force'):
                    rank = airforce.rank_set.get_or_create(rank=element.get(
                        'Rank'), category=element.get('Category'))

                print('Rank Created : ', rank)
