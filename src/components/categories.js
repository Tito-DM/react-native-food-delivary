import React from "react";
import { TouchableOpacity, Image, ScrollView, Text } from "react-native";

const items = [
  { image: require("../assets/images/shopping-bag.png"), text: "Pick-up" },
  { image: require("../assets/images/soft-drink.png"), text: "Soft drink" },
  { image: require("../assets/images/bread.png"), text: "Backery" },
  { image: require("../assets/images/fast-food.png"), text: "Fast Food" },
  { image: require("../assets/images/deals.png"), text: "Deals" },
  { image: require("../assets/images/coffee.png"), text: "coffe & Tea" },
];

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{
        marginBottom: 10,
        height: "15%",
      }}
    >
      {items.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={{
            margin: 10,
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 50,
            height: 82,
            width: 82,
            justifyContent: "center",
          }}
        >
          <Image
            source={item.image}
            style={{
              width: 25,
              height: 25,
              resizeMode: "contain",
            }}
          />
          <Text>{item.text}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Categories;
