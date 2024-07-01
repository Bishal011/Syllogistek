import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Settings from "./Settings";
import UserProfile from "./UserProfile";
import Cart from "./Cart";
import Welcome2 from "./Welcome2";
import { UserContextProvider, CartProvider } from "../../contexts/Context";
import ButtonComponent from "../../components/ButtonComponent";
const Stack = createNativeStackNavigator();
const Root = () => {
  return (
    <UserContextProvider>
      <CartProvider>
        <NavigationContainer independent={true}>
          <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen
              name="Main"
              component={Welcome2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Signup"
              component={SignupScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="User"
              component={UserProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Cart"
              component={Cart}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Buttons"
              component={ButtonComponent}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </CartProvider>
    </UserContextProvider>
  );
};

export default Root;
