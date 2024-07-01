import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ImageBackground,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";
export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../images/shopping.jpg")}
        resizeMode="cover"
        style={styles.background}
      >
        <Image
          style={styles.logo}
          source={require("../../images/hustlr.png")}
        />
        <View style={styles.homeText}>
          <Text style={styles.title}>Hustlr</Text>
          <Text style={styles.subTitle}>Find the best clothes for you</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.login]}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.loginText}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.register]}
            onPress={() => navigation.navigate("Signup")}
          >
            <Text style={styles.loginText}>Register</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  background: {
    flex: 1,
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    alignSelf: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 100,
  },
  button: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 5,
  },
  login: {
    backgroundColor: "aqua",
  },
  register: {
    backgroundColor: "blue",
  },
  loginText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    alignSelf: "center",
    marginTop: 10,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    alignSelf: "center",
    marginTop: 10,
  },
  homeText: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 5,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
    maxWidth: "80%",
    textAlign: "center",
  },
});
