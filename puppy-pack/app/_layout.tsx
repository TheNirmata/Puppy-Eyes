import { StyleSheet } from "react-native";
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
    margin: 20,
    padding: 20,
  }
});


export default styles;