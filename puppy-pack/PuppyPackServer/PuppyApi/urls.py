# This code creates a new URL pattern that maps to a new view called woof

from django.urls import path
from .views import Woof

urlpatterns = [
    path('woof/', Woof),
     path('woof/login', Woof),
]