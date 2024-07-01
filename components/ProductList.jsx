// import React, { useState, useEffect, useCallback } from "react";
// import { View, FlatList, StyleSheet, Text, Alert } from "react-native";
// import axios from "axios";
// import ProductItem from "./ProductItem";

// const ProductList = ({ numColumns }) => {
//   const [products, setProducts] = useState([]);
//   const [refresh, setRefresh] = useState(false);
//   const handleRefresh = () => {
//     Alert.alert("Refresh Confirmation", "Do you want to refresh ? ", [
//       {
//         text: "Cancel",
//         onPress: () => console.log("Cancel Pressed"),
//         style: "destructive",
//       },
//       {
//         text: "OK",
//         onPress: () => {
//           setRefresh(true);
//           // getData();
//           // alert("Refresh finished");
//           console.log("OK pressed");
//         },
//       },
//     ]);
//   };
//   const getData = async () => {
//     try {
//       const response = await axios.get("http://192.168.29.146:9090/products");
//       setProducts(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     getData();
//   }, []);
//   const renderItem = (product) => {
//     const { item } = product;
//     return (
//       <View style={styles.products}>
//         <ProductItem key={item.id} product={item} numColumns={numColumns} />
//       </View>
//     );
//   };
//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={products}
//         key={numColumns} // Important to reset the layout manager
//         keyExtractor={(product) => product.id}
//         onRefresh={handleRefresh}
//         refreshing={refresh}
//         extraData={refresh}
//         numColumns={numColumns}
//         renderItem={renderItem}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     margin: 10,
//   },
//   productContainer: {
//     flex: 1,
//     margin: 5,
//     padding: 10,
//     backgroundColor: "#f9c2ff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   productName: {
//     fontSize: 16,
//   },
// });

// export default ProductList;






import React, { useState, useEffect, useCallback } from "react";
import { View, FlatList, StyleSheet, Text, Alert, Button } from "react-native";
import axios from "axios";
import ProductItem from "./ProductItem";

const ITEMS_PER_PAGE = 3;

const ProductList = ({ numColumns }) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    Alert.alert("Refresh Confirmation", "Do you want to refresh?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "destructive",
      },
      {
        text: "OK",
        onPress: () => {
          setRefresh(true);
          getData();
          setRefresh(false);
        },
      },
    ]);
  };

  const getData = async () => {
    try {
      const response = await axios.get("http://192.168.29.146:9090/products");
      setProducts(response.data);
      setTotalPages(Math.ceil(response.data.length / ITEMS_PER_PAGE));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.products}>
      <ProductItem key={item.id} product={item} numColumns={numColumns} />
    </View>
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentProducts = products.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={currentProducts}
        key={numColumns} // Important to reset the layout manager
        keyExtractor={(product) => product.id}
        onRefresh={handleRefresh}
        refreshing={refresh}
        extraData={refresh}
        numColumns={numColumns}
        renderItem={renderItem}
      />
      <View style={styles.pagination}>
        <Button title="Previous" onPress={handlePrevPage} disabled={currentPage === 1} />
        <Text style={styles.pageInfo}>{`Page ${currentPage} of ${totalPages}`}</Text>
        <Button title="Next" onPress={handleNextPage} disabled={currentPage === totalPages} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  productContainer: {
    flex: 1,
    margin: 5,
    padding: 10,
    backgroundColor: "#f9c2ff",
    alignItems: "center",
    justifyContent: "center",
  },
  productName: {
    fontSize: 16,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  pageInfo: {
    marginHorizontal: 20,
  },
});

export default ProductList;
