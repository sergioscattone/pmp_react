import React from 'react';
import {
    Text,
    TextInput,
    AsyncStorage,
    Button,
    View,
    StyleSheet,
  } from 'react-native';
  import { bindActionCreators } from 'redux';
  import { connect } from 'react-redux';

class LoginScreen extends React.Component {
  state = { username: '', password: '' }

  render() {

    this._loginRedirection()

    return (
      <View style={styles.container}>
        <Text style={{ margin: 10}}>Email: </Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          placeholder='Email'
          onChangeText={(value) => this.setState({ username: value })}
        />
        <Text style={{ margin: 10}}>Contraseña: </Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          placeholder='Contraseña'
          onChangeText={(value) => this.setState({ password: value })}
        />
        <View style={{margin:10}}>
          <Button title="Aceptar"
          onPress={() => this.props.login(this.state.username, this.state.password)} 
        />
        </View>
      </View>
    );
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  _loginRedirection = async () => {
    const jwtToken = await AsyncStorage.getItem('jwt');
    if (jwtToken) {
      this.props.navigation.navigate('App');
    }
  };
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
      login: (username, password) => dispatch({
        type: 'LOGIN',
        username,
        password,
      }),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);