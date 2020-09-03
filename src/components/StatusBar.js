import React from "react";
import { View, StatusBar, StyleSheet } from "react-native";

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;

const SB = ({ color }) => {
  return (
    <View style={styles.statusBar}>
      <StatusBar translucent backgroundColor={color} barStyle="light-content" />
    </View>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});

export default SB;
