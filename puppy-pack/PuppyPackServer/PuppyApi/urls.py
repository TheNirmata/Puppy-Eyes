# This code creates a new URL pattern that maps to a new view called woof

from django.urls import path
from .views import Woof, LoginView, Login, CreateDogTagView, Sign_Up

urlpatterns = [
    path('woof/', Woof),
     path('woof/login/<str:username>/',Login),
     path('woof/CreateDogTag/',Sign_Up),
]