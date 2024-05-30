import { Link, useLocalSearchParams, useRouter } from 'expo-router';

import { SafeAreaView } from "react-native-safe-area-context";
import { Button, StyleSheet, Text, TextInput, View, Image, ScrollView, Pressable } from 'react-native';
import catalogType from './catalog';


const Product = () => {
    const router = useRouter();
    const { detail } = useLocalSearchParams();
    console.log(detail);
    const product: catalogType = detail ? JSON.parse(detail as string) : {};


    return <View style={styles.container}>
        <ScrollView>
        <Image
            source={require('../../../../../assets/images/contoh1.png')}
            style={{width: '100%', padding: 0, resizeMode: 'cover', height: 330}}
        />
        <View style={{backgroundColor: '#F1EEE1', padding: 15}}>
            <Text style={{color: '#616219', fontWeight: 'bold', fontSize: 18, paddingVertical: 4}}>{product?.name}</Text>
            <Text style={{fontSize: 16}}>Rp{product?.price.toString()}</Text>
            <Text style={{fontSize: 16}}>{product?.seller_city}</Text>
            <Pressable  onPress={()=> router.push('/home/thrift/seller')}><Text style={{color: '#616219', fontSize: 16}}>Offered by {product?.seller_name}</Text></Pressable>
        </View>
        <View style={{backgroundColor: '#FDFDF9', padding: 15, zIndex: 2}}>
            <Text style={{color: '#616219', fontWeight: 'bold', fontSize: 18, paddingVertical: 4}}>Details</Text>
            <Text>Category: {product?.category}</Text>
            <Text>Size: {product?.size}</Text>
            <Text>Brand: {product?.brand}</Text>
            <Text>Condition: {product?.condition}</Text>
            <Text>Material: {product?.material}</Text>
            <Text>Description: {product?.description}</Text>
        </View>
        
        </ScrollView>
        <Pressable onPress={()=> router.push(`/home/thrift/payment?catalogId=${product?.catalogId}&name=${product?.name}&amount=${product?.price.toString()}`)} style={{backgroundColor: '#FDFDF9'}}><Text style={{zIndex: 5, paddingVertical: 10, paddingHorizontal: 60, marginVertical: 10, marginHorizontal: 'auto', fontSize: 18, backgroundColor: '#616219', color: 'white', borderRadius: 10}}>Buy Now</Text></Pressable>

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
        zIndex: 1
        // alignContent: 'center',
    },
});

export default Product;