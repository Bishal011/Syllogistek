import React, { useEffect, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { UserContext } from "../../globalState/userContext";

export default function UserProfile() {
  const { user } = useContext(UserContext);

  useEffect(() => {
    console.log("====================================");
    console.log("Updated UserProfile", user);
    console.log("====================================");
  }, [user]);

  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text style={{ color: "white", paddingHorizontal: 10 }}>
        <Text>Hello, </Text> {user?.isLoggedIn ? user?.email : "Guest"}!!
      </Text>
      {user?.isLoggedIn && (
        <View style={{ color: "white", paddingHorizontal: 10 }}>
          <Text style={{ color: "white" }}>Logout</Text>
        </View>
      )}
        
    </View>
  );
}
