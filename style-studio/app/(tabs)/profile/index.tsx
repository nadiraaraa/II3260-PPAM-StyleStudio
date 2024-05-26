import { router } from "expo-router";
import { Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return <>
  <SafeAreaView>
    <Pressable onPress={() => router.push("/")}><Text>Profile</Text></Pressable>
  </SafeAreaView>
  </>;
};

export default Profile;