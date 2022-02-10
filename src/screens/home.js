import React from "react";
import { SafeAreaView, View } from "react-native";
import Categories from "../components/categories";
import HeaderTabs from "../components/headerTab";
import RestaurantItens from "../components/restaurantItems";
import SearchBar from "../components/searchBar";

const Home = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#eee",
        
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          padding: 15,
        }}
      >
        <HeaderTabs />
        <SearchBar/>
      </View>
      <Categories/>
      <RestaurantItens/>
    </SafeAreaView>
  );
};

export default Home;
