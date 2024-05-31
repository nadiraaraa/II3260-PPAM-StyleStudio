import { SafeAreaView } from "react-native-safe-area-context";
import { Button, StyleSheet, Text, TextInput, View, Image, ScrollView, Pressable } from 'react-native';
import { useLocalSearchParams, useRouter } from "expo-router";
import { feedbackType } from "../../../../../components/feedback";
import { useState, useEffect } from "react";
import { fetchFeedback } from '../../../../../routes/sellerFeedback'

const Seller = () => {
    const router = useRouter();

    const { userId } = useLocalSearchParams();

    const [feedbacks, setFeedbacks] = useState<feedbackType[]>([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const loadFeedback = async () => {
            setLoading(true);

            try {
 
                const feedbackData = await fetchFeedback(userId);
                // console.log(feedbackData);
                setFeedbacks(feedbackData);
            } catch (err) {
                console.error(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadFeedback();
    }, []);


    return <View style={styles.container}>
        <ScrollView>
            <View style={{ flexDirection: 'row' }}>
                <Image
                    source={require('../../../../../assets/images/profpic.png')}
                    style={{ width: 120, height: 120, resizeMode: 'cover' }}
                />
                <View style={{ padding: 10 }}>
                    <Text style={{ color: '#616219', fontWeight: 'bold', fontSize: 18 }}>Nadine</Text>
                    <Text style={{ fontSize: 16 }}>Lokasi: Jakarta</Text>
                    <Pressable><Text style={{ paddingVertical: 10, paddingHorizontal: 40, marginTop: 10, marginHorizontal: 'auto', fontSize: 16, backgroundColor: '#616219', color: 'white', borderRadius: 10 }}>See Catalog</Text></Pressable>
                </View>
            </View>

            <View >
                <Text style={{ color: '#616219', fontWeight: 'bold', fontSize: 18, padding: 15, paddingBottom: 0, }}>Review Seller</Text>

                {feedbacks.map((feedback, idx) =>
                    <View key={idx} style={{ backgroundColor: 'white', padding: 10, borderWidth: 1, borderColor: '#616219', marginHorizontal: 10, marginVertical: 5, borderRadius: 10 }}>
                        <Text style={{ color: '#616219', fontWeight: 'bold', fontSize: 18 }}>{feedback.user_name}</Text>
                        <Text style={{ fontSize: 16 }}>{feedback.created_date}</Text>
                        <Text style={{ fontSize: 16 }}>Produk: {feedback.catalog_name}</Text>
                        <View style={{ backgroundColor: '#D9D9D9', padding: 15, borderRadius: 10 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <Text>Rating: </Text>
                                {[...Array(feedback.rating)].map((e, idx2) =>
                                    <Image
                                        key={idx2}
                                        source={require('../../../../../assets/images/star.png')}
                                        style={{ width: 20, height: 20, padding: 0, resizeMode: 'cover' }}
                                    />
                                )}

                            </View>
                            <Text>{feedback.comment}</Text>
                        </View>


                    </View>
                )}

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

export default Seller;