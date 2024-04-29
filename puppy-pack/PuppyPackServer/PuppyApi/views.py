from django.shortcuts import render

# Create your views here.
# Creates a new view that returns a JSON response with the message 'Bark, Bark from Django'

from django.http import JsonResponse

def Woof(request): 
  return JsonResponse({
    'message': 'Bark, Bark from Django!',
  })