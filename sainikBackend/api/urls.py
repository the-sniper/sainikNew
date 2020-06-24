from django.conf.urls import url
from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from django.conf.urls import url, include
from .views import *


urlpatterns = [
    # url(r"user", UserView.as_view(), name = "user"),
    path('user_auth/', include('UserAuth.urls')),
    url('registration_essentials/', RegistrationEssentials.as_view())
]

# urlpatterns = format_suffix_patterns(urlpatterns)
