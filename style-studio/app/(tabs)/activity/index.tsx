import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";

const Activity = () => {
    const [page, setPage] = useState("Thrift");

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.welcomeText}>Hello, Welcome Back</Text>
            <View style={styles.contentContainer}>
                <Pressable style={[styles.card, page === "Thrift" && styles.activeCard]} onPress={() => setPage('Thrift')}>
                    <Text style={styles.cardTitle}>Thrift</Text>
                    <Text style={styles.cardDescription}>Shop affordable, second-hand fashion for stylish savings.</Text>
                </Pressable>
                <Pressable style={[styles.card, page === "Remake" && styles.activeCard]} onPress={() => setPage('Remake')}>
                    <Text style={styles.cardTitle}>Remake</Text>
                    <Text style={styles.cardDescription}>Transform old clothes into trendy, new designs with skilled tailors.</Text>
                </Pressable>
            </View>
            <View style={styles.singleCardContainer}>
                <Pressable style={[styles.card, page === "Sell" && styles.activeCard]} onPress={() => setPage('Sell')}>
                    <Text style={styles.cardTitle}>Sell</Text>
                    <Text style={styles.cardDescription}>Sell your old clothes to save more space in your wardrobe.</Text>
                </Pressable>
            </View>
            <View style={styles.pageContent}>
                {page === "Thrift" && (
                    <View>
                        <Text style={styles.pageTitle}>Thrift Page</Text>
                        <Text>Shop affordable, second-hand fashion for stylish savings.</Text>
                    </View>
                )}
                {page === "Remake" && (
                    <View>
                        <Text style={styles.pageTitle}>Remake Page</Text>
                        <Text>Transform old clothes into trendy, new designs with skilled tailors.</Text>
                    </View>
                )}
                {page === "Sell" && (
                    <View>
                        <Text style={styles.pageTitle}>Sell Page</Text>
                        <Text>Sell your old clothes to save more space in your wardrobe.</Text>
                    </View>
                )}
            </View>
        </SafeAreaView>
    );
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

export default Activity;
