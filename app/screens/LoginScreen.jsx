import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  View,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useContext, useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";
import AntDesign from "react-native-vector-icons/AntDesign";
import { LinearGradient } from "expo-linear-gradient";
import { userContext } from "../../contexts/Context";
const LoginScreen = ({ navigation }) => {
  const { setUser } = useContext(userContext);
  const handleLogIn = () => {
    const status = validateUsername(username);
    if (status) {
      setErrorMsg("");
      setUsername("");
      setPassword("");
    } else {
      setErrorMsg("Invalid username");
      return;
    }
    fetch("http://192.168.29.146:9090/users", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        const getUser = data.filter((user) => user.username === username && user.password === password);
        if (getUser.length > 0) {
          const user = Array.isArray(getUser) ? getUser[0] : null;
          setUser(user);
          Alert.alert("Logged In Successgully!!");
          setTimeout(() => navigation.navigate("Main"),1000);
        }else{
          Alert.alert("Invalid username or password! Please try again!!");
          return;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const handleUsername = (text) => {
    setUsername(text);
  };
  const handlePassword = (text) => {
    setPassword(text);
  };
  const validateUsername = (username) => {
    const minLength = 3;
    const maxLength = 20;
    const regex = /^[a-zA-Z0-9][a-zA-Z0-9._]{1,18}[a-zA-Z0-9]$/;
    if (username.length < minLength || username.length > maxLength) {
      return false;
    }
    return regex.test(username);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topImageContainer}>
        <Image
          source={require("../../assets/topVector.png")}
          style={styles.topImage}
        />
      </View>
      <View style={styles.helloContainer}>
        <Text style={styles.helloText}>Hello</Text>
      </View>
      <View>
        <Text style={styles.signInText}>Sign in to your account</Text>
      </View>
      <View style={styles.inputContainer}>
        <FontAwesome
          name="user"
          size={24}
          color="#9A9A9A"
          style={styles.inputIcon}
        />
        <TextInput
          onChangeText={handleUsername}
          value={username}
          style={styles.textInput}
          placeholder="Username"
        />
        {errorMsg && <Text style={{ color: "red" }}>{errorMsg}</Text>}
      </View>
      <View style={styles.inputContainer}>
        <Fontisto
          name="locked"
          size={24}
          color="#9A9A9A"
          style={styles.inputIcon}
        />
        <TextInput
          onChangeText={handlePassword}
          value={password}
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>
      <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
      <View style={styles.signInButtonContainer}>
        <Text style={styles.signIn}>Sign In</Text>
        <LinearGradient
          // Button Linear Gradient
          colors={["#F97794", "#623AA2"]}
          style={styles.linearGradient}
        >
          <AntDesign
            name="arrowright"
            size={24}
            color="white"
            onPress={handleLogIn}
          />
        </LinearGradient>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text style={styles.footerText}>
          Don't have an account ?{" "}
          <Text style={{ textDecorationLine: "underline" }}>Create</Text>
        </Text>
      </TouchableOpacity>
      <View style={styles.leftVectorContainer}>
        <ImageBackground
          style={styles.leftVectorImage}
          source={require("../../assets/vector2.png")}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    flex: 1,
    position: "relative",
    // marginTop: StatusBar.currentHeight,
  },
  topImageContainer: {},
  topImage: {
    width: "100%",
    height: 150,
  },
  helloContainer: {},
  helloText: {
    textAlign: "center",
    fontSize: 70,
    fontWeight: "500",
    color: "#262626",
  },
  signInText: {
    textAlign: "center",
    fontSize: 18,
    color: "#262626",
    marginBottom: 30,
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 14,
    elevation: 10,
    marginVertical: 20,
    alignItems: "center",
    height: 50,
  },
  inputIcon: {
    marginLeft: 15,
    marginRight: 5,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: "#262626",
  },
  forgotPasswordText: {
    textAlign: "right",
    color: "#BEBEBE",
    width: "90%",
    fontSize: 15,
    marginTop: 10,
    marginBottom: 40,
  },
  signInButtonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 20,
    width: "90%",
  },
  signIn: {
    color: "#262626",
    fontSize: 25,
    fontWeight: "bold",
  },
  linearGradient: {
    height: 34,
    width: 56,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "Gill Sans",
    textAlign: "center",
    margin: 10,
    color: "#ffffff",
    backgroundColor: "transparent",
  },
  footerText: {
    color: "#262626",
    textAlign: "center",
    fontSize: 16,
    marginTop: 50,
  },
  leftVectorContainer: {
    position: "absolute",
    top: 450,
    left: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
  },
  leftVectorImage: {
    height: 400,
    width: 250,
  },
});
