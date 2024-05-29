import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Image, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Filter from '../thrift/filter';

const Sell = () => {
  //hrs tambahin search sbg param
  const router = useRouter();

  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("")
  const [location, setLocation] = useState("")
  const [viewCategory, setViewCategory] = useState(false)

  const handleSearch = () => {

  }

  return (
    <View style={styles.container}>
      {viewCategory ?
        <Filter
          category={category}
          setCategory={setCategory}
          location={location}
          setLocation={setLocation}
          setViewCategory={setViewCategory}
        />
        : <></>
      }
      <View style={styles.bar}>
        <View style={styles.input}>
          <TextInput
            // style={styles.input}
            placeholder="Search..."
            value={search}
            onChangeText={setSearch}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#8C8C8C" // Light gray color for placeholder text
          />
          <Pressable onPress={handleSearch}>
            <Image
              source={require('../../../../../assets/images/search.png')}
              style={styles.icon}
            />
          </Pressable>
        </View>
        <Pressable onPress={() => { setViewCategory(true); console.log(viewCategory); }}>
          <Image
            source={require('../../../../../assets/images/category.png')}
            style={styles.icon}

          />
        </Pressable>
      </View>
      <ScrollView style={{ marginHorizontal: 'auto', alignContent: 'center' }}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', columnGap: 10, marginHorizontal: 5 }}>
          {/* add product */}
        <Pressable onPress={() => router.push('/home/sell/add')}>
            <View style={styles.card}>
              <Image
                source={require('../../../../../assets/images/add.png')}
                style={{alignContent: 'center', width: 100, marginBottom: 10, resizeMode: 'contain', justifyContent: 'center', marginHorizontal: 'auto'}}
              />
              <Text style={{ color: '#616219', fontWeight: 'bold' , textAlign: 'center'}}>Add Item</Text>
            </View>
          </Pressable>

          <Pressable onPress={() => router.push('/home/sell/product')}>
            <View style={styles.card}>
              <Image
                source={require('../../../../../assets/images/contoh1.png')}
                style={styles.cardImage}
              />
              <Text style={{ color: '#616219', fontWeight: 'bold' }}>Jeans Skirt</Text>
              <Text style={{ color: '#1C1B1F' }}>Rp200.000</Text>
              <Text style={{ color: '#595454' }}>Bandung</Text>
            </View>
          </Pressable>
          <View style={styles.card}>
            <Image
              source={require('../../../../../assets/images/contoh1.png')}
              style={styles.cardImage}
            />
            <Text style={{ color: '#616219', fontWeight: 'bold' }}>Jeans Skirt</Text>
            <Text style={{ color: '#1C1B1F' }}>Rp200.000</Text>
            <Text style={{ color: '#595454' }}>Bandung</Text>
          </View>
          <View style={styles.card}>
            <Image
              source={require('../../../../../assets/images/contoh1.png')}
              style={styles.cardImage}
            />
            <Text style={{ color: '#616219', fontWeight: 'bold' }}>Jeans Skirt</Text>
            <Text style={{ color: '#1C1B1F' }}>Rp200.000</Text>
            <Text style={{ color: '#595454' }}>Bandung</Text>
          </View>
          <View style={styles.card}>
            <Image
              source={require('../../../../../assets/images/contoh1.png')}
              style={styles.cardImage}
            />
            <Text style={{ color: '#616219', fontWeight: 'bold' }}>Jeans Skirt</Text>
            <Text style={{ color: '#1C1B1F' }}>Rp200.000</Text>
            <Text style={{ color: '#595454' }}>Bandung</Text>
          </View>
          <View style={styles.card}>
            <Image
              source={require('../../../../../assets/images/contoh1.png')}
              style={styles.cardImage}
            />
            <Text style={{ color: '#616219', fontWeight: 'bold' }}>Jeans Skirt</Text>
            <Text style={{ color: '#1C1B1F' }}>Rp200.000</Text>
            <Text style={{ color: '#595454' }}>Bandung</Text>
          </View>
          <View style={styles.card}>
            <Image
              source={require('../../../../../assets/images/contoh1.png')}
              style={styles.cardImage}
            />
            <Text style={{ color: '#616219', fontWeight: 'bold' }}>Jeans Skirt</Text>
            <Text style={{ color: '#1C1B1F' }}>Rp200.000</Text>
            <Text style={{ color: '#595454' }}>Bandung</Text>
          </View>
        </View>
      </ScrollView>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF9EC',
    width: '100%',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
    alignContent: 'center',
  },

  text: {
    fontSize: 30,
    fontWeight: '400',
    textAlign: 'center',
    color: '#616219',
  },

  button: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },

  buttonText: {
    fontSize: 16,
    color: 'white',
  },
  bar: {
    backgroundColor: '#DEDD91',
    width: '100%',
    margin: 0,
    padding: 0,
    alignItems: 'center',
    flexDirection: 'row'
  },

  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    borderColor: '#616219',
    margin: 10,
    backgroundColor: '#E6E3D1',
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cardImage: {
    width: 150,
    height: 120, // Adjusted height
    resizeMode: 'contain',
    // borderRadius: 10,
    marginBottom: 10,
  },
  icon: {

  },
  card: {
    width: 180, // Adjusted width
    height: 250, // Adjusted height
    backgroundColor: '#FDFDF9', // Light green background color
    padding: 15,
    borderRadius: 5,
    // alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'left',
    marginBottom: 5,
  },

});

export default Sell;
