import React, { useContext, useState } from 'react';
import { Modal, StyleSheet, Text, TextInput, View, Pressable } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';
import { User } from '../../interface/user';
import { UserContext } from '../../context/userContext';

const UserFormModal = ({ show, setShow }) => {
  const { user, setUser, handleSignup } = useContext(UserContext);
  const navigation = useNavigation();

  const {
    register,
    control,
    handleSubmit, 
    formState: { errors }
  } = useForm<User>({
    defaultValues: {
      username: '',
      password: '',
      email: '',
      phone: '',
      firstname: '',
      lastname: '',
    }
  });

  const handleMainScreen = () => {
    //@ts-expect-error
    navigation.navigate('Login');
  };

  const onSubmit = data => {
    console.log({data});
    //@ts-expect-error
    navigation.navigate('Account',{user: user});
  };

  return (
    <View>
      <Modal
        animationType='fade'
        transparent={true}
        visible={show}
        onRequestClose={setShow}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
           <View>
            <Text style={[styles.modalText, {color: '#eec7db'}]}>Get Your Dogtag</Text>
           </View>
           
           <View style={tw `items-center`}>
            <Text style={{color: '#eec7db'}}>Enter your Human's Information</Text>
           </View>

           <View>
            <ScrollView>
              <Controller 
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={tw `border border-gray-400 p-3 m-3 w-80`}
                    placeholder='First Name'
                    onBlur={onBlur}
                    onChangeText={text => {
                      onChange(text); // This updates the form state managed by react-hook-form
                      setUser({...user, firstname: text}); // This updates local user state
                    }}
                    value={value}
                  />
                )}
                name='firstname'
              />
              <Controller 
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={tw `border border-gray-400 p-3 m-3 w-80`}
                    placeholder='Last Name'
                    onBlur={onBlur}
                    onChangeText={text => {
                      onChange(text); // This updates the form state managed by react-hook-form
                      setUser({...user, lastname: text}); // This updates local user state
                    }}
                    value={value}
                  />
                )}
                name='lastname'
              />
              <Controller 
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={tw `border border-gray-400 p-3 m-3 w-80`}
                    placeholder='Username'
                    onBlur={onBlur}
                    onChangeText={text => {
                      onChange(text); // This updates the form state managed by react-hook-form
                      setUser({...user, username: text}); // This updates local user state
                    }}
                    value={value}
                  />
                )}
                name='username'
              />
              <Controller 
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={tw `border border-gray-400 p-3 m-3 w-80`}
                    placeholder='Password'
                    secureTextEntry={true}
                    onBlur={onBlur}
                    onChangeText={text => {
                      onChange(text); // This updates the form state managed by react-hook-form
                      setUser({...user, password: text}); // This updates local user state
                    }}
                    value={value}
                  />
                )}
                name='password'
              />
              <Controller 
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={tw `border border-gray-400 p-3 m-3 w-80`}
                    placeholder='Email'
                    onBlur={onBlur}
                    onChangeText={text => {
                      onChange(text); // This updates the form state managed by react-hook-form
                      setUser({...user, email: text}); // This updates local user state
                    }}
                    value={value}
                  />
                )}
                name='email'
              />
              <Controller 
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={tw `border border-gray-400 p-3 m-3 w-80`}
                    placeholder='Phone'
                    onBlur={onBlur}
                    onChangeText={text => {
                      onChange(text); // This updates the form state managed by react-hook-form
                      setUser({...user, phone: text}); // This updates local user state
                    }}
                    value={value}
                  />
                )}
                name='phone'
              />


            </ScrollView>
           </View>
            <View style={{flexDirection: 'row', alignItems:'center', justifyContent:'center'}}>
            <Pressable
                style={styles.buttons}
                onPress={handleMainScreen}
                >
                <Text style={{color: '#b29700', fontWeight:'bold', fontSize: 15}}>Cancel</Text>
              </Pressable>

              <Pressable
                style={styles.buttons}
                onPress={async () => {
                  //@ts-expect-error
                  await handleSubmit(handleSignup(user));
                  onSubmit(user);
                }}
                >
                <Text style={{color: '#b29700', fontWeight:'bold', fontSize: 15}}>Next</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
};

export default UserFormModal;


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'left',
    backgroundColor: '#fff8fb',
  },
  modalView: {
    width: '95%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },
  buttons: {
    backgroundColor: '#f4e0ea',     
    padding: 15,
    borderRadius: 5,
    width: 100,
    justifyContent:'center',
    margin: 5,
    alignItems:'center',
  }
});