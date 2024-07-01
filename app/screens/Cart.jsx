import React, { useState, useContext } from "react";
import { View, FlatList, StyleSheet, Alert,Text } from "react-native";
import ProductItem from "../../components/ProductItem";
import { cartContext } from "../../contexts/Context";

const Cart = ({ numColumns = 1 }) => {
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    Alert.alert("Refresh Cart", "Do you want to refresh the cart?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "destructive",
      },
      {
        text: "OK",
        onPress: () => {
          setRefresh(true);
          // Optionally call a function to refresh data here
          alert("Refresh finished");
          console.log("OK pressed");
          setRefresh(false); // set refresh back to false after refreshing
        },
      },
    ]);
  };

  const { cart } = useContext(cartContext);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.products}>
        <ProductItem isCart={true} product={item} numColumns={numColumns} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {cart.cart.length === 0 ? (
        <Text style={styles.cartEmpty}>Cart is Empty</Text>
      ) : (
        <FlatList
          data={cart.cart}
          keyExtractor={(item) => item.id.toString()}
          onRefresh={handleRefresh}
          refreshing={refresh}
          numColumns={numColumns}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  products: {
    flex: 1,
    margin: 5,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  cartEmpty: {
    flex: 1,
    marginTop: 250,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
  }
});

export default Cart;
