import * as React from "react";
import { AppRegistry } from "react-native";
import { PaperProvider } from "react-native-paper";
import { name as appName } from "./app.json";
import App from "./src/App";
import contextInstance from "./contexts/Context";
export default function Main() {
  return (
    <PaperProvider>
      <contextInstance.Provider>
          <App />
      </contextInstance.Provider>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);

//eas build -p android --profile preview 
