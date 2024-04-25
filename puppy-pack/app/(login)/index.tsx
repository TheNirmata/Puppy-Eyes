import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Pressable, Image, TouchableOpacity, Alert } from 'react-native';
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import tw from 'twrnc';
import  styles from './_layout';
import AccountScreen from '../account/[username]';
import { User } from '../../interface/user';


const GoogleIcon = require('../../assets/icon-buttons/icons8-google-96.png');
const AppleIcon = require('../../assets/icon-buttons/apple-icon.png');
import wolfPackGif from '../../assets/wolf-pack.gif';


export default function LoginScreen({ navigation, route }) {
  const [user, setUser] = useState<User>({username: '', password: '', email:''});
  // const { setUserToken } = route.params;
  const {
    register,
    control,
    handleSubmit, 
    formState: { errors }
  } = useForm<User>({
    defaultValues: {
      username: '',
      password: '',
    }
  });

  const handleLogin = (user: User) =>{
    if (user){
      navigation.navigate('Account');
    }
  };

  return (

    <View style={styles.container}>
      <View style={tw `flex flex-col gap-4 items-center justify-center`}>
        <Text  style={styles.headingText}>Puppy Eyes</Text>
        <View style={tw `flex-col gap-4 m-10 items-center justify-center`}>
        <Controller 
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput 
            style={[tw `w-20  border-red-200 rounded-md`, styles.inputField, {backgroundColor: 'white'}]} 
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            placeholder='Username' 
          />
        )}
        name="Username"
      />
      {errors.username && <Text>Woof! Pup name not found!</Text>}
      <Controller 
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput 
            style={[tw `w-20  border-red-200 rounded-md`, styles.inputField, {backgroundColor: 'white'}]} 
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            placeholder='Password' 
            secureTextEntry={true}
          />
        )}
        name="Password"
      />
      {errors.password && <Text>Woof! password cannot be sniffed out</Text>}
        </View>
        <View style={tw `flex-row items-center justify-center`}>
          <Pressable 
            style={[styles.button, {width: 80, margin: 5 }]}
            delayLongPress={1000}
            onPress={() => handleLogin({...user})}
            >
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
          <Pressable style={[styles.button, {width: 130}]}>
            <Text style={styles.buttonText}>Get A Dogtag</Text>
          </Pressable>
        </View>
      </View>
        <View>
          <Text style={[styles.text, {margin: 30, padding: 10, color: '#4e4349'}, styles.text]}>Or Login With...</Text>
      </View>
      <TouchableOpacity style={{flexDirection: 'row', alignItems:'center', justifyContent:'center' }}>
      <Image source={GoogleIcon} style={{ width: 80, height: 80, bottom: 20 }} />
      <Image source={AppleIcon}  style={{ width: 70, height: 70, bottom: 25 }} />
    </TouchableOpacity>
      
    </View>
  );
}