import React, { useState, useEffect } from 'react';
import { Modal, View, Text, Pressable, TextInput, ActivityIndicator  } from 'react-native';
import tw from 'twrnc';
import { User } from '../../interface/user';



export const PasswordModal = ({ open, close }) => {
  const [confirm, setConfirm] = useState(false);
  const [email, setEmail] = useState<User>({username: '', password:'', email: ''});
  const [isLoading, setIsLoading] = useState(false);

  //event handler to find email of user and send push notification for user to
  //rest password 
  const handleConfirmationEmail = () => {
    setIsLoading(true);
    setConfirm(true);
  };

  const token = () => {
    return(
      <View style={tw `justify-center items-center m-4`}>
        <Text style={tw `m-4 p-5`}>Please see the reset link send to {email.email} to reset your password. It may take a few minutes.</Text>
        <Text style={tw `m-2`}>🩷📧🦮🐾🐾🐾🐾🐾</Text>
        {/* <ActivityIndicator size='large' /> */}
        <View style={tw `m-4`}> 
        <Pressable 
          style={{
            backgroundColor: '#f4e0ea',     
            padding: 15,
            borderRadius: 5,
            width: 100,
            justifyContent:'center',
            margin: 5,
            alignItems:'center',
            }}
            onPress={close}
            >
          <Text style={{color: '#b29700', fontWeight:'bold', fontSize: 15}}>Close</Text>
        </Pressable>
        </View>
      </View>
    )
  };

  return (
    <View style={tw `justify-center items-center bg-gray-500 bg-opacity-50`}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={open}
        onRequestClose={close}
      >
        <View style={tw `flex-1 justify-center items-center`}>
          <View style={tw `bg-white m-4 p-4 rounded-lg max-w-md w-80`}>
          {confirm ?  (
              isLoading && token()
            ) : (
                <View>
                  <Text>Please Enter your e-mail to reset your password</Text>
                  <View>
                    <TextInput 
                      style={tw `text-black h-10 border rounded-md m-6`}
                      placeholder='e-mail'
                      onChange={(e) => setEmail({...email, email: e.nativeEvent.text})}
                      value={email.email}
                    />
                  </View>
                  <View style={tw `flex-row justify-center items-center`}>
                    <Pressable 
                      style={{
                        backgroundColor: '#f4e0ea',     
                        padding: 15,
                        borderRadius: 5,
                        width: 100,
                        justifyContent:'center', 
                        margin: 5,
                        alignItems:'center',
                      }}
                      onPress={handleConfirmationEmail}
                    >
                      <Text style={{color: '#b29700', fontWeight:'bold', fontSize: 15}}>Confirm</Text>
                    </Pressable>
                    <Pressable 
                      style={{
                        backgroundColor: '#f4e0ea',     
                        padding: 15,
                        borderRadius: 5,
                        width: 100,
                        justifyContent:'center',
                        margin: 5,
                        alignItems:'center',
                      }}
                      onPress={close}
                    >
                      <Text style={{color: '#b29700', fontWeight:'bold', fontSize: 15}}>Cancel</Text>
                    </Pressable>
                  </View>
                </View>
            )}
          </View>
        </View>
      </Modal>
    </View>
  )
};