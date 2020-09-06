from django.conf.urls import url
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *


router = DefaultRouter()
router.register(r"family-details", FamilyDetailsView)
router.register(r"dependent-details", DependentDetailsView)



urlpatterns = [
    path(r'', include(router.urls)),
]
  