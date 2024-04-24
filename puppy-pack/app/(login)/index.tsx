import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { View, Form, Input, Button } from 'tamagui';
import { Text, Image, TouchableOpacity } from 'react-native';
import  styles from './_layout';
import GoogleIcon from '../../assets/icon-buttons/icons8-google-96.png';
import AccountScreen from '../account/[username]';
import { User } from '../../interface/user';

export default function LoginScreen() {
  const [username, password] = useState<User>({username: '', email: '', password:''});

  const handleAuth = (user: User) =>{
    if (!user) {
      alert('Please enter a username and password');
    }
    if (user.username && !user.password) {
      alert('Please enter a password');
    }
    if (!user.username && user.password) {
      alert('Please enter a username');
    }
    if (user.username && user.password) {
      alert('Welcome');
    }

    
  };
  return (
    <View>
      <View style={styles.container}></View>
      <View style={{alignItems:'center'}}>
        <Form onSubmit={function (): void {
          console.log('submitted');

        }}>
          <Input style={styles.inputField} placeholder="Username" />
          <Input style={styles.inputField} placeholder="Password" />

          <View style={{flexDirection: 'row', justifyContent:'space-between', padding: 10, margin: 10}}>
          <Button>Login</Button>
          <Button>Sign Up</Button>
          </View>
        </Form>
      </View>
      <View style={{flexDirection: 'row', justifyContent:'center', alignItems:'center', margin: 20, padding: 20}}>
        <Text>or login with...</Text>
        </View>
        <View>
        <TouchableOpacity style={{flex: 1, flexDirection: 'column', alignItems:'center'}}>
          <Image source={GoogleIcon} style={{ width: 80, height: 80 }} />
        </TouchableOpacity>
          </View>
    </View>
  );
}

