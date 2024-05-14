#model by django automatically makes tables in neon (postgresql)
from django.db import models

# Create your models here.
#human
class Owner(models.Model):
    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100, default='')
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    address = models.CharField(max_length=200)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    zip = models.CharField(max_length=10)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.name
#dog
class Pup(models.Model):
    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100, default='')
    breed = models.CharField(max_length=100)
    bio = models.TextField()

