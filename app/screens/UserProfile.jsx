import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileScreen from "./ProfileScreen";
import AccountScreen from "./AccountScreen";
export default function UserProfile({ navigation }) {
  return <ProfileScreen navigation={navigation} />;
}

const styles = StyleSheet.create({});
