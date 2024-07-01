import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { cartContext, clickContext } from "../contexts/Context";
import { CART_ACTIONS } from "../reducers/CartReducer";
export default function ProductItem({ product, numColumns, isCart = false }) {
  const {
    id,
    title,
    description,
    price,
    category,
    rating,
    stock,
    brand,
    sku,
    warrantyInformation,
    shippingInformation,
    availabilityStatus,
    returnPolicy,
    minimumOrderQuantity,
    images, // image array
    image,
  } = product;

  const styles = StyleSheet.create({
    productItem: {
      width:
        numColumns === 2
          ? Dimensions.get("window").width / 2 - 26
          : Dimensions.get("window").width - 40,
      height: numColumns === 2 ? 400 : 450,
      backgroundColor: "#b6b6b6",
      margin: 10,
      padding: 10,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
    },
    imageContainer: {
      display: "flex",
      paddingTop: 15,
    },
    img: {
      width: numColumns === 2 ? 90 : 250,
      height: numColumns === 2 ? 100 : 200,
    },
    title: {
      marginTop: 80,
    },
  });
  const { dispatch } = React.useContext(cartContext);
  const handleCart = () => {
    if(isCart){
      dispatch({
        type: CART_ACTIONS.REMOVE_FROM_CART,
        payload: product.id,
      });
    }else{
      dispatch({
        type: CART_ACTIONS.ADD_TO_CART,
        payload: product,
      });
    }
  };
  return (
    <View style={styles.productItem}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="contain"
          style={styles.img}
          source={{ uri: image }}
        />
      </View>
      <Text>{category}</Text>
      <Text>${price}</Text>
      <View>
        <Button mode="contained" onPress={handleCart}>
          {isCart ? "Remove from Cart" : "Add To Cart"}
        </Button>
      </View>
    </View>
  );
}
