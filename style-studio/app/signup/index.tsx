import { router } from "expo-router";
import { Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
  return <>
  <SafeAreaView>
    <Pressable onPress={() => router.push("/(tabs)/home")}><Text>Sign Up</Text></Pressable>
  </SafeAreaView>
  </>;
};

export default SignUp;