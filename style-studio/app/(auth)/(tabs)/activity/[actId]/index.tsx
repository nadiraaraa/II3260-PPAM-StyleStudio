import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
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
}

const ActDetail = ({}: ActDetailProps) => {
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
