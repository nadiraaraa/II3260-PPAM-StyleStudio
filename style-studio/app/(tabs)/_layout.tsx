import { Tabs } from "expo-router";

const Layout = () => {
  return <Tabs>
    <Tabs.Screen 
        name="index" 
        options={{
            headerTitle: "Home",
            headerStyle: {
                backgroundColor: "#616219"
            },
        }}
    />
    <Tabs.Screen 
        name="activity/index" 
        options={{
            headerTitle: "Activity",
            headerStyle: {
                backgroundColor: "#616219"
            },
        }}
    />
    <Tabs.Screen 
        name="profile/index" 
        options={{
            headerTitle: "Profile",
            headerStyle: {
                backgroundColor: "#616219"
            },
        }}
    />
  </Tabs>
  ;
};

export default Layout;