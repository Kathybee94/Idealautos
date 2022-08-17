from django import forms
from ideal_app.models import *
from django.contrib.auth.models import User


class ContactForm (forms.ModelForm):
    Your_Name= forms.CharField(widget=forms.TextInput(attrs={'class':'form-control', 'placeholder': 'Full Name'}))
    Your_Email= forms.CharField(widget=forms.TextInput(attrs={'class':'form-control', 'placeholder': 'Your Email'}))
    Subject= forms.CharField(widget=forms.TextInput(attrs={'class':'form-control', 'placeholder': 'Subject'}))
    Message= forms.CharField(widget=forms.Textarea(attrs={'class':'form-control', 'placeholder': 'Message', 'rows': '4', 'id': 'usercomment'}))
    class Meta():
        model = Contact
        fields = '__all__'