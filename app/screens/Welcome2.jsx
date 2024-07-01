import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from "react-native-vector-icons/AntDesign";
import Dashboard from "./Dashboard";
import Home from "./Home";
import UserProfile from "./UserProfile";
import Settings from "./Settings";
import { View } from "react-native";
import {
  cartContext,
  CartProvider,
  clickContext,
  ClickProvider,
} from "../../contexts/Context";
import Cart from "./Cart";
import { Badge } from "react-native-paper";
import HomeScreen from "./HomeScreen";
import ButtonComponent from "../../components/ButtonComponent";
import CallButton from "../../components/CallButton";

const Tab = createBottomTabNavigator();

const CartIconWithBadge = () => {
  const { cart } = useContext(cartContext);
  return (
    <View>
      <AntDesign name="shoppingcart" size={25} style={{ color: "black" }} />
      {cart.cart.length > 0 && (
        <Badge
          size={18}
          style={{
            position: "absolute",
            top: -4,
            right: -10,
            backgroundColor: "red",
            color: "white",
          }}
        >
          {cart.cart.length}
        </Badge>
      )}
    </View>
  );
};

const Welcome2 = () => {
  const screenOptions = {
    tabBarStyle: {
      height: 80,
      paddingTop: 10,
      paddingBottom: 10,
    },
    tabBarItemStyle: {
      marginBottom: 5,
    },
  };
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          headerShown: true,
          tabBarLabelStyle: { fontWeight: "bold", fontSize: 15 },
          tabBarIcon: () => (
            <View>
              <AntDesign name="home" size={25} style={{ color: "black" }} />
            </View>
          ),
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
          tabBarActiveBackgroundColor: "white",
          tabBarInactiveBackgroundColor: "white",
        }}
      />
      <Tab.Screen
        name="Buttons"
        component={CallButton}
      />
      {/* <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: "Dashboard",
          tabBarLabelStyle: { fontWeight: "bold", fontSize: 15 },
          tabBarIcon: () => (
            <AntDesign name="dashboard" size={25} style={{ color: "black" }} />
          ),
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
          tabBarActiveBackgroundColor: "white",
          tabBarInactiveBackgroundColor: "white",
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: "Settings",
          tabBarLabelStyle: { fontWeight: "bold", fontSize: 15 },
          tabBarIcon: () => (
            <AntDesign name="setting" size={25} style={{ color: "black" }} />
          ),
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
          tabBarActiveBackgroundColor: "white",
          tabBarInactiveBackgroundColor: "white",
        }}
      /> */}
      <Tab.Screen
        name="Account"
        component={UserProfile}
        options={{
          tabBarLabel: "User",
          tabBarLabelStyle: { fontWeight: "bold", fontSize: 15 },
          tabBarIcon: () => (
            <View>
              <AntDesign name="user" size={25} style={{ color: "black" }} />
            </View>
          ),
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
          tabBarActiveBackgroundColor: "white",
          tabBarInactiveBackgroundColor: "white",
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: "Cart",
          tabBarLabelStyle: { fontWeight: "bold", fontSize: 15 },
          tabBarIcon: () => <CartIconWithBadge />,
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
          tabBarActiveBackgroundColor: "white",
          tabBarInactiveBackgroundColor: "white",
        }}
      />
    </Tab.Navigator>
  );
};

export default Welcome2;
