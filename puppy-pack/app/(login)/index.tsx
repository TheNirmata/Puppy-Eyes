import { StyleSheet } from 'react-native';
import { View, Form, Input, Button } from 'tamagui';
import { Text, Image, TouchableOpacity } from 'react-native';
import  styles from './_layout';
import GoogleIcon from '../../assets/icon-buttons/icons8-google-96.png';

export default function LoginScreen() {
  return (
    <View>
      <View>
        <Form onSubmit={function (): void {
          throw new Error('Function not implemented.');
        }}>
          <Input placeholder="Username" />
          <Input placeholder="Password" />

          <View>
          <Button>Login</Button>
          <Button>Sign Up</Button>
          </View>
        </Form>
      </View>
      <View style={styles.text}>
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

