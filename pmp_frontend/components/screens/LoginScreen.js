import React from 'react';
import {
    Text,
    TextInput,
    AsyncStorage,
    Button,
    View,
    StyleSheet,
  } from 'react-native';

class LoginScreen extends React.Component {
  
    render() {
      return (
        <View style={styles.container}>
          <Text style={{ margin: 10}}>Email: </Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          />
          <Text style={{ margin: 10}}>Contraseña: </Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          />
          <View style={{margin:10}}>
            <Button title="Aceptar" onPress={this._login} />
          </View>
        </View>
      );
    }
  
    _login = () => {
      
      this.props.navigation.navigate('Other');
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

  export default LoginScreen;