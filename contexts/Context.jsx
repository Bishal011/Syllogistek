import { useState, createContext, useReducer } from "react";
import useCart from "../hooks/useCart";
import { cartReducer } from "../reducers/CartReducer";

export const userContext = createContext({
  name: "",
  mobile: null,
  email: "",
  password: "",
  isLoggedIn: false,
});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState({
    name: "",
    mobile: null,
    email: "",
    password: "",
    isLoggedIn: false,
    setIsLoggedIn: () => {},
  });
  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
}

export const initialCartState = [];
export const cartContext = createContext({
  cart: initialCartState,
  setCart: () => {},
});
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, { cart: initialCartState });
  return (
    <cartContext.Provider value={{ cart, dispatch }}>
      {children}
    </cartContext.Provider>
  );
};

export const initialUserState = {
  name: "",
  setName: () => {},
  age: 20,
  email: "",
  setEmail: () => {},
  password: "",
  setPassword: () => {},
  isLoggedIn: false,
  setIsLoggedIn: () => {},
};

export const ShoppingContext = createContext({
  cart: initialCartState,
  products: [],
  authUser: initialUserState,
});

export const ShoppingProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialCartState);
  const [products, setProducts] = useState([]);
  const [authUser, setAuthUser] = useState(initialUserState);
  return (
    <ShoppingContext.Provider value={{ cart, products, authUser }}>
      {children}
    </ShoppingContext.Provider>
  );
};
