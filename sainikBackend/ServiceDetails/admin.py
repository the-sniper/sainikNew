from django.contrib import admin
from django.http import HttpResponseRedirect
from .models import *


class ServiceDetailsAdmin(admin.ModelAdmin):

    # def response_change(self, request, db):
    #     return HttpResponseRedirect("/admin/ServiceDetails/pensiondetails/add/")

    def response_add(self, request, db):
        return HttpResponseRedirect("/admin/ServiceDetails/pensiondetails/add/")


class DischargeDetailsAdmin(admin.ModelAdmin):

    # def response_change(self, request, db):
    #     return HttpResponseRedirect("/admin/userDetails/userdetails/add/")

    def response_add(self, request, db):
        return HttpResponseRedirect("/admin/userDetails/userdetails/add/")


admin.site.register(ServiceDetails, ServiceDetailsAdmin)
admin.site.register(DischargeDetails, DischargeDetailsAdmin)

# Register your models here.
