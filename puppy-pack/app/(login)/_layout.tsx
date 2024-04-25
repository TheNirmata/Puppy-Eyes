import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff4ff',
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
    flexDirection: 'row',
    alignItems: 'center',
    width: 250,
    height: 60,
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  text: {
    textAlign: 'center',
  },
  buttonText: {
    color: 'white', 
    fontWeight:'bold', 
    fontSize: 15
  },
  headingText: {
    color: '#eec7db',
    fontSize: 40,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#f4e0ea',
    color: 'white',
    padding: 15,
    borderRadius: 5,
    width: 100,
    textAlign: 'center',
    justifyContent:'center', 
    alignItems:'center'
  }
});


export default styles;