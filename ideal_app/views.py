from django.shortcuts import render
from django.http import HttpResponse
from ideal_app. models import *
from ideal_app.forms import *

# Create your views here.

def ideal(request):
    
    return render(request, 'ideal_app/index.html', {'ideal':ideal, })

def  payments(request):
    return render(request, 'ideal_app/payments.html', {'payments':payments})

def rates(request):
    return render(request, 'ideal_app/rates.html', {'rates':rates})

def request_r(request):
    return render(request, 'ideal_app/requests.html', {'req':request_r})
 
def contact(request):
    if request.method == 'POST':
        contact_form = ContactForm(request.Post)
        if contact_form.is_valid():
            contact_form.save()
    else:
        contact_form = ContactForm()        
    return render(request, 'ideal_app/contactus.html', {'contact':contact_form})            
