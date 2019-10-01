import React from 'react';
import {
    AsyncStorage,
    Button,
    Image,
    View,
    StyleSheet,
  } from 'react-native';

class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'PERDI MI PERRO',
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 100, height: 100, margin:20}}
          source={require('../../assets/images/logo.png')}
        />
        <View style={{margin:10}}>
          <Button title="Ingresar" onPress={this._signInAsync} />
        </View>
        <Button title="Registrarse" onPress={this._signInAsync} />
      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButton: {
    flex: 1,
    alignItems: 'left',
    justifyContent: 'right',
    marginTop: 100,
    marginHorizontal: 16,
  },
});

export default SignInScreen;