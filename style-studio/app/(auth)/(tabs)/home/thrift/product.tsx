import { SafeAreaView } from "react-native-safe-area-context";
import { Button, StyleSheet, Text, TextInput, View, Image, ScrollView, Pressable } from 'react-native';

const Product = () => {
    return <View style={styles.container}>
        <Image
            source={require('../../../../../assets/images/contoh1.png')}
            style={{width: '100%', padding: 0, resizeMode: 'cover', height: 330}}
        />
        <View style={{backgroundColor: '#F1EEE1', padding: 10}}>
            <Text style={{color: '#616219', fontWeight: 'bold', fontSize: 18}}>Dress Hitam</Text>
            <Text style={{fontSize: 16}}>Rp125.000</Text>
            <Text style={{fontSize: 16}}>Jakarta</Text>
            <Pressable ><Text style={{color: '#616219', fontSize: 16}}>Offered by Nadine</Text></Pressable>
        </View>
        <View style={{backgroundColor: 'white', padding: 10}}>
            <Text>Merk: ...</Text>
            <Pressable><Text style={{paddingVertical: 10, paddingHorizontal: 60, marginVertical: 20, marginHorizontal: 'auto', fontSize: 18, backgroundColor: '#616219', color: 'white', borderRadius: 10}}>Buy Now</Text></Pressable>
        </View>

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