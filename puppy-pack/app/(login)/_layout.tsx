import React from 'react';
import { FontAwesome6 } from '@expo/vector-icons';
import { StyleSheet, Pressable } from 'react-native';
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 200,
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  text: {
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    borderRadius: 5,
    width: 100,
    textAlign: 'center',
  }
});


export default styles;