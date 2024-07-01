import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import { LinearGradient } from "expo-linear-gradient";
const SignupScreen = ({ navigation }) => {
  const handleRegister = () => {
    const usernameStatus = validateUsername(username);
    const { isValid, message } = validatePassword(password);
    const emailStatus = validateEmail(email);
    const mobileStatus = validateMobile(mobile);
    if (!usernameStatus) {
      setUsername("");
      setUsernameErrorMsg("Invalid username");
      return;
    } else {
      setUsernameErrorMsg("");
    }
    if (!mobileStatus) {
      setMobileErrorMsg("Invalid mobile number");
      return;
    } else {
      setMobileErrorMsg("");
    }
    if (!emailStatus) {
      setEmailErrorMsg("Invalid email");
      return;
    } else {
      setEmailErrorMsg("");
    }
    if (!isValid) {
      setPasswordErrorMsg(message);
      return;
    } else {
      setPasswordErrorMsg("");
    }
    const user = {
      username,
      email,
      mobile,
      password,
    };
    fetch("http://192.168.29.146:9090/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        Alert.alert("Succesfully Registered !!");
        setTimeout(() => {
          navigation.navigate("Login");
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usernameerrorMsg, setUsernameErrorMsg] = useState("");
  const [mobileerrorMsg, setMobileErrorMsg] = useState("");
  const [emailerrorMsg, setEmailErrorMsg] = useState("");
  const [passworderrorMsg, setPasswordErrorMsg] = useState("");
  const handleUsername = (text) => {
    setUsername(text);
  };
  const handlePassword = (text) => {
    setPassword(text);
  };
  const handleEmail = (text) => {
    setEmail(text);
  };
  const handleMobile = (text) => {
    setMobile(text);
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
  const validateMobile = (mobile) => {
    const minLength = 10;
    const maxLength = 10;
    const regex = /^[0-9]{10}$/;
    if (mobile.length < minLength || mobile.length > maxLength) {
      return false;
    }
    return regex.test(mobile);
  };
  const validateEmail = (email) => {
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(email);
  };
  const validatePassword = (password) => {
    const minLength = 8;
    const maxLength = 20;
    const regex =
      /^(?=.*[a-zA-Z0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
    if (password.length < minLength || password.length > maxLength) {
      return {
        isValid: false,
        message: "Password must be at least " + minLength + " characters long",
      };
    }
    return {
      isValid: regex.test(password),
      message:
        "Password have atleast one upper case letter and atleast one special character",
    };
  };
  return (
    <SafeAreaView
      behavior={Platform.OS === "android" ? "height" : "padding"}
      style={styles.container}
    >
      <View style={styles.topImageContainer}>
        <Image
          source={require("../../assets/topVector.png")}
          style={styles.topImage}
        />
      </View>
      <View>
        <Text style={styles.createAccountText}>Create Account</Text>
      </View>
      <View style={styles.inputContainer}>
        <FontAwesome
          name="user"
          size={24}
          color="#9A9A9A"
          style={styles.inputIcon}
        />
        <TextInput
          value={username}
          onChangeText={handleUsername}
          style={styles.textInput}
          placeholder="Username"
        />
      </View>
      {usernameerrorMsg && (
        <Text style={{ color: "red", marginLeft: 120 }}>
          {usernameerrorMsg}
        </Text>
      )}
      <View style={styles.inputContainer}>
        <AntDesign
          name="mobile1"
          size={24}
          color="#9A9A9A"
          style={styles.inputIcon}
        />
        <TextInput
          value={mobile}
          onChangeText={handleMobile}
          keyboardType="numeric"
          style={styles.textInput}
          placeholder="Mobile"
        />
      </View>
      {mobileerrorMsg && (
        <Text style={{ color: "red", marginLeft: 120 }}>{mobileerrorMsg}</Text>
      )}
      <View style={styles.inputContainer}>
        <AntDesign
          name="mail"
          size={24}
          color="#9A9A9A"
          style={styles.inputIcon}
        />
        <TextInput
          onChangeText={handleEmail}
          value={email}
          style={styles.textInput}
          placeholder="Email"
        />
      </View>
      {emailerrorMsg && (
        <Text style={{ color: "red", marginLeft: 120 }}>{emailerrorMsg}</Text>
      )}
      <View style={styles.inputContainer}>
        <Fontisto
          name="locked"
          size={24}
          color="#9A9A9A"
          style={styles.inputIcon}
        />
        <TextInput
          value={password}
          onChangeText={handlePassword}
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>
      {passworderrorMsg && (
        <Text style={{ color: "red", marginLeft: 50 }}>{passworderrorMsg}</Text>
      )}
      <View style={styles.signUpButtonContainer}>
        <Text style={styles.signUp}>Register</Text>
        <LinearGradient
          // Button Linear Gradient
          colors={["#F97794", "#623AA2"]}
          style={styles.linearGradient}
        >
          <AntDesign
            name="arrowright"
            size={24}
            color="white"
            onPress={handleRegister}
          />
        </LinearGradient>
      </View>
      <View style={styles.footerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.footerText}>Or create using social media</Text>
          <View style={styles.socialMediaContainer}>
            <Entypo
              name={"facebook-with-circle"}
              size={30}
              color={"blue"}
              style={styles.socialIcon}
            />
            <Entypo
              name={"twitter-with-circle"}
              size={30}
              color={"blue"}
              style={styles.socialIcon}
            />
            <AntDesign
              name={"google"}
              size={30}
              color={"blue"}
              style={styles.socialIcon}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.leftVectorContainer}>
        <ImageBackground
          style={styles.leftVectorImage}
          source={require("../../assets/vector2.png")}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    flex: 1,
    position: "relative",
  },
  topImageContainer: {},
  topImage: {
    width: "100%",
    height: 130,
  },
  helloContainer: {},
  helloText: {
    textAlign: "center",
    fontSize: 70,
    fontWeight: "500",
    color: "#262626",
  },
  createAccountText: {
    textAlign: "center",
    fontSize: 30,
    color: "#262626",
    marginBottom: 10,
    fontWeight: "bold",
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
  signUpButtonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 10,
    width: "90%",
  },
  signUp: {
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
    textAlign: "center",
    margin: 10,
    color: "#ffffff",
    backgroundColor: "transparent",
  },
  footerText: {
    color: "#262626",
    textAlign: "center",
    fontSize: 16,
  },
  leftVectorContainer: {
    position: "absolute",
    top: 490,
    left: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
  },
  leftVectorImage: {
    height: 380,
    width: 210,
  },
  footerContainer: {
    marginTop: 15,
  },
  socialIcon: {
    backgroundColor: "white",
    elevation: 10,
    margin: 10,
    padding: 10,
    borderRadius: 50,
  },
  socialMediaContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
});
