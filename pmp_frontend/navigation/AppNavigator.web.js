import { createBrowserApp } from '@react-navigation/web';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import AuthLoadingScreen from '../components/screens/AuthLoadingScreen';
import HomeScreen from '../components/screens/HomeScreen';
import OtherScreen from '../components/screens/OtherScreen';
import SignInScreen from '../components/screens/SignInScreen';
import LoginScreen from '../components/screens/LoginScreen';
import RegisterScreen from '../components/screens/RegisterScreen';

const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });
const AuthStack = createStackNavigator({ SignIn: SignInScreen });

const switchNavigator = createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    LoginScreen,
    RegisterScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  });
switchNavigator.path = '';

export default createBrowserApp(switchNavigator, { history: 'hash' });
