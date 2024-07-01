import { View, Text } from "react-native";
import React from "react";
import ButtonComponent from "./ButtonComponent";
const CallButton = () => {
  return (
    <View>
        <ButtonComponent
      title="My Button"
      btnKind="outlined"
      variant="primary"
      size="lg"
      onPress={() => console.log("button clicked")}
    />
    <ButtonComponent
    title="Rounded Button"
    btnKind="rounded"
    variant="secondary"
    size="sm"
    onPress={() => console.log("Rounded button clicked")}
  />
   <ButtonComponent
        title="Primary Button"
        variant="primary"
        onPress={() => console.log("Primary button clicked")}
      />
      <ButtonComponent
        title="Outlined Button"
        btnKind="outlined"
        variant="secondary"
        onPress={() => console.log("Outlined button clicked")}
      />
      <ButtonComponent
        title="Custom Button"
        btnKind="rounded"
        variant="custom"
        onPress={() => console.log("Custom button clicked")}
        color="purple" // Example of using a custom color
      />
      <ButtonComponent
        title="Success Button"
        btnKind="rounded"
        variant="success"
        onPress={() => console.log("Success button clicked")}
      />
      <ButtonComponent
        title="Warning Button"
        btnKind="outlined"
        variant="warning"
        onPress={() => console.log("Warning button clicked")}
      />
      <ButtonComponent
        title="Info Button"
        btnKind="rounded"
        variant="info"
        onPress={() => console.log("Info button clicked")}
      />
      <ButtonComponent
        title="Dark Button"
        btnKind="rounded"
        variant="dark"
        onPress={() => console.log("Dark button clicked")}
      />
    </View>
  
    
  );
};

export default CallButton;
