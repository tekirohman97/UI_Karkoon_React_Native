import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './src/Screen/Sign_Up/Splash';
import SignUp from './src/Screen/Sign_Up/Sign_Up';
import PhoneNumber from './src/Screen/Sign_Up/Verif';
import UserName from './src/Screen/Sign_Up/Username';

export default function App() {
  return (
    <NavigationContainer>
      <UserName />
    </NavigationContainer>
  );
}
