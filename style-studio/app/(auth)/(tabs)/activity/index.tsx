import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, Pressable, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";

interface ActivityProps {
  name: string;
  category: string;
  price: string;
  orderDate: string; // Changed to string to simplify date handling
}

const Activity = () => {
  const [page, setPage] = useState("Thrift");
  const [loading, setLoading] = useState(true);
  const [activities, setActivities] = useState<ActivityProps[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Example data for now
    const exampleData = [
      {
        name: "Hanji Dress",
        category: "Women’s Clothing",
        price: "200.000",
        orderDate: "10/4/2024",
      },
      {
        name: "Uniqlo T-Shirt",
        category: "Men’s Clothing",
        price: "100.000",
        orderDate: "12/3/2024",
      },
      {
        name: "Zara Jacket",
        category: "Women’s Clothing",
        price: "150.000",
        orderDate: "11/2/2024",
      },
    ];
    setActivities(exampleData);
    setLoading(false);
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
        <Pressable onPress={() => setPage("Sell")}>
          <Text style={[styles.tab, page === "Sell" && styles.activeTab]}>Sell</Text>
        </Pressable>
      </View>
      
      <ScrollView>
      {activities.map((act, idx) => (
          <View key={idx} style={styles.card}>
            <View style={styles.cardText}>
              <Text style={styles.name}>{act.name}</Text>
              <Text style={styles.category}>{act.category}</Text>
              <Text style={styles.price}>Total Rp {act.price}</Text>
            </View>
            <View style={{justifyContent: 'flex-end'}}>
              <Text style={styles.date}>{act.orderDate}</Text>
              <Pressable style={styles.detailsButton} onPress={() => router.push(`activity/detail?type=${page}`)}>
                <Text style={styles.detailsButtonText}>Details</Text>
              </Pressable>
            </View>
          </View>
        ))}
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