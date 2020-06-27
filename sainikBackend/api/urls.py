from django.conf.urls import url
from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter
from .views import *
from adminPages.zsbAdmin import *

router = DefaultRouter()
router.register(r"", ZSBAdmin)


urlpatterns = [
    # url(r"user", UserView.as_view(), name = "user"),
    path('user_auth/', include('UserAuth.urls')),
    url('registration_essentials/', RegistrationEssentials.as_view()),
    path('zsb_admin/', include(router.urls))
]

# urlpatterns = format_suffix_patterns(urlpatterns)
