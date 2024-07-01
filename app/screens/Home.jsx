import React from "react";
import { StyleSheet, View, Text, Button, Switch, Alert } from "react-native";
import ProductList from "../../components/ProductList";
import { clickContext } from "../../contexts/Context";

const Home = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const [numColumns, setNumColumns] = React.useState(1);
  const toggleSwitch = () => {
    setNumColumns(numColumns === 1 ? 2 : numColumns === 2 ? 1 : 2);
    setIsEnabled((previousState) => !previousState);
  };
  navigation.addListener("beforeRemove", (e) => {
    if(!(e?.data?.action?.source?.split("-")[0] === 'Account')){
      e.preventDefault();
    }
  });
  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <ProductList numColumns={numColumns} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 25,
  },
});

export default Home;
