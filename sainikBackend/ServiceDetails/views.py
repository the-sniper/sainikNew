from rest_framework.response import Response
from rest_framework import viewsets
from .models import *
from .serializers import *
from .permissions import *


class ServiceDetailsView(viewsets.ModelViewSet):

    queryset = ServiceDetails.objects.all()
    serializer_class = ServiceDetailsSerializer
    permission_classes = (IsUserOrAdmin,)

    def update(self, request, pk=None):
        object = self.get_object()
        serializer = ServiceDetailsSerializer(
            object, data=request.data, partial=True, context=request)
        if serializer.is_valid(raise_exception=True):
            serializer.save()

        return Response(serializer.data)


class DischargeDetailsView(viewsets.ModelViewSet):

    queryset = DischargeDetails.objects.all()
    serializer_class = DischargeDetailsSerializer
    permission_classes = (IsUserOrAdmin,)

    def update(self, request, pk = None):
        object = self.get_object()
        serializer  = DischargeDetailsSerializer(object, data = request.data, partial = True, context = request)
        if serializer.is_valid(raise_exception = True):
            serializer.save()
        return Response(serializers.data)


# Create your views here.
