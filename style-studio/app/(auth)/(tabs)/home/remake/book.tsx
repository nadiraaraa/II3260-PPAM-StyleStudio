import { SafeAreaView } from "react-native-safe-area-context";
import { Button, StyleSheet, Text, TextInput, View, Image, ScrollView, Pressable } from 'react-native';
import { useState } from "react";
import { router } from "expo-router";

const Book = () => {
    const [alter, setAlter] = useState(0);
    const [create, setCreate] = useState(0);
    const [total, setTotal] = useState(0);


    return <View style={styles.container}>
        <ScrollView>
            <View style={{ marginHorizontal: 'auto', padding: 20 }}>
                <Image
                    source={require('../../../../../assets/images/profpic.png')}
                    style={{ width: 120, height: 120, resizeMode: 'cover' }}
                />
            </View>

            <View style={{ padding: 10, marginVertical: 20 }}>
                <Text style={{ color: '#616219', fontWeight: 'bold', fontSize: 18 }}>Nadine</Text>
                <Text style={{ fontSize: 12 }}>Jl. Ciumbeuleuit bla bla bla</Text>
            </View>

            <View style={styles.bar}>
                <Text style={{color: '#616219', fontWeight: 'bold',textAlign: 'center', fontSize: 16}}>Alter Price: </Text>
                <Text style={{textAlign: 'center'}}>Rp50.000</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 'auto', margin: 10 }}>
                <Image
                    source={require('../../../../../assets/images/minus.png')}
                    // style={{ width: 40, height: 40, resizeMode: 'cover' }}
                />
                <Text>1</Text>
                <Image
                    source={require('../../../../../assets/images/plus.png')}
                    // style={{ width: 40, height: 40, resizeMode: 'cover' }}
                />
            </View>

            <View style={styles.bar}>
                <Text style={{color: '#616219', fontWeight: 'bold',textAlign: 'center', fontSize: 16}}>Create Price: </Text>
                <Text style={{textAlign: 'center'}}>Rp10.000</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 'auto', margin: 10 }}>
                <Image
                    source={require('../../../../../assets/images/minus.png')}
                    // style={{ width: 40, height: 40, resizeMode: 'cover' }}
                />
                <Text>1</Text>
                <Image
                    source={require('../../../../../assets/images/plus.png')}
                    // style={{ width: 40, height: 40, resizeMode: 'cover' }}
                />
            </View>

            <View style={styles.bar}>
                <Text style={{color: '#616219', fontWeight: 'bold',textAlign: 'center', fontSize: 16}}>Total: </Text>
                <Text style={{textAlign: 'center'}}>Rp50.000</Text>
            </View>

            <Pressable onPress={() => router.push('/home/remake/payment')}>
                <Text style={{ paddingVertical: 10, paddingHorizontal: 40, marginVertical: 60, marginHorizontal: 'auto', fontSize: 16, backgroundColor: '#616219', color: 'white', borderRadius: 10 }}>
                    Book Tailor
                </Text>
            </Pressable>


            {/* feedback */}
            <View >
                <Text style={{ color: '#616219', fontWeight: 'bold', fontSize: 18, padding: 15, paddingBottom: 0, marginTop: 20 }}>Review Seller</Text>
                <View style={{ backgroundColor: 'white', padding: 10, borderWidth: 1, borderColor: '#616219', marginHorizontal: 10, marginVertical: 5, borderRadius: 10 }}>
                    <Text style={{ color: '#616219', fontWeight: 'bold', fontSize: 18 }}>Nadira</Text>
                    <Text style={{ fontSize: 16 }}>23/12/2023</Text>
                    <View style={{ backgroundColor: '#D9D9D9', padding: 15, borderRadius: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Text>Rating: </Text>
                            <Image
                                source={require('../../../../../assets/images/star.png')}
                                style={{ width: 20, height: 20, padding: 0, resizeMode: 'cover' }}
                            />
                        </View>
                        <Text>Komentar lorem ipsum dolores sit amet</Text>
                    </View>
                </View>

                <View style={{ backgroundColor: 'white', padding: 10, borderWidth: 1, borderColor: '#616219', marginHorizontal: 10, marginVertical: 5, borderRadius: 10 }}>
                    <Text style={{ color: '#616219', fontWeight: 'bold', fontSize: 18 }}>Nadira</Text>
                    <Text style={{ fontSize: 16 }}>23/12/2023</Text>
                    <View style={{ backgroundColor: '#D9D9D9', padding: 15, borderRadius: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Text>Rating: </Text>
                            <Image
                                source={require('../../../../../assets/images/star.png')}
                                style={{ width: 20, height: 20, padding: 0, resizeMode: 'cover' }}
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
    bar: {
        padding: 5,
        marginTop: 10,
        backgroundColor: '#E6E4BF',
        width: '100%',
        textAlign: 'center',
    }
});

export default Book;