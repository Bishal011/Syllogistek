import { StyleSheet, Text, View, Alert, FlatList } from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";
export default function Products() {
  const [products, setProducts] = useState([]);
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
  const getData = async () => {
    const response = await axios.get("http://192.168.29.146:9090/products");
    setProducts(response.data.products);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <FlatList
      data={products}
      renderItem={() => (
        <View style={styles.products}>
          {products &&
            products.map((product) => {
              return <ProductItem key={product.id} product={product} />;
            })}
        </View>
      )}
      keyExtractor={(product) => product.id}
      onRefresh={handleRefresh}
      refreshing={refresh}
      extraData={refresh}
      // horizontal={false}
      // inverted={false}
    />
  );
}

const styles = StyleSheet.create({
  products: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
