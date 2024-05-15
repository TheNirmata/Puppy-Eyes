 # Serializers are a way of transforming django models into a standard format, in this case JSON, that can be transformed back to a model object on request.

from django.contrib.auth import get_user_model
from django.db import IntegrityError
from rest_framework import serializers
from .models import  PupParent
# NewUser

class UserSerializer(serializers.ModelSerializer):
    username = serializers.CharField(max_length=100)
    password = serializers.CharField(max_length=100)
    class Meta:
        model =  PupParent
        fields = ['firstname', 'lastname', 'username', 'email', 'password', 'phone']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
      try:
          user = PupParent(**validated_data)
          user.set_password(validated_data.get('password'))
          user.save()
          return {
              'status': 200,
              ' PupParent': {
                  'firstname': user.firstname,
                  'lastname': user.lastname,
                  'username': user.username,
                  'email': user.email,
                  'password': user.password,
                  'phone': user.phone,
              },
              'message': 'Woof! Successfully signed up!'
          }
      except IntegrityError:
          return {
              'status': 400,
              'message': 'Woof! This user already exists!'
          }
