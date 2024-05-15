 # Serializers are a way of transforming django models into a standard format, in this case JSON, that can be transformed back to a model object on request.



from django.db import IntegrityError
from rest_framework import serializers
from .models import  PupParent
from django.contrib.auth import authenticate



class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(style={'input_type': 'password'})
        
    def validate(self, data):
        username = data.get('username', '')
        password = data.get('password', '')

        if username and password:
            user = authenticate(request=self.context.get('request'),
                                username=username, password=password)
            if user:
                if user.is_active:
                    data['user'] = user
                else:
                    msg = 'User is deactivated.'
                    raise serializers.ValidationError(msg)
            else:
                msg = 'Unable to log in with provided credentials.'
                raise serializers.ValidationError(msg)
        else:
            msg = 'Must provide username and password both.'
            raise serializers.ValidationError(msg)
        return data
    
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model =  PupParent
        fields = ['firstname', 'lastname', 'username', 'email', 'password', 'phone']
        extra_kwargs = {'password': {'write_only': True}}

    def validate_username(self, value):
        # """
        # Check that the username is unique.
        # """
        if PupParent.objects.filter(username=value).exists():
            raise serializers.ValidationError("Username is already taken.")
        return value

    def validate_email(self, value):
        # """
        # Check that the email is unique.
        # """
        if PupParent.objects.filter(email=value).exists():
            raise serializers.ValidationError("Email is already in use.")
        return value
      
    def create(self, validated_data):
      try:
          user = PupParent(**validated_data)
          user.username = validated_data.get('username').lower() 
          user.email = validated_data.get('email').lower() 
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
