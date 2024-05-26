import { useState } from "react";
import * as Datetime from "react-datetime";
import { View, Text, Image } from "react-native";
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
    orderDate: Datetime | null;
    payDate: Datetime | null;
    sendDate: Datetime | null;
}

const ActDetail = ({}: ActDetailProps) => {
    const [activity, setActivity] = useState<ActDetailProps>({
        name: "",
        photo: "",
        category: "",
        size: "",
        price: "",
        status: "",
        addressName: "",
        address: "",
        paymentMethod: "",
        orderDate: null,
        payDate: null,
        sendDate: null,
    });

  return <>
    <SafeAreaView className="bg-cream1 min-h-screen">
        <View className="text-md rounded-lg bg-white1 mx-2 my-1 rounded-lg p-2">
            <Text className="font-bold">Pesanan</Text>
            <View className="flex-row">
                <View>
                    <Image
                        src={activity.photo}
                        className ="w-32"
                        style={{resizeMode: "contain"}}
                    />
                </View>
                <View>
                    <Text className="font-bold">{activity.name}</Text>
                    <Text>{activity.category}</Text>
                    <Text>Ukuran {activity.size}</Text>
                    <Text>Rp{activity.price}</Text>
                </View>
            </View>
        </View>
        <View className="text-md rounded-lg bg-white1 mx-2 my-1 rounded-lg p-2">
            <Text className="font-bold">Alamat Pengiriman</Text>
            <Text>{activity.addressName}</Text>
            <Text>{activity.address}</Text>
        </View>
        <View className="text-md rounded-lg bg-white1 mx-2 my-1 rounded-lg p-2">
            <Text className="font-bold">Metode Pembayaran</Text>      
            <Text>{activity.paymentMethod}</Text>    
        </View>
        <View className="text-md rounded-lg bg-white1 mx-2 my-1 rounded-lg p-2">
            <Text className="font-bold">Detil Pemesanan</Text>    
            <View>
                <Text>Waktu Pemesanan</Text>
                <Text>{activity.orderDate?.toLocaleString()}</Text>
            </View>  
            <View>
                <Text>Waktu Pembayaran</Text>
                <Text>{activity.payDate?.toLocaleString()}</Text>
            </View>  
            <View>
                <Text>Waktu Pengiriman</Text>
                <Text>{activity.sendDate?.toLocaleString()}</Text>
            </View>  
            <View>
                <Text>Status Pengiriman</Text>
                <Text>{activity.status}</Text>
            </View>  
        </View>
    </SafeAreaView>
  </>;
};

export default ActDetail;