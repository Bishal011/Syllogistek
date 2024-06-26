import { Alert } from "react-native";

export const CART_ACTIONS = Object.freeze({
  REMOVE_FROM_CART: 0,
  ADD_TO_CART: 1,
  REMOVE_ALL: 2,
});

export const cartReducer = (state, action) => {
  switch (action.type) {
    case CART_ACTIONS.ADD_TO_CART: {
      const productToAdd = action.payload; // corrected naming from payLoad to payload
      let { cart } = state;
      if (cart && Array.isArray(cart)) {
        const foundIndex = cart.findIndex(
          (item) => item.id === productToAdd.id
        );
        if (foundIndex === -1) {
          cart.push(productToAdd);
        } else {
          cart[foundIndex].quantity += 1;
        }
      } else {
        cart = [productToAdd];
      }
      return { ...state, cart };
    }
    case CART_ACTIONS.REMOVE_FROM_CART: {
      const id = action.payload; // corrected naming from payLoad to payload
      let { cart } = state;
      if (cart && Array.isArray(cart)) {
        cart = cart.filter((item) => item.id !== id);
      }
      return { ...state, cart };
    }
    case CART_ACTIONS.REMOVE_ALL: {
      return { ...state, cart: [] };
    }
    default:
      Alert.alert("Invalid action");
      return state;
  }
};
