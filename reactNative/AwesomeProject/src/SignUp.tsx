import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {db} from '../firebase/config';
import React, {useEffect, useState} from 'react';
import {Button} from 'react-native';
import {
  collection,
  addDoc,
  getFirestore,
  onSnapshot,
  updateDoc,
  getDocs,
  getDoc,
  setDoc,
  doc,
} from 'firebase/firestore';

export default function SignUp() {
  const navigation = useNavigation();

  const [income, setIncome] = useState('');

  const SendOn = () => {};

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../img/bg.jpg')}
        resizeMode="cover"
        style={styles.bgImage}>
        <View>
          <TextInput placeholder="Ad" style={styles.textInput}></TextInput>
        </View>
        <View>
          <TextInput placeholder="Soyad" style={styles.textInput}></TextInput>
        </View>
        <View>
          <TextInput placeholder="Mail" style={styles.textInput}></TextInput>
        </View>
        <View>
          <TextInput placeholder="Telefon" style={styles.textInput}></TextInput>
        </View>
        <View>
          <TextInput placeholder="Şifre" style={styles.textInput}></TextInput>
        </View>
        <View>
          <TextInput placeholder="Şifre" style={styles.textInput}></TextInput>
        </View>
        <View style={styles.viewButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('login')}>
            <Text style={styles.textStyle}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
  },

  textInput: {
    width: (width / 100) * 70,
    elevation: 0.4,
    opacity: 0.6,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 9,
    fontSize: 19,
    marginTop: 6,
  },
  button: {
    backgroundColor: 'orange',
    width: (width / 100) * 60,
    justifyContent: 'center',
    padding: 9,
    borderRadius: 10,
  },
  viewButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 6,
  },
  textStyle: {
    textAlign: 'center',
    color: 'white',
    fontSize: 19,
  },
});
