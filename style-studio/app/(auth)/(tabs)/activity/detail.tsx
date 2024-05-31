import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { bookType, orderType } from "../../../../components/activity";

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

const ActDetail = ({ }: ActDetailProps) => {
    const { page, detail } = useLocalSearchParams()

    if (page == "Thrift" || page=="Sell") {
        const orderDetail: orderType = detail ? JSON.parse(detail as string) : {};

        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.boldText}>Address</Text>
                    <Text>Name: {orderDetail.addressName}</Text>
                    <Text>Address: {orderDetail.address}</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.boldText}>Payment Method</Text>
                    <Text>{orderDetail.paymentMethod}</Text>
                    <Text>Total Rp{orderDetail.cat_price?.toString()}</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.boldText}>Detail</Text>
                    <View style={styles.detailRow}>
                        <Text style={{width: 80}}>Ordered at</Text>
                        <Text style={{ flexWrap: 'wrap', width: 200 }}>{orderDetail.created_at?.toLocaleString()}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={{width: 80}}>Sent at</Text>
                        <Text style={{ flexWrap: 'wrap', width: 200 }}>{orderDetail.sent_at?.toLocaleString() || '-'}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={{width: 80}}>Received at</Text>
                        <Text style={{ flexWrap: 'wrap', width: 200 }}>{orderDetail.received_at?.toLocaleString() || '-'}</Text>
                    </View>
                </View>
                {page == "Sell" ?
                    <></>

                    : orderDetail.reviewed ?
                        <Text style={{ padding: 10, textAlign: 'center', margin: 10, width: 120, fontSize: 16, borderWidth: 1, borderColor: '#616219', color: 'white', borderRadius: 10, alignSelf: 'flex-end' }}>
                            Reviewed
                        </Text>
                        :
                        <Pressable style={{ justifyContent: 'flex-end', }} onPress={() => router.push(`./addReview?page=${page === "Thrift" ? "Product" : "Tailor"}&name=${'Name'}&id=${orderDetail.id}`)}>
                            <Text style={{ padding: 10, textAlign: 'center', margin: 10, width: 120, fontSize: 16, backgroundColor: '#616219', color: 'white', borderRadius: 10, alignSelf: 'flex-end' }}>
                                Review
                            </Text>
                        </Pressable>
                }

            </SafeAreaView>
        );
    } else {
        const bookDetail: bookType = detail ? JSON.parse(detail as string) : {};

        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.boldText}>Tailor Name: {bookDetail.tailor_name}</Text>
                    <Text>Alter Count: {bookDetail.alterCount?.toString()}</Text>
                    <Text>Create Count: {bookDetail.createCount?.toString()}</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.boldText}>Payment Method</Text>
                    <Text>{bookDetail.paymentMethod}</Text>
                    <Text>Total Rp {bookDetail.total?.toString()}</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.boldText}>Detail</Text>
                    <View style={styles.detailRow}>
                        <Text>Order Time</Text>
                        <Text style={{ flexWrap: 'wrap', width: 200 }}>{bookDetail.created_at?.toLocaleString()}</Text>
                    </View>
                </View>
                {page == "Sell" ?
                    <></>

                    : bookDetail.reviewed ?
                        <Text style={{ padding: 10, textAlign: 'center', margin: 10, width: 120, fontSize: 16, borderWidth: 1, borderColor: '#616219', color: 'white', borderRadius: 10, alignSelf: 'flex-end' }}>
                            Reviewed
                        </Text>
                        :
                        <Pressable style={{ justifyContent: 'flex-end', }} onPress={() => router.push(`./addReview?type=${page === "Thrift" ? "Product" : "Tailor"}&name=${'Name'}` as any)}>
                            <Text style={{ padding: 10, textAlign: 'center', margin: 10, width: 120, fontSize: 16, backgroundColor: '#616219', color: 'white', borderRadius: 10, alignSelf: 'flex-end' }}>
                                Review
                            </Text>
                        </Pressable>
                }

            </SafeAreaView>
        );
    }

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
        // justifyContent: 'space-between',
        gap: 25,
        paddingVertical: 5,
        width: '100%'
    },
});

export default ActDetail;
