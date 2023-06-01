import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Button,
  Image,
} from 'react-native';

import {useState} from 'react';

import {
  addDoc,
  getFirestore,
  onSnapshot,
  updateDoc,
  getDocs,
  getDoc,
  setDoc,
  doc,
  Firestore,
} from 'firebase/firestore';

import ImagePicker from 'react-native-image-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {db} from '../firebase/config';
import firestore, {firebase} from '@react-native-firebase/firestore';
import {initializeApp} from 'firebase/app';

export default function ProductChange() {
  let Options = {
    saveToPhotos: true,
    mediaType: 'photo',
  };

  const [foto, setFoto] = useState();

  const resimSec = async () => {
    const result = await launchImageLibrary(Options);
    setFoto(result.assets[0].uri);
    console.log(foto);
  };

  const [positive, setPositive] = useState('');
  const [negative, setNegative] = useState();

  const paylas = () => {
    firestore().collection('Users').add({
      name: {positive},
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.resimSec} onPress={resimSec}>
        <Text style={styles.text}>RESİM SEÇ</Text>
      </TouchableOpacity>
      <Image style={styles.image} source={{uri: foto}}></Image>
      <View style={styles.id}>
        <TextInput placeholder="id"></TextInput>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Beğenilen Yönler"
        value={positive}
        onChangeText={setPositive}></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Beğenilmeyen Yönler"></TextInput>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={paylas}>
          <Text style={styles.text}>Paylaş</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Sil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Güncelle</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: (width / 100) * 70,
    marginTop: 10,
  },
  button: {
    backgroundColor: 'orange',
    width: 90,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    textAlign: 'center',
    color: 'white',
  },
  input: {
    backgroundColor: 'orange',
    elevation: 0.5,
    opacity: 0.5,
    width: (width / 100) * 80,
    height: 100,
    borderRadius: 8,
    marginBottom: 12,
  },
  id: {
    //justifyContent: 'flex-start',
    //width: (width / 100) * 80,
    backgroundColor: 'orange',
    marginBottom: 6,
    //borderRadius: 20,
    height: 50,
    width: 45,
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 5,
  },
  resimSec: {
    backgroundColor: 'orange',
    marginBottom: 5,
    height: 30,
    borderRadius: 10,
    width: 100,
  },
});
