import React, { ChangeEvent, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, AppState, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Picker } from '@react-native-picker/picker';
import { newCatalogType } from '../../../../../components/catalog';
import { useSession } from '@/context/SessionContext';
import { addCatalog } from '../../../../../routes/addCatalog'

const Add = () => {
    const router = useRouter();
    const { user } = useSession();
    const userId = user?.id || '';


    const [form, setForm] = useState<newCatalogType>({
        name: '',
        size: '',
        brand: null,
        condition: null,
        material: null,
        description: null,
        price: null,
        photo: '',
        category: 'Top',
        sellerId: userId,
    });

    const [error, setError] = useState('');

    const handleInputChange = (name: string, value: string | number) => {
        setForm((prevFrom) => ({ ...prevFrom, [name]: value }));
    };

    const checkSubmit = () => {
        if (form.name === '' || form.size === '' || form.category === '' || form.price === null) {
            Alert.alert(
                'Error',
                "Details marked with * can't be empty.",
                [
                    {
                        text: 'OK',
                    },
                ],
                { cancelable: false }
            );
            console.log(form);
        } else {
            handleSubmit();
            setForm((prevFrom) => ({ name: '', size: '', brand: null, condition: null, material: null, description: null, price: null, photo: '', category: 'Top', sellerId: userId})); 
            router.push('/home/sell');
        }
    }

    const handleSubmit = async () => {
                console.log(form);
                const addedData = await addCatalog(form);
                console.log(addedData);

    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.formContainer}>
                    <Text>Name: *</Text>
                    <TextInput
                        value={form.name}
                        style={styles.input}
                        onChangeText={(e) => handleInputChange('name', e)}
                    />
                    <Text>Size: *</Text>
                    <TextInput
                        value={form.size}
                        style={styles.input}
                        onChangeText={(e) => handleInputChange('size', e)}
                    />
                    <Text>Brand:</Text>
                    <TextInput
                        value={form.brand || ''}
                        style={styles.input}
                        onChangeText={(e) => handleInputChange('brand', e)}
                    />
                    <Text>Condition:</Text>
                    <TextInput
                        value={form.condition || ''}
                        style={styles.input}
                        onChangeText={(e) => handleInputChange('condition', e)}
                    />
                    <Text>Material:</Text>
                    <TextInput
                        value={form.material || ''}
                        style={styles.input}
                        onChangeText={(e) => handleInputChange('material', e)}
                    />
                    <Text>Description:</Text>
                    <TextInput
                        value= {form.description || ''}
                        style={styles.input}
                        onChangeText={(e) => handleInputChange('description', e)}
                    />
                    <Text>Price: *</Text>
                    <TextInput
                        value= {form.price?.toString() || ''}
                        style={styles.input}
                        keyboardType="numeric"
                        placeholderTextColor="#8C8C8C" // Light gray color for placeholder text
                        onChangeText={(e) => handleInputChange('price', parseInt(e))}
                    />
                    <Text>Photo:</Text>
                    
                    {/* <TextInput
                        style={styles.input}
                        onChangeText={(e) => handleInputChange('photo', e)}
                    /> */}
                    <Text>Category: *</Text>
                    <View style={[styles.input, { paddingVertical: 0 }]}>
                        <Picker
                            selectedValue={form.category}
                            onValueChange={(itemValue: string, itemIndex) => handleInputChange('category', itemValue)}

                        >
                            <Picker.Item label="Top" value="Top" />
                            <Picker.Item label="Bottom" value="Bottom" />
                            <Picker.Item label="Dress" value="Dress" />
                            <Picker.Item label="Accessory" value="Accessory" />
                            <Picker.Item label="Footwear" value="Footwear" />
                            <Picker.Item label="Set" value="Set" />
                        </Picker>
                    </View>
                    <View>
                        <Pressable onPress={() => {checkSubmit(); }}>
                            <Text style={{ fontSize: 18, paddingVertical: 10, paddingHorizontal: 60, backgroundColor: '#616219', textAlign: 'center', color: 'white', borderRadius: 5, marginTop: 20, alignSelf: 'center' }}>Add Item</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDF9EC', // White background color
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    backButton: {
        padding: 10,
    },
    backButtonText: {
        fontSize: 18,
        color: '#808080',
    },
    titleContainer: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    formContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        borderColor: '#616219',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 2,
        marginVertical: 10,
        backgroundColor: '#FDFDF9',
    },
    error: {
        textAlign: 'right',
        color: '#FF0000',
        marginVertical: 10,
    },
    button: {
        backgroundColor: '#6D6D4E', // Medium green background color
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 20,
    },
    buttonText: {
        color: '#FFFFFF', // White text color
        fontSize: 16,
        fontWeight: 'bold',
    },
    formContain: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    needAccountText: {
        color: '#808080',
    },
    formText: {
        color: '#6D6D4E',
        fontWeight: 'bold',
    },
});

export default Add;