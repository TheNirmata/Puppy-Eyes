//@ts-nocheck
import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, Pressable, Image, TouchableOpacity } from 'react-native';
import { useForm, Controller } from "react-hook-form"
import tw from 'twrnc';
import  styles from './_layout';
import { PasswordModal } from '../../components/CredentialsModal/PasswordModal';
import { User } from '../../interface/user';
import  { UserContext }  from '../../context/userContext';

const GoogleIcon = require('../../assets/icon-buttons/icons8-google-96.png');
const AppleIcon = require('../../assets/icon-buttons/apple-icon.png');
import wolfPackGif from '../../assets/wolf-pack.gif';
import { IP_ADDRESS } from '@env'


export default function LoginScreen({ navigation }) {
  const { user, setUser, handleLogin } = useContext(UserContext);
  const [isPasswordModalVisible, setIsPasswordModalVisible] = useState(false);

  useEffect(() => {
    fetch(`http://${IP_ADDRESS}:8000/PuppyApi/woof/`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then(response => response.json())
      .then(data => console.log(`connected to django`))
      .catch(error => console.error(`ERROR >>: ${error}`));
  },[]);

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
  const onSubmit = data => {
    handleLogin(data);
    console.log({data});
    navigation.navigate('Account',{user: user});
    
  };
  const handleModal = () => {
    setIsPasswordModalVisible(true);
  };

  const closeModal = () => {
    setIsPasswordModalVisible(false);
  };

  const handleSignup = () => {
    navigation.navigate('GetADogTag');
  };

  return (
    <View style={styles.container}>
      <View style={tw `flex flex-col gap-4 items-center justify-center`}>
        <Text  style={styles.headingText}>Puppy Eyes</Text>
        <View style={tw `flex-col gap-4 m-5 items-center justify-center`}>
          {/* <form onSubmit={}></form> */}
        <Controller 
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput 
            style={[tw `w-20  border-red-200 rounded-md`, styles.inputField, {backgroundColor: 'white'}]} 
            onChangeText={input =>{
              onChange(input);
              setUser({...user, username: input});
            }}
            onBlur={onBlur}
            value={value}
            placeholder='Username' 
            placeholderTextColor='#af593e'
          />
        )}
        name="username"
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
            onChangeText={input =>{
              onChange(input);
              setUser({...user, password: input});
            }}
            onBlur={onBlur}
            value={value}
            placeholder='Password' 
            placeholderTextColor='#af593e'
            secureTextEntry={true}
          />
        )}
        name="password"
      />
      {errors.password && <Text>Woof! password cannot be sniffed out</Text>}
        </View>

        {/* FORGOT PASSWORD */}
          <Pressable 
            onPress={handleModal} > 
            <Text style={{color:'blue'}}>Forgot Password?</Text>
          </Pressable>

          {isPasswordModalVisible && <PasswordModal open={isPasswordModalVisible} close={closeModal} />}
    
        {/* Login OR Sign up */}
        <View style={tw `flex-row items-center justify-center`}>
          {/* Login */}
          <Pressable 
            style={[styles.button, {width: 80, margin: 5}]}
            delayLongPress={1000}
            onPress={handleSubmit(onSubmit)}
            >
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
          {/* Signup */}
          <Pressable 
          style={[styles.button, {width: 130}]}
          onPress={handleSignup}
          >
            <Text style={styles.buttonText}>Get A Dogtag</Text>
          </Pressable>
        </View>
      </View>
        <View>
          <Text style={[styles.text, {margin: 30, padding: 10}, styles.text]}>Or Login With...</Text>
      </View>
        <TouchableOpacity style={{flexDirection: 'row', alignItems:'center', justifyContent:'center' }}>
          <Image source={GoogleIcon} style={{ width: 80, height: 80, bottom: 20 }} />
          <Image source={AppleIcon}  style={{ width: 70, height: 70, bottom: 25 }} />
      </TouchableOpacity>
    </View>
  );
}