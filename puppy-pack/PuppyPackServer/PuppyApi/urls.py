# This code creates a new URL pattern that maps to a new view called woof

from django.urls import path, include
from .views import Woof
from .views import UserViewSet, CreateUserView, LoginView, LogoutView
from rest_framework.authtoken.views import obtain_auth_token
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'woof/users', UserViewSet, basename='users')

urlpatterns = [
    path(r'woof/', Woof),
    path(r'woof/login/', LoginView.as_view(), name='login'),
    path(r'woof/CreateDogTag/', CreateUserView.as_view(), name='signup'),
    path('', include(router.urls)),
]