import React, { useReducer, useEffect } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { CART_ACTIONS, cartReducer } from "../reducers/CartReducer";

const CartDemo = () => {
  const [state, dispatch] = useReducer(cartReducer, []);

  const addToCart = () => {
    console.log("addToCart called.");
    dispatch({
      type: CART_ACTIONS.ADD_TO_CART,
      payLoad: {
        productId: new Date().getTime(),
        title: "watch"
      }
    });
  };

  const removeFromCart = (productId) => {
    dispatch({
      type: CART_ACTIONS.REMOVE_FROM_CART,
      payLoad: productId
    });
  };
  
  const cartAction = (productId) => {
    dispatch({
      type: 9,
      payLoad: productId
    });
  };

  return (
    <View style={styles.container}>
      {state?.cart?.map((item) => (
        <View key={item.productId}>
          <Text style={styles.text}> {item?.title}</Text>
          <Button
            title="Remove To Cart"
            onPress={() => removeFromCart(item.productId)}
          />
           <Button
            title="Random Cart Action"
            onPress={() => cartAction(item.productId)}
          />
        </View>
      ))}
      <View style={styles.btnContainer}>
        <Button title="Add To Cart" onPress={addToCart} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: 300,
    backgroundColor: "#EAF0F1"
  },
  btnContainer: {
    marginVertical: 30,
    backgroundColor: "#758AA2"

  },
  text: {
    // fontSize: 14,
    paddingVertical: 10,
    marginTop: 5,
    textAlign: "center",
    color: "white",
    backgroundColor: "#1287A5"
  }
});

export default CartDemo;
