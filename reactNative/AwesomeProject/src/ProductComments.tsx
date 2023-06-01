import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';

export default function ProductComments() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.comment}>
          <Image
            source={require('../img/ruj.jpg')}
            style={styles.image}></Image>

          <Text style={styles.text}>Bu rujun rengi çok hoş</Text>
        </View>
        <View style={styles.comment}>
          <Image
            source={require('../img/rimel.jpg')}
            style={styles.image}></Image>
          <Text style={styles.text}>Rimel fazlasıyla kalıcı</Text>
        </View>
        <View style={styles.comment}>
          <Image
            source={require('../img/serum.jpg')}
            style={styles.image}></Image>
          <Text style={styles.text}>Bu serum cilde iyi geliyor.</Text>
        </View>
        <View style={styles.comment}>
          <Image
            source={require('../img/firca.jpg')}
            style={styles.image}></Image>
          <Text style={styles.text}>yorum 4</Text>
        </View>
        <View style={styles.comment}>
          <Image
            source={require('../img/far2.jpg')}
            style={styles.image}></Image>
          <Text style={styles.text}>yorum 5</Text>
        </View>
        <View style={styles.comment}>
          <Image
            source={require('../img/far.jpg')}
            style={styles.image}></Image>
          <Text style={styles.text}>yorum 6</Text>
        </View>
        <View style={styles.comment}>
          <Image
            source={require('../img/fondoten.jpg')}
            style={styles.image}></Image>
          <Text style={styles.text}>yorum 7</Text>
        </View>
        <View style={styles.comment}>
          <Image
            source={require('../img/sampuan.jpg')}
            style={styles.image}></Image>
          <Text style={styles.text}>yorum 8</Text>
        </View>
        <View style={styles.comment}>
          <Image
            source={require('../img/krem.jpg')}
            style={styles.image}></Image>
          <Text style={styles.text}>yorum 9</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  comment: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: (width / 100) * 50,
    height: (width / 100) * 50,
    marginTop: 10,
  },
  text: {
    width: width,
    marginLeft: 9,
    fontSize: 16,
  },
});
