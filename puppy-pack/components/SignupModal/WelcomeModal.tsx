import React, { useState, useEffect } from 'react';
import { StyleSheet, Modal, View, Text, Pressable, TextInput  } from 'react-native';
import tw from 'twrnc';
import { User } from '../../interface/user';

import UserFormModal from './UserFormModal';

const WelcomeModel = ({ showWelcomeModal, setShowWelcomeModal }) => {
  const [confirmed, iscConfirmed] = useState(true);
  const [getStarted, setGetStarted] = useState(false);
  const [user, setUser] = useState<User>({
    username: '',
    password: '',
    email: '',
    phone: '',
    firstname: '',
    lastname: '',
  }); 

  const handleInfo = () => {
    setGetStarted(true);
    setShowWelcomeModal(false)
    
  };

  return (
    <View style={tw `flex flex-center m-4`}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={showWelcomeModal}
        onRequestClose={() => setShowWelcomeModal(false)}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Welcome to Puppy Eyes</Text>
            <View style={tw `items-center`}>
              <Pressable 
                onPress={handleInfo} 
                style={styles.button}
                >
                <Text> Lets get started!</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      {getStarted && <UserFormModal show={getStarted} setShow={setGetStarted} />}
    </View>
  )
};

export default WelcomeModel;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff8fb',
  }, 
  modalView: {
    margin: 20,
    // backgroundColor: "transparent",
    // borderRadius: 20,
    padding: 35,
    // alignItems: "center",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5
  },
  modalText: {
    fontSize: 25,
    color: '#eec7db',
    marginBottom: 15,
    textAlign: "center",
  },
  button: {
    backgroundColor: '#f4e0ea',
    color: 'white',
    padding: 15,
    borderRadius: 5,
    width: 150,
    textAlign: 'center',
    justifyContent:'center', 
    alignItems:'center'
  }
});