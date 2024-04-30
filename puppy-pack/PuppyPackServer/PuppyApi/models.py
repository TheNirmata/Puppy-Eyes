#model by django automatically makes tables in neon (postgresql)
from django.db import models

# Create your models here.
#human
class Onwer(models.Model):
    name = models.CharField(max_length=100)
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
    name = models.CharField(max_length=100)
    breed = models.CharField(max_length=100)
    bio = models.TextField()

#sample user 
