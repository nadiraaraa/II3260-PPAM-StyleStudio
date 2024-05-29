import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";
import { useNavigation, useRouter } from "expo-router";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/app/types";
import { useRoute, RouteProp } from '@react-navigation/native';
import Thrift from "./thrift";
import Sell from "./sell";
import Remake from "./remake";

type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

const Home = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const route = useRoute<HomeScreenRouteProp>();
    const { id } = route.params;
    const [page, setPage] = useState("Home");

    if (page == "Home") {


        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.welcomeText}>Hello, Welcome Back</Text>
                <View style={styles.contentContainer}>
                    <Pressable style={styles.card} onPress={() => setPage("Thrift")}>
                        <Text style={styles.cardTitle}>Thrift</Text>
                        <Text style={styles.cardDescription}>Shop affordable, second-hand fashion for stylish savings.</Text>
                    </Pressable>
                    <Pressable style={styles.card} onPress={() => setPage("Remake")}>
                        <Text style={styles.cardTitle}>Remake</Text>
                        <Text style={styles.cardDescription}>Transform old clothes into trendy, new designs with skilled tailors.</Text>
                    </Pressable>
                </View>
                <View style={styles.singleCardContainer}>
                <Pressable style={styles.card} onPress={() => setPage("Sell")}>
                        <Text style={styles.cardTitle}>Sell</Text>
                        <Text style={styles.cardDescription}>Sell your old clothes to save more space in your wardrobe.</Text>
                    </Pressable>
                </View>
            </SafeAreaView>
        );
    }

    if (page == "Thrift"){
        return Thrift(id);
    }
    if (page == "Sell"){
        return Sell(id);
    }
    if (page == "Remake"){
        return Remake(id);
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5DC', // Cream background color
        padding: 20,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#6D6D4E', // Medium green text color
    },
    contentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 20,
    },
    singleCardContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: '45%',
        height: 220,
        backgroundColor: '#D0D0A5', // Light green background color
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    activeCard: {
        backgroundColor: '#6D6D4E', // Medium green background color
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#4B5320', // Dark green text color
    },
    cardDescription: {
        fontSize: 16,
        textAlign: 'center',
        color: '#4B5320', // Dark green text color
    },
    pageContent: {
        marginTop: 20,
        padding: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
    },
    pageTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#4B5320', // Dark green text color
    },
});

export default Home;
