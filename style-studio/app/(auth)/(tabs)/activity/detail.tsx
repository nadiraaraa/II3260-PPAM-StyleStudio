import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface ActDetailProps {
    name: string;
    photo: string;
    category: string;
    size: string;
    price: string;
    status: string;
    addressName: string;
    address: string;
    paymentMethod: string;
    orderDate: Date | null;
    payDate: Date | null;
    sendDate: Date | null;
    reviewed: boolean;
}

const ActDetail = ({}: ActDetailProps) => {
        const { type, detail } = useLocalSearchParams()

        const [activity, setActivity] = useState<ActDetailProps>({
        name: "Refal Hady",
        photo: "",
        category: "",
        size: "",
        price: "200000",
        status: "",
        addressName: "Refal Hady",
        address: "Jalan Ganesha No. 10 Kecamatan Coblong, Bandung, Jawa Barat",
        paymentMethod: "Bank BCA",
        orderDate: new Date("2024-04-10T05:20:00"),
        payDate: new Date("2024-04-10T05:25:00"),
        sendDate: new Date("2024-04-10T13:15:00"),
        reviewed: false,
    });

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.boldText}>{activity.addressName}</Text>
                <Text>{activity.address}</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.boldText}>Metode Pembayaran</Text>
                <Text>{activity.paymentMethod}</Text>
                <Text>Total Rp {activity.price}</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.boldText}>Detail</Text>
                <View style={styles.detailRow}>
                    <Text>Waktu Pemesanan</Text>
                    <Text>{activity.orderDate?.toLocaleString()}</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text>Waktu Pembayaran</Text>
                    <Text>{activity.payDate?.toLocaleString()}</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text>Waktu Pengiriman</Text>
                    <Text>{activity.sendDate?.toLocaleString()}</Text>
                </View>
            </View>
            {activity.reviewed ?
            <Text style={{ padding: 10, textAlign: 'center',margin: 10, width: 120, fontSize: 16, borderWidth: 1, borderColor: '#616219', color: 'white', borderRadius: 10, alignSelf: 'flex-end' }}>
                Reviewed
            </Text>
            :
            <Pressable style={{justifyContent: 'flex-end',}} onPress={() => router.push(`/activity/addReview?type=${'Tailor'}&name=${'Name'}` as any)}>
                <Text style={{ padding: 10, textAlign: 'center',margin: 10, width: 120, fontSize: 16, backgroundColor: '#616219', color: 'white', borderRadius: 10, alignSelf: 'flex-end' }}>
                    Review
                </Text>
            </Pressable>
            }
            
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5DC', // Cream background color
        padding: 10,
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },
    boldText: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
    },
});

export default ActDetail;
