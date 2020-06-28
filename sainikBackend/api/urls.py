from django.conf.urls import url
from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter
from .views import *
from adminPages.Admin import *

router = DefaultRouter()
router.register(r"", Admin)


urlpatterns = [
    # url(r"user", UserView.as_view(), name = "user"),
    path('user_auth/', include('UserAuth.urls')),
    url('registration_essentials/', RegistrationEssentials.as_view()),
    path('admin/', include(router.urls))
]

# urlpatterns = format_suffix_patterns(urlpatterns)
