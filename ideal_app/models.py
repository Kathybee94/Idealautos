from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Product(models.Model):
    product_name= models.CharField(max_length=100)
    product_price= models.IntegerField()

def __str__(self):
    return self.product_name


class Services(models.Model):
    title=models.CharField(max_length=100)
    content=models.TextField(max_length=200)
    image=models.ImageField(null=True, blank=True, upload_to= 'upload/pics')



def __str_(self):
    return self.title


class Testimonial(models.Model):
    name=models.CharField(max_length=100)
    content=models.TextField(max_length=500)
    image=models.ImageField(null=True, blank=True, upload_to= 'upload/pics')


class Contact(models.Model):
    Your_Name= models.CharField(max_length=20)
    Your_Email= models.EmailField()
    Subject= models.CharField(max_length=20)
    Message= models.TextField(max_length=200)
 
    def __str__(self):
        return self.Your_Name  