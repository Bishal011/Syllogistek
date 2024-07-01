import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AntDesign from "react-native-vector-icons/AntDesign";
import Dashboard from "./Dashboard";
import Home from "./Home";

const Drawer = createDrawerNavigator();

const screenOptions = {
  drawerStyle: {
    backgroundColor: "#c6cbef",
    width: 260,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  drawerItemStyle: {
    backgroundColor: "gold",
  },
  drawerContentStyle: {
    backgroundColor: "tomato",
  },
};

const Welcome3 = () => {
  return (
    <Drawer.Navigator screenOptions={screenOptions}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerLabel: "Home",
          drawerLabelStyle: { fontWeight: "bold", fontSize: 15 },
          drawerIcon: () => (
            <AntDesign name="home" size={25} style={{ color: "black" }} />
          ),
          drawerActiveTintColor: "blue",
          drawerInactiveTintColor: "gray",
          drawerActiveBackgroundColor: "white",
          drawerInactiveBackgroundColor: "white",
        }}
      />
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          drawerLabel: "Dashboard",
          drawerLabelStyle: { fontWeight: "bold", fontSize: 15 },
          drawerIcon: () => (
            <AntDesign name="dashboard" size={25} style={{ color: "black" }} />
          ),
          drawerActiveTintColor: "blue",
          drawerInactiveTintColor: "gray",
          drawerActiveBackgroundColor: "white",
          drawerInactiveBackgroundColor: "white",
        }}
      />
    </Drawer.Navigator>
  );
};

export default Welcome3;
