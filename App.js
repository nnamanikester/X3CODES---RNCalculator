import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import * as UI from "./src/components/common";
import { primaryColor } from "./src/components/common/variables";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";

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
        backgroundColor={primaryColor}
        barStyle="light-content"
      />
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />

        <UI.Text>Open up App.js to start working on your app!</UI.Text>
      </View>
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
