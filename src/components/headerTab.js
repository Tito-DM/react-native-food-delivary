import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const HeaderTabs = () => {
  const [activeTab, setActiveTab] = useState("delivary");
  return (
    <View
      style={{
        flexDirection: "row",
        alignSelf: "center",
      }}
    >
      <HeaderButton
        text="delivary"
        btnColor="black"
        textColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        btnColor="white"
        textColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};



const HeaderButton = ({
  text,
  btnColor,
  textColor,
  activeTab,
  setActiveTab,
}) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: activeTab === text ? "black": "white",
          paddingVertical: 6,
          paddingHorizontal: 16,
          borderRadius: 30,
        }}
        onPress={() => {
          setActiveTab(text);
        }}
      >
        <Text
          style={{
            color: activeTab === text ? "white": "black",
            fontSize: 15,
          }}
        >
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};


export default HeaderTabs;