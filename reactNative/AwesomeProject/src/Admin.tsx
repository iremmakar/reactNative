import {useNavigation} from '@react-navigation/native';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default function Admin() {
  const navigation = useNavigation();

  return (
    <View style={styles.allAdmin}>
      <View>
        <Image
          source={require('../img/brand.jpg')}
          style={styles.image}></Image>
      </View>
      <View style={styles.rowAdmin}>
        <TouchableOpacity
          style={styles.touch}
          onPress={() => navigation.navigate('myProducts')}>
          <Icon name="list" size={50} color="white"></Icon>
          <Text style={styles.text}>Ürünlerim</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touch}
          onPress={() => navigation.navigate('productChange')}>
          <Icon name="share" size={50} color="white"></Icon>
          <Text style={styles.text}>Ürün Paylaş / Sil / Güncelle</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowAdmin}>
        <TouchableOpacity
          style={styles.touch}
          onPress={() => navigation.navigate('productComments')}>
          <Icon name="ios-chatbubble-outline" size={50} color="white"></Icon>
          <Text style={styles.text}>Ürün Yorumlar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touch}
          onPress={() => navigation.navigate('categories')}>
          <Icon
            name="ios-ellipsis-horizontal-outline"
            size={50}
            color="white"></Icon>
          <Text style={styles.text}>Kategoriler</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  allAdmin: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffa500',
    elevation: 0.7,
    opacity: 0.7,
  },
  rowAdmin: {
    flexDirection: 'row',
  },
  touch: {
    backgroundColor: '#ff6600',
    elevation: 0.6,
    opacity: 0.5,
    width: (width / 100) * 30,
    height: (width / 100) * 30,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  text: {
    fontSize: 19,
    color: '#fff',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 80,
    marginBottom: 20,
  },
});
