import { router } from "expo-router";
import { Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Welcome = () => {
  return <>
    <SafeAreaView>
        <Pressable onPress={() => router.push("/login")}><Text>Log In</Text></Pressable>
        <Pressable onPress={() => router.push("/signup")}><Text>Sign Up</Text></Pressable>
    </SafeAreaView>
  </>;
};

export default Welcome;