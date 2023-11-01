import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import { PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper';

import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import MainScreen from './src/screens/MainScreen';
import NeedsScreen from './src/screens/NeedsScreen';
import ChatScreen from './src/screens/ChatScreen';
import LoadingLoginScreen from './src/screens/LoadingLoginScreen';
import UserContextProvider from './store/user-context';
import { Needs, Message, MessageContainer } from './src/utils/types';



type Profile = {}

export type RootStackParamList = {
  SplashScreen: undefined;
  RegisterScreen: undefined;
  LoginScreen: undefined;
  MainScreen: undefined;
  NeedsScreen : {needsData : Needs}
  ChatScreen : {messageContainer : MessageContainer};
  LoadingLoginScreen : {email : string};
}

const RootStack = createNativeStackNavigator<RootStackParamList>();

const newTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary : '#FFC914',
    secondary : '#572D0C',
    tertiary : 'white'
  }
}


export default function App() {
  return (
    <PaperProvider theme={newTheme}>
      <UserContextProvider>
        <NavigationContainer>
          <RootStack.Navigator screenOptions={{headerShown: false}}>
            <RootStack.Screen name='SplashScreen' component={SplashScreen}/>
            <RootStack.Screen name='RegisterScreen' component={RegisterScreen}/>
            <RootStack.Screen name='LoginScreen' component={LoginScreen}/>
            <RootStack.Screen name='MainScreen' component={MainScreen}/>
            <RootStack.Screen name='NeedsScreen' component={NeedsScreen} options={{headerShown : true}}/>
            <RootStack.Screen name='ChatScreen' component={ChatScreen} options={{headerShown : true}}/>
            <RootStack.Screen name='LoadingLoginScreen' component={LoadingLoginScreen}/>
          </RootStack.Navigator>
        </NavigationContainer>
      </UserContextProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
