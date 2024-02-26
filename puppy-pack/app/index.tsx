import React, { useState, useEffect } from 'react';
import { FontAwesome6 } from '@expo/vector-icons';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { addTheme } from '@tamagui/theme'
import { H3, Square, Theme, YStack, XGroup, XStack, Button } from 'tamagui' //Button,




type User = { 
  email: string, 
  password: string,
};

export default function LandingScreen({ navigation }) {
  const [theme, setTheme] = useState<any>();
  const [user, setUser] = useState<User>({ email: '', password: '' });
  const [session, setSession] = useState(false);

  const validateUser = () => {
    let isValid = true; 
    if (user.email && user.password) {
      setSession(true);  
      navigation.navigate('Account');
    }
    if (user.password === '' || user.password === '') {
      alert('Please enter a valid email or password');
    }
    if (user.email === '') {
      alert('Please enter a valid email address or password');
    }
    return isValid; 
  }; 

  const signUp = () => {
  

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
          placeholder="Email"
          textContentType='emailAddress'
          value={user.email}
          onChangeText={( inputValue ) => setUser({ ...user, email: inputValue })}
          style={{fontSize: 15, height: 20}}
          />
        </View>
        <View style={styles.inputField}>
          <TextInput
            placeholder="password"
            textContentType='password'
            secureTextEntry={true}
            value={user.password}
            onChangeText={( inputValue )=> setUser({ ...user, password: inputValue })}
            style={{fontSize: 15, height:20}}
          />
        </View>
      </View>
      <View style={[{flexDirection: 'row'}, styles.buttons]}>
      {/* <Button>Plain</Button> */}
        <Button>Login</Button>
        <Button>Join The Pack</Button>
        {/* <Button
          title="Sign Up"
          onPress={() => signUp()}
        /> */}
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
    margin: 10,
    padding: 50,
  }
});
