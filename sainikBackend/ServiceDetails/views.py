from rest_framework.response import Response
from rest_framework import viewsets
from .models import *
from .serializers import *
from .permissions import *


class ServiceDetailsView(viewsets.ModelViewSet):

    queryset = ServiceDetails.objects.all()
    serializer_class = ServiceDetailsSerializer
    permission_classes = (IsUserOrAdmin,)


class DischargeDetailsView(viewsets.ModelViewSet):

    queryset = DischargeDetails.objects.all()
    serializer_class = DischargeDetailsSerializer
    permission_classes = (IsUserOrAdmin,)


# Create your views here.
