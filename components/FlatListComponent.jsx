import { StyleSheet, SafeAreaView, FlatList, View, Text, Alert } from "react-native";
import React, { useState } from "react";
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "BMW",
    price: 150000,
  },
  {
    id: "3ac68agc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Ferrari",
    price: 250000,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Bugati",
    price: 350000,
  },
  {
    id: "bd7acyea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Audi",
    price: 550000,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Lamborghini",
    price: 450000,
  },
];

const Item = ({ title, price }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.price}>{price}</Text>
  </View>
);
export default function FlatListComponent() {
  const [refresh, setRefresh] = useState(false);
  const handleRefresh = () => {
    Alert.alert("Refresh Confirmation", "Do you want to refresh ? ", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "destructive",
      },
      {
        text: "OK",
        onPress: () => {
          setRefresh(true);
          setTimeout(() => {
            setRefresh(false);
          }, 2000);
          alert("Refresh finished");
          console.log("OK pressed");
        },
      },
    ]);
  };
  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item title={item.title} price={item.price} />
        )}
        keyExtractor={(item) => item.id}
        onRefresh={handleRefresh}
        refreshing={refresh}
        extraData={refresh}
        horizontal={false}
        inverted={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  price: {
    fontSize: 26,
  },
});
