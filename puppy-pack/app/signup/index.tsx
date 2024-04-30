import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, Alert } from 'react-native';
// import { useForm, Controller } from "react-hook-form"
// import { User } from '../../interface/user';
import styles from './_layout';
import tw from 'twrnc';

import WelcomeModal from '../../components/SignupModal/WelcomeModal';
import UserFormModal from '../../components/SignupModal/UserFormModal';


export default function SignupScreen(){
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [showUserFormModal, setShowUserFormModal] = useState(false);
  // const [user, setUser] = React.useState<User>({
  //   username: '',
  //   password: '',
  //   email: '',
  //   phone: '',
  //   firstname: '',
  //   lastname: '',
  // });

  // const {
  //   register,
  //   control,
  //   handleSubmit, 
  //   formState: { errors }
  // } = useForm<User>({
  //   defaultValues: {
  //     username: '',
  //     password: '',
  //     email: '',
  //     phone: '',
  //     firstname: '',
  //     lastname: '',
  //   }
  // });


  useEffect(() => {
    setShowWelcomeModal(true);
    setShowUserFormModal(true);
  },[]);
  
  const handleNextModals = () => {
  };


  return (
    <>
      <WelcomeModal showWelcomeModal={showWelcomeModal} setShowWelcomeModal={setShowWelcomeModal}/>
      {/* <UserFormModal show={showUserFormModal} setShow={setShowUserFormModal}/> */}
    </>
  );
};
