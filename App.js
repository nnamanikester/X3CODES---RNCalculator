import React from "react";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";
import MainApp from "./src/App";
import StatusBar from "./src/components/StatusBar";
import { primaryColorLight } from "./src/components/common/variables";

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
      {/* <StatusBar color={primaryColorLight} /> */}
      <MainApp />
    </>
  );
}
