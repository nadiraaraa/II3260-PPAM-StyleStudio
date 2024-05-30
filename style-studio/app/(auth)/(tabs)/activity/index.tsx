import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, Pressable, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import {fetchBuyHistory} from '../../../../routes/buyHistory';
import {fetchBookHistory} from '../../../../routes/bookHistory';
import {fetchBookedHistory} from '../../../../routes/bookedHistory';
import {fetchSellHistory} from '../../../../routes/sellHistory';
import { useSession } from "@/context/SessionContext";
import { orderType, bookType } from "../activity";



const Activity = () => {
  const { user, isLoading } = useSession();
  const userId = user?.id;

  const [page, setPage] = useState("Thrift");
  const [loading, setLoading] = useState(true);
  const [buys, setBuys] = useState<orderType[]>([]);
  const [books, setBooks] = useState<bookType[]>([]);
  const [sells, setSells] = useState<orderType[]>([]);
  const router = useRouter();

  useEffect(() => {
    const loadActivity = async () => {
        setLoading(true);

        try {
            // if (page=="Thrift"){
              const buyData = await fetchBuyHistory(userId);
              // console.log(buyData);
              setBuys(buyData);
            // } else if (page=="Remake"){
              const bookData = await fetchBookHistory(userId);
              // console.log(bookData);
              setBooks(bookData);
            // } else{
              const sellData = await fetchSellHistory(userId);
              // console.log(sellData);
              setSells(sellData);
            // }
           
        } catch (err) {
            console.error(err.message);
        } finally {
            setLoading(false);
        }
    };

    loadActivity();
}, []);

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Pressable style={styles.backButton} onPress={() => router.push("/profile")}>
          <Text style={styles.backButtonText}>←</Text>
        </Pressable>
        <Text style={styles.headerText}>Detail Order</Text>
      </View> */}


      <View style={styles.tabs}>
        <Pressable onPress={() => setPage("Thrift")}>
          <Text style={[styles.tab, page === "Thrift" && styles.activeTab]}>Thrift</Text>
        </Pressable>
        <Pressable onPress={() => setPage("Remake")}>
          <Text style={[styles.tab, page === "Remake" && styles.activeTab]}>Remake</Text>
        </Pressable>
        {/* <Pressable onPress={() => setPage("Tailor")}>
          <Text style={[styles.tab, page === "Sell" && styles.activeTab]}>Sell</Text>
        </Pressable> */}
        <Pressable onPress={() => setPage("Sell")}>
          <Text style={[styles.tab, page === "Sell" && styles.activeTab]}>Sell</Text>
        </Pressable>
      </View>
      
      <ScrollView>
      {page == "Thrift"?
      <View>
        {buys.map((buy, idx) => (
          <View key={idx} style={styles.card}>
            <View style={styles.cardText}>
              <Text style={styles.name}>{buy.cat_name}</Text>
              <Text style={styles.category}>{buy.cat_category}</Text>
              <Text style={styles.price}>Total Rp {buy.cat_price?.toString()}</Text>
            </View>
            <View style={{justifyContent: 'flex-end'}}>
              <Text style={styles.date}>{buy.created_at}</Text>
              <Pressable style={styles.detailsButton} onPress={() => router.push(`activity/detail?page=${page}&detail=${JSON.stringify(buy)}`)}>
                <Text style={styles.detailsButtonText}>Details</Text>
              </Pressable>
            </View>
          </View>
        ))}
      </View>
      : page== "Remake" ?
      <View>
        {books.map((book, idx) => (
          <View key={idx} style={styles.card}>
            <View style={styles.cardText}>
              <Text style={styles.name}>{book.tailor_name}</Text>
              <Text style={styles.category}>Alter: {book.alterCount?.toString()}</Text>
              <Text style={styles.category}>Create: {book.createCount?.toString()}</Text>
              <Text style={styles.price}>Total Rp {book.total?.toString()}</Text>
            </View>
            <View style={{justifyContent: 'flex-end'}}>
              <Text style={styles.date}>{book.created_at}</Text>
              <Pressable style={styles.detailsButton} onPress={() => router.push(`activity/detail?page=${page}&detail=${JSON.stringify(book)}`)}>
                <Text style={styles.detailsButtonText}>Details</Text>
              </Pressable>
            </View>
          </View>
        ))}
      </View>
      :
      <View>
        {sells.map((sell, idx) => (
          <View key={idx} style={styles.card}>
            <View style={styles.cardText}>
              <Text style={styles.name}>{sell.cat_name}</Text>
              <Text style={styles.category}>{sell.cat_category}</Text>
              <Text style={styles.price}>Total Rp {sell.cat_price?.toString()}</Text>
            </View>
            <View style={{justifyContent: 'flex-end'}}>
              <Text style={styles.date}>{sell.created_at}</Text>
              <Pressable style={styles.detailsButton} onPress={() => router.push(`activity/detail?page=${page}&detail=${JSON.stringify(sell)}`)}>
                <Text style={styles.detailsButtonText}>Details</Text>
              </Pressable>
            </View>
          </View>
        ))}
      </View>
      }


      
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF", // White background color
  },

  backButton: {
    marginRight: 10,
    padding: 10,
  },
  backButtonText: {
    color: "#FFFFFF", // White text color
    fontSize: 24, // Increase font size for better visibility
  },
  headerText: {
    flex: 1,
    color: "#FFFFFF", // White text color
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#D0D0A5", // Light green background color
    paddingVertical: 10,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: "#D0D0A5", // Light green background color
    color: "#6D6D4E", // Medium green text color
    fontWeight: "bold",
  },
  activeTab: {
    backgroundColor: "#616219", // Medium green background color
    color: "#FFFFFF", // White text color
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#FFFFFF", // White background color
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  cardText: {
    flex: 1,
    width: 460
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#616219", // Dark green text color
  },
  category: {
    fontSize: 16,
    color: "#616219", // Dark green text color
  },
  price: {
    fontSize: 16,
    color: "#616219", // Dark green text color
    fontWeight: "bold",
  },
  date: {
    fontSize: 14,
    color: "#616219", // Dark green text color
    flexWrap: 'wrap',
    flex: 1,
    width: 80,
  },
  detailsButton: {
    backgroundColor: "#616219", // Medium green background color
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  detailsButtonText: {
    color: "#FFFFFF", // White text color
    fontWeight: "bold",
  },
});

export default Activity;