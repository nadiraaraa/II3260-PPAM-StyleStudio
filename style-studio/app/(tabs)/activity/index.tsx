import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import axios from "axios";
import * as Datetime from "react-datetime";

import {
    Image,
    Text,
    View,
    Pressable,
    Alert,
} from "react-native";
import { router } from "expo-router";

interface ActivityProps {
    name: string;
    photo: string;
    category: string;
    size: string;
    price: string;
    orderDate: Datetime;
    status: string;
}

const Activity = () => {
    const [page, setPage] = useState("Thrift");
    const [loading, setLoading] = useState(true);
    const [activities, setActivities] = useState<ActivityProps[]>([]);

    useEffect(() => {
        // const fetchData = async () => {
        //   setLoading(true);
        //   try {
        //     const token = await AsyncStorage.getItem("token");
        //     const response = await axios.get(`${API}/api/listDashboard`, {
        //       headers: {
        //         Authorization: `Bearer ${token}`,
        //       },
        //     });
        //     setActivities(response.data.data);
        //   } catch (error) {
        //     Alert.alert("Error", error.message, [{ text: "OK" }]);
        //   } finally {
        //     setLoading(false);
        //   }
        // };
        // fetchData();
    }, []);

    return (
        <SafeAreaView>
            <View className="flex-row">
                <Pressable onPress={() => setPage("Thrift")}>
                    <Text className={(page === "Thrift" ? "bg-mgreen1 text-white1 " : "bg-lgreen1") + " m-1 text-center w-24 p-1 rounded-lg text-md "}>
                        Thrift
                    </Text>
                </Pressable>
                <Pressable onPress={() => setPage("Remake")}>
                    <Text className={(page === "Remake" ? "bg-mgreen1 text-white1 " : "bg-lgreen1") + " m-1 text-center w-24 p-1 rounded-lg text-md "}>
                        Remake
                    </Text>
                </Pressable>
                <Pressable onPress={() => setPage("Sell")}>
                    <Text className={(page === "Sell" ? "bg-mgreen1 text-white1 " : "bg-lgreen1") + " m-1 text-center w-24 p-1 rounded-lg text-md "}>
                        Sell
                    </Text>
                </Pressable>
            </View>
            <View>
                {activities?.map((act, idx) => (
                    <View key={idx} className="flex">
                        <View>
                            <Image
                                source={{ uri: act.photo }}
                                className="w-16"
                                style={{ resizeMode: "contain" }}
                            />
                        </View>
                        <View>
                            <Text className="font-bold">{act.name}</Text>
                            <Text>{act.category}</Text>
                            <Text>Ukuran: {act.size}</Text>
                            <Text>Rp {act.price}</Text>
                        </View>
                        <View>
                            <Text>{act.orderDate.toLocaleString()}</Text>
                            <Text>{act.status}</Text>
                            <Pressable
                                onPress={() => router.push(`./${idx}`)}
                                className="bg-lgreen1 rounded-md"
                            >
                                <Text>Detil</Text>
                            </Pressable>
                        </View>
                    </View>
                ))}
            </View>
        </SafeAreaView>
    );
};

export default Activity;