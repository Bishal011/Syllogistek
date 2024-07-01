import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { userContext } from "../../contexts/Context";

const ProfileScreen = ({ navigation }) => {
  const { user,setUser } = useContext(userContext);
  const [name, setName] = useState(user?.username);
  const [email, setEmail] = useState(user?.email);
  const [phone, setPhone] = useState(user?.mobile);
  const [address, setaddress] = useState(user?.address);
  const [isEditing, setIsEditing] = useState(false);
  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = () => {
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("address:", address);
    setIsEditing(false);
  };
  const handleBack = () => {
    setIsEditing(false);
  };

  const handleLogout = () => {
    setUser(null);
    navigation.navigate("Login");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {isEditing ? (
        <View style={styles.editProfileSection}>
          <Text style={styles.editProfileTitle}>Edit Profile</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Name</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={(text) => setName(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={(text) => setEmail(text)}
              keyboardType="email-address"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Phone</Text>
            <TextInput
              style={styles.input}
              value={phone}
              onChangeText={(text) => setPhone(text)}
              keyboardType="phone-pad"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Address</Text>
            <TextInput
              style={styles.input}
              value={address}
              onChangeText={(text) => setaddress(text)}
            />
          </View>
          <TouchableOpacity
            style={styles.saveButton}
            onPress={handleSaveProfile}
          >
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveButton} onPress={handleBack}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.profileSection}>
          <Text style={styles.profileTitle}>Profile</Text>
          <Image
            style={styles.profileImage}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcg4Y51XjQ-zSf87X4nUPTQzsF83eFdZswTg&usqp=CAU",
            }} // Replace with actual image URI
          />
          <Text style={styles.profileName}>{name}</Text>
          <TouchableOpacity
            style={styles.editProfileButton}
            onPress={handleEditProfile}
          >
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
          <View style={styles.settingsSection}>
            <Text style={styles.settingsTitle}>Settings</Text>
            <TouchableOpacity style={styles.settingsItem}>
              <Text style={styles.settingsText}>My Orders</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingsItem}>
              <Text style={styles.settingsText}>Address</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingsItem}>
              <Text style={styles.settingsText}>Change Password</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingsItem}>
              <Text style={styles.settingsText}>Help & Support</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleLogout}
              style={styles.settingsItem}
            >
              <Text style={styles.settingsText}>Log out</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#ccc",
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  editProfileButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  editProfileSection: {
    marginTop: 20,
  },
  editProfileTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  settingsSection: {
    width: "100%",
  },
  settingsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  settingsItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    marginBottom: 5,
  },
  settingsText: {
    fontSize: 16,
    color: "#333",
  },
  inputContainer: {
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
  },
  saveButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignSelf: "center",
    width: "50%",
  },
});

export default ProfileScreen;
