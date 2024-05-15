from django.shortcuts import render

# Create your views here.
# Creates a new view that returns a JSON response with the message 'Bark, Bark from Django'

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import PupParent
import json


from django.contrib.auth import get_user_model
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework import status, viewsets
from rest_framework.views import APIView
from PuppyApi.serializers import UserSerializer 
from django.contrib.auth import authenticate


  
# welcome view
def Woof(request): 
  return JsonResponse({
    'message': 'Bark, Bark from Django!',
  })
    
#login view 
def LoginView(request):
  return JsonResponse({
    'message': 'Woof Woof Login view!!',
  })
  
#Dogtag view 
def CreateDogTagView(request):
  return JsonResponse({
    'message': 'Woof Woof pack dogtag view!!',
  })
  
class UserViewSet(viewsets.ModelViewSet):
  queryset = get_user_model().objects.all()
  serializer_class = UserSerializer
  permission_classes = [AllowAny]
  
# signup
class CreateUserView(CreateAPIView):
  # model = NewUser
  model = PupParent
  permission_classes = [AllowAny]
  serializer_class = UserSerializer
  
  def post(self, request):
    serializer = self.get_serializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    self.perform_create(serializer)
    token, _ = Token.objects.get_or_create(user=serializer.instance)
    return Response({'token': token.key}, status=status.HTTP_201_CREATED)
    
  def perform_create(self, serializer):
    serializer.save()
  
# login 
class LoginView(APIView):
  permission_classes = [AllowAny]
  
  def post(self, request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(username=username, password=password)
    if user:
      token, _ = Token.objects.get_or_create(user=user)
      return Response({'token': token.key})
    else:
      return Response({'error': 'Wrong Credentials'}, status=status.HTTP_400_BAD_REQUEST)
    
# logout
class LogoutView(APIView):
  def post(self, request):
    request.user.auth_token.delete()
    return Response(status=status.HTTP_200_OK)