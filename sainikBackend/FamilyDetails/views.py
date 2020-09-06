from rest_framework.response import Response
from rest_framework import viewsets
from .models import *
from .serializers import *
from .permissions import *


class FamilyDetailsView(viewsets.ModelViewSet):

    queryset = FamilyDetails.objects.all()
    serializer_class = FamilyDetailsSerializer
    permission_classes = (IsUserOrAdmin, )

    def update(self, request, pk = None):

        object = self.get_object()
        serializer = FamilyDetailsSerializer(object, data = request.data, partial = True, context = request)
        if serializer.is_valid(raise_exception= True):
            serializer.save()

        return Response(serializer.data)

class DependentDetailsView(viewsets.ModelViewSet):

    queryset = DependentDetails.objects.all()
    serializer_class = DependentDetailsSerializer
    permission_classes = (IsUserOrAdmin, )

    def update(self, request, pk = None):

        object = self.get_object()
        serializer = DependentDetailsSerializer(object, data = request.data, partial = True, context = request)
        if serializer.is_valid(raise_exception= True):
            serializer.save()

        return Response(serializer.data)
# Create your views here.
