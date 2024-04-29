import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Pressable, Image, TouchableOpacity, Linking } from 'react-native';
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import tw from 'twrnc';
import  styles from './_layout';
import { PasswordModal } from '../../components/modal/PasswordModal';
import { User } from '../../interface/user';


const GoogleIcon = require('../../assets/icon-buttons/icons8-google-96.png');
const AppleIcon = require('../../assets/icon-buttons/apple-icon.png');
import wolfPackGif from '../../assets/wolf-pack.gif';


export default function LoginScreen({ navigation, route }) {
  const [user, setUser] = useState<User>({username: '', password: '', email:''});
  const [isPasswordModalVisible, setIsPasswordModalVisible] = useState(false);

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

  useEffect(()=>{
    fetch('http://127.0.0.1:8000/PuppyApi/woof/login', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(data => console.log(data))
  },[]);

  // const handleLogin = async(user: User): Promise<any> =>{
  //   try {
  //     if (!user.username || !user.password){
  //       alert('Please enter a username or password')
  //     }
  //     if (user.username && user.password){
  //       const response = await fetch(`http://localhost:8000/PuppyApi/woof/${user.username}`, {
  //         method: 'GET',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({
  //           username: user.username,
  //           password: user.password,
  //         }),
  //       });
  //       const data = await response.json();

  //       if (data.status === 200) {
  //         setUser({
  //           username: user.username,
  //           password: user.password,
  //           email: user.email
  //         });
  //         navigation.navigate('Account',{user: user});
  //       }
  //     return Promise.resolve();
  //     }
  //   }catch(error) {
  //     console.error(error);
  //   }
  // };

  const handleModal = () => {
    setIsPasswordModalVisible(true);
  };

  const closeModal = () => {
    setIsPasswordModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={tw `flex flex-col gap-4 items-center justify-center`}>
        <Text  style={styles.headingText}>Puppy Eyes</Text>
        <View style={tw `flex-col gap-4 m-5 items-center justify-center`}>
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
            onChange={onChange}
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
          <Pressable 
            style={[styles.button, {width: 80, margin: 5}]}
            delayLongPress={1000}
            onPress={() => handleSubmit(handleLogin({...user}))}
            >
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
          <Pressable style={[styles.button, {width: 130}]}>
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