import React from "react";
import { Image, Text, View, ScrollView, FlatList } from "react-native";

const restaurantitens = [
  {
    id: 1,
    image: require("../assets/images/anna-pelzer-IGfIGP5ONV0-unsplash.jpg"),
  },
  {
    id: 2,
    image: require("../assets/images/eiliv-sonas-aceron-ZuIDLSz3XLg-unsplash.jpg"),
  },
  {
    id: 3,
    image: require("../assets/images/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg"),
  },
  {
    id: 3,
    image: require("../assets/images/eiliv-sonas-aceron-ZuIDLSz3XLg-unsplash.jpg"),
  },
  {
    id: 3,
    image: require("../assets/images/eiliv-sonas-aceron-ZuIDLSz3XLg-unsplash.jpg"),
  },
  {
    id: 3,
    image: require("../assets/images/bg1.jpg"),
  },
];

const RestaurantItens = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        margin: 20,
      }}
    >
      {restaurantitens.map((item, index) => (
        <View
          key={index}
          style={{
            marginBottom: 20,
            backgroundColor: "white",
            elevation: 3
          }}
        >
          <Image
            source={item.image}
            style={{
              width: 500,
              height: 200,
              resizeMode: "cover",
            }}
          />
          <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
            <View style={{
              margin:10,

            }}>
              <Text style={{
                fontWeight: "bold",
                textTransform: "uppercase"
                
              }}>Do bom Piteu</Text>
              <Text style={{
                color: "gray"
              }}>35-20-min</Text>
            </View>
            <View style={{
             
              backgroundColor: "#eee",
              borderRadius: 50,
              width: 20,
              height: 20,
             alignItems: "center",
             justifyContent: "center",
             margin: 10
              
            }}>
              <Text style={{
                color: "black"
              }}>4</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default RestaurantItens;
