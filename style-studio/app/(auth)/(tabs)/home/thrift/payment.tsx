import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, Button, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {order} from '../../../../../routes/order'
import { useSession } from '@/context/SessionContext';
import 'react-native-get-random-values'; //have to be imported bfr uuid for some reason
import { v4 as uuidv4 } from 'uuid';
// import { nanoid } from 'react-native-get-random-values';

const Payment = () => {
    const router = useRouter();
    const { user, isLoading } = useSession();
    console.log("user:", user, user?.id);
    const userId = user?.id;

    // console.log("here");
    // console.log("type:", typeof(userId), typeof(user?.id), userId);
    const { catalogId, name, amount } = useLocalSearchParams();
    const [address, setAddress] = useState("");
    const [addressName, setAddressName] = useState("");

    const handlePay = async () => {
        console.log("address: ", address, addressName);
        if(address=="" || addressName==""){
            Alert.alert(
                'Error',
                "Address details can't be empty",
                [
                  {
                    text: 'OK',
                  },
                ],
                { cancelable: false }
              );        
        } else{
                const form = {
                    catalogId: catalogId,
                    paymentMethod: "M-Banking BCA",
                    address: address,
                    addressName: addressName,
                    buyerId: userId,

                }
                console.log(form);
                const addedData = await order(user, form);
                console.log(addedData);

                router.push('/home/thrift/paymentSuccess');
        }

    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={{ color: '#616219', fontWeight: 'bold', fontSize: 18, paddingVertical: 8 }}>Ordering {name}</Text>
                <Text style={{ fontSize: 16, paddingVertical: 8 }}>Total Rp{amount}</Text>

                <Text style={{ color: '#616219', fontWeight: 'bold',fontSize: 16, paddingTop: 8 }}>Input Details:</Text>

                <View style={{ padding: 10, backgroundColor: '#E6E4BF', borderRadius: 5, margin: 2 }}>
                    <Text>Address Name:</Text>
                    <TextInput
                        style={styles.inputContainer}
                        placeholder="Name"
                        placeholderTextColor="#8C8C8C" // Light gray color for placeholder text
                        value={addressName}
                        onChangeText={setAddressName}
                    />
                    <Text>Address:</Text>
                    <TextInput
                        style={styles.inputContainer}
                        placeholder="Address"
                        placeholderTextColor="#8C8C8C" // Light gray color for placeholder text
                        value={address}
                        onChangeText={setAddress}
                    />
                </View>

                <Text style={{ color: '#616219', fontWeight: 'bold',fontSize: 16, paddingTop: 8 }}>Choose Payment Method:</Text>

                <View style={{ padding: 10, backgroundColor: '#E6E4BF', borderRadius: 5, margin: 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../../../../../assets/images/bca.png')}
                            style={styles.logoImage}
                            resizeMethod="scale"
                        />
                        <Text>BCA</Text>
                    </View>
                    <Text>**** **** **** 1803</Text>
                </View>

                <View style={styles.totalContainer}>
                    <Text style={styles.titleText}>Total</Text>
                    <Text style={styles.titleText}>Rp {amount}</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <View style={styles.footerTextContainer}>
                    <Text style={styles.footerTotalText}>Total: Rp {amount}</Text>
                </View>
                <Pressable
                    style={styles.payButton}
                    onPress={() => handlePay()}
                >
                    <Text style={styles.payButtonText}>PAY</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF', // White background color
        width: '100%',
    },

    contentContainer: {
        flexGrow: 1,
        paddingHorizontal: 20,
    },

    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginBottom: 20, // Add some space below the header
    },

    paymentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginVertical: 20, // Add some vertical margin to position the image
    },

    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10 
    },

    titleText: {
        fontSize: 16,
        fontWeight: '500',
    },

    logoImage: {
        width: 30,
        height: 30,
    },

    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#D2D2A4', // Light greenish color
        paddingVertical: 15,
        paddingHorizontal: 20,
    },

    footerTextContainer: {
        flex: 1,
    },

    footerTotalText: {
        fontSize: 16,
        fontWeight: '500',
    },

    payButton: {
        backgroundColor: '#65632F', // Dark greenish color
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },

    payButtonText: {
        color: '#FFFFFF', // White text color
        fontSize: 16,
        fontWeight: '600',
    },
    inputContainer: {
        borderColor: '#CCCCCC',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
        backgroundColor: '#FFFFFF',
    },
    input: {
        height: 50,
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Payment;
