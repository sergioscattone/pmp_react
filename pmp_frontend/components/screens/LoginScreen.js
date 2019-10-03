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
          onPress={() => this._login({ username: this.state.username, password: this.state.password })} 
        />
        </View>
      </View>
    );
  }

  _login = (data) => {
    console.log(data.username)
    console.log(data.password)
    //this.props.navigation.navigate('Other');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
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
      actions: {
          login: bindActionCreators(loginActions, dispatch)
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);