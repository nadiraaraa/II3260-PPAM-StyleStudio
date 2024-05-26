import { router } from "expo-router";
import { Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return <>
  <SafeAreaView>
    <Pressable onPress={() => router.push("/")}><Text>Home</Text></Pressable>
  </SafeAreaView>
  </>;
};

export default Home;