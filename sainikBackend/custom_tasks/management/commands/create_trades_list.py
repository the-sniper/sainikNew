from django.core.management.base import BaseCommand
from Trades.models import *
from RanksAndServices.models import *
import pandas


class Command(BaseCommand):

    def add_arguments(self, parser):
        parser.add_argument('-n', '--no_update', action='store_true',
                            help='Do not update if Trades list already exists.')

    def handle(self, *args, **options):

        if options['no_update']:
            if Trade.objects.all().__len__() > 0:
                print("Trades list already present. Not updating as --no_update passed.")
                return
        try:
            df = pandas.read_csv('./TradesCombined.csv')
            if df.empty:
                print("Dataframe empty.")
                return
        except FileNotFoundError as e:
            print(e)

        df.columns = [x.lower() for x in df.columns]

        army = Service.objects.get_or_create(serviceType=ARMY)[0]
        navy = Service.objects.get_or_create(serviceType=NAVY)[0]
        airforce = Service.objects.get_or_create(serviceType=AIRFORCE)[0]

        for index in df.index:

            if(df['servicetype'][index] == 'ARMY'):
                trade = army.trade_set.get_or_create(
                    tradeName=df['tradename'][index], ncoCode=df['nco'][index])
            elif(df['servicetype'][index] == 'NAVY'):
                trade = navy.trade_set.get_or_create(
                    tradeName=df['tradename'][index], ncoCode=df['nco'][index])
            elif(df['servicetype'][index] == 'AIR FORCE'):
                trade = airforce.trade_set.get_or_create(
                    tradeName=df['tradename'][index], ncoCode=df['nco'][index])
            else:
                print(
                    f'Service Type {df["servicetype"][index]} not handled.')
                print('Element : ', df.loc[index])

            print('Trade Created : ', trade)