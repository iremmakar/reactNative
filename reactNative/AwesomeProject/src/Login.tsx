import {View, Text} from 'react-native';
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {NavigationContainer} from '@react-navigation/native';

import {useNavigation} from '@react-navigation/native';

import {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  useColorScheme,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('window').width;
const stack = createNativeStackNavigator();

function Login() {
  const [password, setPassword] = useState('1234');
  const [mail, satMail] = useState('i@gmail.com');
  const [Password, setPasswor] = useState('');
  const [Mail, satMai] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../img/bg.jpg')}
        resizeMode="cover"
        style={styles.bgImage}>
        <View style={styles.textInputContainer}>
          <View style={styles.IconContainer}>
            <Icon name="person" size={20} color={'#fff'} />
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="Mail"
            value={Mail}
            onChangeText={satMai}
          />
        </View>
        <View style={styles.textInputContainer}>
          <View style={styles.IconContainer}>
            <Icon name="key" size={20} color={'#fff'} />
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            value={Password}
            onChangeText={setPasswor}
          />
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('admin')}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('signUp')}>
            <Text style={styles.text}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    width: (width / 100) * 60,
    borderRadius: 8,
    elevation: 0.8,
    opacity: 0.9,
    backgroundColor: 'white',
  },
  textInputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
  },
  IconContainer: {
    backgroundColor: 'orange',
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    marginRight: 7,
  },
  bgImage: {
    flex: 1,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    width: (width / 100) * 60,
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'orange',
    width: (width / 100) * 50,
    paddingVertical: 8,
    marginTop: 8,
  },

  text: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Login;
