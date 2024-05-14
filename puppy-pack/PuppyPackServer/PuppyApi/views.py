from django.shortcuts import render

# Create your views here.
# Creates a new view that returns a JSON response with the message 'Bark, Bark from Django'

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Owner
import json

def Woof(request): 
  return JsonResponse({
    'message': 'Bark, Bark from Django!',
  })
  
#login view 
def LoginView(request):
  return JsonResponse({
    'message': 'Woof Woof Login view!!',
  })
  
@csrf_exempt
def Login(request):
  if (request.method == 'POST'):
    data = json.loads(request.body)
    if (Owner.objects.filter(username=data['username']).exists() and Owner.objects.filter(password=data['password']).exists()):
      return JsonResponse({
        'message': 'Woof Woof Login successful',
      })
    else:
      return JsonResponse({
        'message': 'Woof Woof Login failed',
      })
  
#Dogtag view 
def CreateDogTagView(request):
  return JsonResponse({
    'message': 'Woof Woof pack dogtag view!!',
  })
  
@csrf_exempt
def Sign_Up(request):
  # Check if the user exists
  if request.method == 'POST':
      data = json.loads(request.body)
      if (Owner.objects.filter(email=data['email']).exists() or Owner.object.filter(username=data['username']).exists()):
        return JsonResponse({
          'message': 'User already exists',
        })
      owner = Owner(
        name = data['name'],
        email = data['email'],
        phone = data['phone'],
        address = data['address'],
        city = data['city'],
        state = data['state'],
        zip = data['zip']
      )
      owner.save()
      return JsonResponse({'message': 'User created successfully'}, status=201)
  else:
      return JsonResponse({'message': 'Invalid request',}, status=400)
  