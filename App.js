import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import * as UI from "./src/components/common";
import { primaryColorLight } from "./src/components/common/variables";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";
import MainApp from "./src/App";

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;

export default function App() {
  const [loaded] = useFonts({
    gilory: require("./assets/fonts/gilory.otf"),
    magneto: require("./assets/fonts/magneto.otf"),
  });

  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar
        translucent
        backgroundColor={primaryColorLight}
        barStyle="light-content"
      />
      <MainApp />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
