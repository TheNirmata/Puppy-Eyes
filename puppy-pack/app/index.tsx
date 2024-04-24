import React, { useState } from 'react';
import { FontAwesome6 } from '@expo/vector-icons';
import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native';
// import { useRouter, Link } from 'expo-router';
import { Button } from 'tamagui';
import GoogleIcon from '../assets/icon-buttons/icons8-google-96.png';
import { User } from '../interface/user';

export default function LandingScreen() {
  // const router = useRouter();
  const [user, setUser] = useState<User>({ username: '', email: '',password: '' });
  const [session, setSession] = useState(false);

  const validateUser = () => {
    let isValid = true; 
    if (user.username && user.password) {
      setSession(true);  
      // router.replace(`/account/${user.username}`);
    }
    if (user.username === '' || user.password === '') {
      alert('Please enter a valid username or password');
    }
    return isValid; 
  }; 

  const signUp = () => {
    // router.replace('/signup/');
  };

  return (
  
    <View style={styles.container}>
      <Text style={styles.title}>Puppy Pack</Text>
      <Pressable>
        <FontAwesome6 name="dog" size={24} color="black" />
      </Pressable>
      <Text style={styles.separator} />
      <View>
        <View style={styles.inputField}>
        <TextInput
          placeholder="Username"
          textContentType='username'
          value={user.username}
          onChangeText={( inputValue ) => setUser({ ...user, username: inputValue })}
          style={{fontSize: 15, height: 20}}
          />
        </View>
        <View style={[styles.inputField, {alignContent:'center', justifyContent:'center'}]}>
          <TextInput
            placeholder="Password"
            textContentType='password'
            secureTextEntry={true}
            value={user.password}
            onChangeText={( inputValue )=> setUser({ ...user, password: inputValue })}
            style={{fontSize: 15, height:20}}
          />
        </View>
      </View>
      <View style={[{flexDirection: 'row'}, styles.buttons]}>
        <View style={{right: 10}}>
        
        <Button size="$6" onPress={() => validateUser()}>Login</Button>
        </View>
        <View>
        <Button size="$6" onPress={() => signUp()}>Join The Pack</Button>
        </View>
      </View>
      <Text> Or Sign In With...</Text>
      <View style={[{flexDirection: 'row'}, styles.buttons]}>
      <Button unstyled={true} style={{border: 'none', backgroundColor:'transparent'}}>
      <Image source={GoogleIcon}/>
      </Button>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 60,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  inputField: {
    height: 50,
    fontSize: 20,
    width: 300,
    margin: 10,
    padding: 20,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  buttons: {
    justifyContent: 'space-between',
    margin: 20,
    padding: 20,
  }
});
