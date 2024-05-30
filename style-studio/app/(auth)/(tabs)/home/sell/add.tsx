import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, ScrollView, Alert, Button, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Picker } from '@react-native-picker/picker';
import { FileObject, newCatalogType } from '../../catalog';
import { useSession } from '@/context/SessionContext';
import { addCatalog } from '../../../../../routes/addCatalog';
import * as ImagePicker from 'expo-image-picker';
import { supabase } from '../../../../../supabaseClient';

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
        photo: null,
        category: 'Top',
        sellerId: userId,
    });

    const [error, setError] = useState('');
    const [imageUri, setImageUri] = useState<string | null>(null);

    const handleInputChange = (name: string, value: string | number | FileObject) => {
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImageUri(result.assets[0].uri);
        }
    };

    const uploadImage = async (uri: string) => {
        try {
            const response = await fetch(uri);
            const blob = await response.blob();
            const fileName = `${userId}/${Date.now()}`;
            const { data, error } = await supabase.storage
                .from('files')
                .upload(fileName, blob);

            if (error) {
                throw error;
            }

            const { publicURL } = supabase.storage.from('files').getPublicUrl(data.path);
            return publicURL;
        } catch (error) {
            console.error('Error uploading image:', error.message);
            return null;
        }
    };

    const handleSubmit = async () => {
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
            return;
        }

        let imageUrl = form.photo;
        if (imageUri) {
            imageUrl = await uploadImage(imageUri);
            if (imageUrl) {
                handleInputChange('photo', imageUrl);
            }
        }

        try {
            const addedData = await addCatalog({ ...form, photo: imageUrl });
            console.log(addedData);
        } catch (err) {
            console.error('Error adding catalog:', err.message);
        } finally {
            router.push('./');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.formContainer}>
                    <Text>Name: *</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(e) => handleInputChange('name', e)}
                    />
                    <Text>Size: *</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(e) => handleInputChange('size', e)}
                    />
                    <Text>Brand:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(e) => handleInputChange('brand', e)}
                    />
                    <Text>Condition:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(e) => handleInputChange('condition', e)}
                    />
                    <Text>Material:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(e) => handleInputChange('material', e)}
                    />
                    <Text>Description:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(e) => handleInputChange('description', e)}
                    />
                    <Text>Price: *</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        placeholderTextColor="#8C8C8C"
                        onChangeText={(e) => handleInputChange('price', parseInt(e))}
                    />
                    <Text>Photo:</Text>
                    <View style={styles.container}>
                        <Button title="Pick an image from camera roll" onPress={pickImage} />
                        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
                    </View>
                    <Text>Category: *</Text>
                    <View style={[styles.input, { paddingVertical: 0 }]}>
                        <Picker
                            selectedValue={form.category}
                            onValueChange={(itemValue: string) => handleInputChange('category', itemValue)}
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
                        <Pressable onPress={handleSubmit}>
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
        backgroundColor: '#FDF9EC',
        padding: 20,
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
    image: {
        width: 150,
        height: 150,
        resizeMode: 'cover',
    },
});

export default Add;
