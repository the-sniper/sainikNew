from django.contrib import admin
from django.http import HttpResponseRedirect
from .models import *

class FamilyDetailsAdmin(admin.ModelAdmin):

    def response_add(self, request, db):
        return HttpResponseRedirect("/admin/FamilyDetails/dependentdetails/add/")    

class DependentDetailsAdmin(admin.ModelAdmin):

    def response_add(self, request, db):
        return HttpResponseRedirect("/admin/UserAuth/userauthdetails/")    

admin.site.register(FamilyDetails, FamilyDetailsAdmin)
admin.site.register(DependentDetails, DependentDetailsAdmin)

# Register your models here.
