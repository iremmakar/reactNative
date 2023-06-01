import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';

export default function Categories() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.comment}>
          <Text style={styles.text}>ERKEK</Text>
        </View>
        <View style={styles.comment}>
          <Text style={styles.text}>KADIN</Text>
        </View>
        <View style={styles.comment}>
          <Text style={styles.text}>PARFÜM</Text>
        </View>
        <View style={styles.comment}>
          <Text style={styles.text}>MAKYAJ</Text>
        </View>
        <View style={styles.comment}>
          <Text style={styles.text}>SAÇ BAKIM</Text>
        </View>
        <View style={styles.comment}>
          <Text style={styles.text}>CİLT BAKIM</Text>
        </View>
        <View style={styles.comment}>
          <Text style={styles.text}>DEODORANT</Text>
        </View>
        <View style={styles.comment}>
          <Text style={styles.text}>KREM</Text>
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: 'orange',
    fontSize: 50,
    padding: 20,
  },
  image: {
    width: (width / 100) * 30,
    height: (width / 100) * 20,
    marginTop: 10,
  },
  text: {
    width: (width / 100) * 50,
    marginLeft: 9,
  },
});
