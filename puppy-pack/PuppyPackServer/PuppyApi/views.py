from django.shortcuts import render

# Create your views here.
# Creates a new view that returns a JSON response with the message 'Bark, Bark from Django'

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import PupParent
import json


from django.contrib.auth import get_user_model, login, authenticate
from rest_framework.decorators import api_view
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework import status, viewsets
from rest_framework.views import APIView
from PuppyApi.serializers import UserSerializer, LoginSerializer
from django.contrib.auth import authenticate


  
# welcome view
@api_view(['GET'])
def Woof(request): 
  data = request.data
  return JsonResponse({
    'message': 'Bark, Bark from Django!',
    'data': data
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
    # if user exists 
    if PupParent.objects.filter(username=serializer.validated_data.get('username')).exists():
      return Response(serializer.ValidationError("Username is already taken."), status=status.HTTP_400_BAD_REQUEST)
    else:
      serializer.save()
  
# login 
class LoginView(APIView):  
    mode = PupParent
    serializer_class = LoginSerializer

    def post(self, request):
      serializer = self.serializer_class(data=request.data)
      if serializer.is_valid() and request.method == 'POST':
          username = serializer.validated_data.get('username')
          password = serializer.validated_data.get('password')
          user = authenticate(request, username=username, password=password)
          if user is not None:
              login(request, user)
              # User is authenticated, return a success response
              return Response({'status': 'success'}, status=status.HTTP_200_OK)
          else:
              # Authentication failed, return an error response
              return Response({'error': 'Invalid username/password'}, status=status.HTTP_400_BAD_REQUEST)
      else:
          return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
          
    def get(self, request):
      username = request.GET('username')
      password = request.GET('password')
      user = authenticate(username=username, password=password)
      if user is not None:
        token, _ = Token.objects.get_or_create(user=user)
        return Response({'token': token.key, 'user_id': user.id}, status=status.HTTP_200_OK)
      else:
        return Response({'error': 'Wrong Credentials'}, status=status.HTTP_400_BAD_REQUEST)
    
# logout
class LogoutView(APIView):
  def post(self, request):
    request.user.auth_token.delete()
    return Response(status=status.HTTP_200_OK)