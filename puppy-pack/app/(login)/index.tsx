import { StyleSheet } from 'react-native';
import { View, Form, Input, Button } from 'tamagui';
import { Text, Image, TouchableOpacity } from 'react-native';
import  styles from './_layout';
import GoogleIcon from '../../assets/icon-buttons/icons8-google-96.png';

export default function LoginScreen() {
  return (
    <View>
      <View style={styles.container}></View>
      <View style={{alignItems:'center'}}>
        <Form onSubmit={function (): void {
          throw new Error('Function not implemented.');
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

