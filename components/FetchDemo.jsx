import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function FetchDemo() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    fetch("http://192.168.39.214:9090/products/")
      .then((res) => res.json())
      .catch((err) => console.error("Error in parsing : " + err.message))
      .then((products) => {
        setProducts(products);
        console.log(products.length);
      })
      .catch((err) =>
        console.error("Error in Fetching Products Data : " + err.message)
      );
  }, []);
  return (
    <View>
      <Text>FetchDemo</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
