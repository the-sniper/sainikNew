from django.contrib import admin
from django.http import HttpResponseRedirect
from .models import *


class UserAuthDetailsAdmin(admin.ModelAdmin):

    def response_add(self, request, db):
        return HttpResponseRedirect("/admin/ServiceDetails/servicedetails/add/")    

admin.site.register(UserAuthDetails, UserAuthDetailsAdmin)

# Register your models here.
