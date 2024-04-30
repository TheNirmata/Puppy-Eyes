import React from 'react';
import { Modal, StyleSheet, Text, TextInput, View } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import { User } from '../../interface/user';
import tw from 'twrnc';
import { ScrollView } from 'react-native-gesture-handler';

const UserFormModal = ({ show, setShow }) => {
  const [user, setUser] = React.useState<User>({
    username: '',
    password: '',
    email: '',
    phone: '',
    firstname: '',
    lastname: '',
  });
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
            <Text style={styles.modalText}>User Form</Text>

           </View>
            <ScrollView>
            <View style={tw `flex flex-col m-10 p-5`}>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                  style={tw `color-black w-40 p-2 m-5 rounded-lg`}
                  placeholder='First name: '
                  onBlur={onBlur}
                  onChangeText={onChange}
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
                  style={tw `color-black w-40 p-2 m-5 rounded-lg`}
                  placeholder='Last name:'
                  onBlur={onBlur}
                  onChangeText={onChange}
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
                  style={tw `color-black w-40 p-2 m-5 rounded-lg`}
                  placeholder='Email: '
                  onBlur={onBlur}
                  onChangeText={onChange}
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
                  style={tw `color-black w-40 p-2 m-5 rounded-lg`}
                  placeholder='Password:'
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  />
                )}
                name='password'
                />
              </View>
            </ScrollView>
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
    backgroundColor: '#fff8fb',
  },
  modalView: {
    width: '95%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
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
    fontSize: 20,
    fontWeight: 'bold'
  }
});