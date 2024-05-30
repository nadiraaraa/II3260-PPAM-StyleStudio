import { SafeAreaView } from "react-native-safe-area-context";
import { Button, StyleSheet, Text, TextInput, View, Image, ScrollView, Pressable } from 'react-native';

const Product = () => {
    return <View style={styles.container}>
        <ScrollView>
        <View style={{flexDirection: 'row'}}>
            <Image
                source={require('../../../../../assets/images/profpic.png')}
                style={{width: 120, height: 120, resizeMode: 'cover'}}
            />
            <View style={{padding: 10}}>
                <Text style={{color: '#616219', fontWeight: 'bold', fontSize: 18}}>Nadine</Text>
                <Text style={{fontSize: 16}}>Lokasi: Jakarta</Text>
                <Pressable><Text style={{paddingVertical: 10, paddingHorizontal: 40, marginTop: 10, marginHorizontal: 'auto', fontSize: 16, backgroundColor: '#616219', color: 'white', borderRadius: 10}}>Lihat Katalog</Text></Pressable>
            </View>
        </View>
        
        <View >
            <Text style={{color: '#616219', fontWeight: 'bold', fontSize: 18, padding: 15, paddingBottom: 0,}}>Review Seller</Text>
            <View style={{backgroundColor: 'white', padding: 10, borderWidth: 1, borderColor: '#616219', marginHorizontal: 10, marginVertical: 5, borderRadius:10}}>
                <Text style={{color: '#616219', fontWeight: 'bold', fontSize: 18}}>Nadira</Text>
                <Text style={{fontSize: 16}}>23/12/2023</Text>
                <Text style={{fontSize: 16}}>Produk: abcde</Text>
                <View style={{backgroundColor: '#D9D9D9', padding: 15, borderRadius: 10}}>
                    <View style={{flexDirection: 'row', alignItems: 'center',  }}>
                        <Text>Rating: </Text>
                        <Image
                            source={require('../../../../../assets/images/star.png')}
                            style={{width: 20, height: 20, padding: 0, resizeMode: 'cover'}}
                        />
                    </View>
                    <Text>Komentar lorem ipsum dolores sit amet</Text>
                </View>
                
                
            </View>
            <View style={{backgroundColor: 'white', padding: 10, borderWidth: 1, borderColor: '#616219', marginHorizontal: 10, marginVertical: 5, borderRadius:10}}>
                <Text style={{color: '#616219', fontWeight: 'bold', fontSize: 18}}>Nadira</Text>
                <Text style={{fontSize: 16}}>23/12/2023</Text>
                <Text style={{fontSize: 16}}>Produk: abcde</Text>
                <View style={{backgroundColor: '#D9D9D9', padding: 15, borderRadius: 10}}>
                    <View style={{flexDirection: 'row', alignItems: 'center',  }}>
                        <Text>Rating: </Text>
                        <Image
                            source={require('../../../../../assets/images/star.png')}
                            style={{width: 20, height: 20, padding: 0, resizeMode: 'cover'}}
                        />
                    </View>
                    <Text>Komentar lorem ipsum dolores sit amet</Text>
                </View>
                
                
            </View>
        </View>
        </ScrollView>

    </View>


        ;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDF9EC',
        width: '100%',
        // justifyContent: 'center',
        margin: 0,
        padding: 0,
        // alignContent: 'center',
    },
});

export default Product;