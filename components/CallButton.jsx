import { View, Text } from "react-native";
import React from "react";
import ButtonComponent from "./ButtonComponent";
const CallButton = () => {
  return (
    <ButtonComponent
      title="My Button"
      btnKind="outlined"
      variant="primary"
      size="lg"
      onPress={() => console.log("button clicked")}
    />
  );
};

export default CallButton;
