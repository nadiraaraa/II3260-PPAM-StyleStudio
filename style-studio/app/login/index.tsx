import { router } from "expo-router";
import { Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  return <>
  <SafeAreaView>
    <Pressable onPress={() => router.push("/(tabs)/home")}><Text>Log In</Text></Pressable>
  </SafeAreaView>
  </>;
};

export default Login;