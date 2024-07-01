import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { TextInput, Button } from "react-native-paper";
import React, { Fragment, useState, useContext } from "react";
import contextInstance from "../contexts/Context";

export default function Practice() {
  const data = useContext(contextInstance);
  const [user, setUser] = useState(data);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const handleShowPassword = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const handlePress = () => {
    if (
      name === "Aniket" &&
      email === "aniketpatra96@gmail.com" &&
      password === "Aniket123"
    ) {
      setUser({ name, email, password, isLoggedIn: true });
    } else {
      setUser({ ...user, isLoggedIn: false });
    }
  };
  return (
    <Fragment>
      
      <View style={styles.mainContainer}>
        <View style={{ marginBottom: 50 }}>
          <Image style={styles.icon} source={require("../assets/icon.png")} />
        </View>
        <View style={{ marginBottom: 100 }}>
          <TextInput
            label="Name"
            onChangeText={(name) => setName(name)}
            style={styles.input}
            right={<TextInput.Icon icon="account" />}
            value={name}
          />
          <TextInput
            label="Email"
            onChangeText={(email) => setEmail(email)}
            style={styles.input}
            right={<TextInput.Icon icon="email" />}
            value={email}
          />
          <TextInput
            value={password}
            label="Password"
            secureTextEntry={secureTextEntry}
            style={styles.input}
            onChangeText={(password) => setPassword(password)}
            right={
              <TextInput.Icon
                icon={secureTextEntry ? "eye" : "eye-off"}
                onPress={handleShowPassword}
              />
            }
          />
          <Button
            onPress={handlePress}
            style={{ marginTop: 40, marginLeft: 70, width: 200 }}
            mode="contained"
          >
            Submit
          </Button>
        </View>
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginTop: 100,
  },
  icon: {
    width: 100,
    height: 100,
  },
  input: {
    width: Dimensions.get("window").width - 60,
    marginVertical: 10,
    backgroundColor: "#fff",
  },
});
