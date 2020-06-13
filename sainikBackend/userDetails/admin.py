from django.contrib import admin
from django.http import HttpResponseRedirect
from .models import *
from sainikBackend import helper_functions
from django import forms

class userDetailsForm(forms.ModelForm):

    class Meta:
        model = userDetails
        fields = '__all__'
        state_choices = helper_functions.return_states_tuple_list()
        widgets = {
        "birthState": forms.Select(choices=state_choices)
        }

class UserDetailsAdmin(admin.ModelAdmin):
    
    # form = userDetailsForm

    # def response_change(self, request, db):
    #     return HttpResponseRedirect("/admin/ServiceDetails/pensiondetails/add/")

    def response_add(self, request, db):
        return HttpResponseRedirect("/admin/userDetails/contactdetails/add/")    
    


class ContactDetailsAdmin(admin.ModelAdmin):

    def response_add(self, request, db):
        return HttpResponseRedirect("/admin/FamilyDetails/familydetails/add/")    

admin.site.register(userDetails, UserDetailsAdmin)
admin.site.register(ContactDetails, ContactDetailsAdmin)

# Register your models here.
