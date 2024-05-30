import React, { ChangeEvent, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, AppState, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';
import { Picker } from '@react-native-picker/picker';
import { addThriftFeedback } from '../../../../routes/addThriftFeedback'
import { addTailorFeedback } from '../../../../routes/addTailorFeedback'
import { reviewType } from './review';


const AddReview = () => {
    const { page, name, id } = useLocalSearchParams()
    const intId = parseInt(id as string);
    const [form, setForm] = useState<reviewType>({
        rating: null,
        comment: '',
    });

    const [error, setError] = useState('');

    const handleInputChange = (name: string, value: string | number) => {
        setForm((prevFrom) => ({ ...prevFrom, [name]: value }));
    };

    const handleSubmit = async () => {
        if (form.rating == null || form.rating<1 || form.rating>5) {
            Alert.alert(
                'Error',
                "Rating must be between 1 and 5",
                [
                    {
                        text: 'OK',
                    },
                ],
                { cancelable: false }
            );
            console.log(form);
        } else {
            if (page==="Thrift"){
                const thriftForm={orderId: intId,
                    rating: null,
                    comment: '',}
                const addedData = await addThriftFeedback(thriftForm);
                console.log(addedData);
            } else {
                const thriftForm={bookId: intId,
                    rating: null,
                    comment: '',}
                const addedData = await addTailorFeedback(thriftForm);
                console.log(addedData);
            }
        }

    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.formContainer}>
                    <Text>{page}:</Text>
                    <Text style={styles.input}>
                        {name}
                    </Text>

                    <Text>Rating:</Text>
                    <View style={[styles.input, { paddingVertical: 0 }]}>
                        <Picker
                            onValueChange={(itemValue: string, itemIndex) => handleInputChange('rating', itemValue)}
                        >
                            <Picker.Item label="1" value={1} />
                            <Picker.Item label="2" value={2} />
                            <Picker.Item label="3" value={3} />
                            <Picker.Item label="4" value={4} />
                            <Picker.Item label="5" value={5} />
                        </Picker>
                    </View>
                    <Text>Comment:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(e) => handleInputChange('comment', e)}
                    />

                </View>
                <View>
                    <Pressable onPress={() => handleSubmit}>
                        <Text style={{ fontSize: 18, paddingVertical: 10, paddingHorizontal: 60, backgroundColor: '#616219', textAlign: 'center', color: 'white', borderRadius: 5, marginTop: 20, alignSelf: 'center' }}>Add Review</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView >
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
        paddingVertical: 10,
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

export default AddReview;