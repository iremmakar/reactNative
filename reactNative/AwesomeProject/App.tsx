/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {NavigationContainer} from '@react-navigation/native';

import React, {useState} from 'react';

import Login from './src/Login';
import SignUp from './src/SignUp';
import Admin from './src/Admin';
import MyProducts from './src/MyProducts';
import ProductChange from './src/ProductChange';
import ProductComments from './src/ProductComments';
import Categories from './src/Categories';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signUp" component={SignUp} />
        <Stack.Screen name="admin" component={Admin} />
        <Stack.Screen name="myProducts" component={MyProducts} />
        <Stack.Screen name="productChange" component={ProductChange} />
        <Stack.Screen name="productComments" component={ProductComments} />
        <Stack.Screen name="categories" component={Categories} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
