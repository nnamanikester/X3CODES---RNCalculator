import PropTypes from "prop-types";
import React from "react";
import { View, StyleSheet } from "react-native";
import { inactiveColor } from "../variables";

const Divider = ({ horizontal, vertical, color }) => {
  let value = { height: 1, width: "100%" };

  if (horizontal) {
    value = { height: 1, width: "100%" };
  }
  if (vertical) {
    value = { height: "100%", width: 1, marginHorizontal: 10 };
  }

  return (
    <View
      style={{
        ...styles.container,
        ...value,
        borderColor: color || inactiveColor,
      }}
    ></View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderWidth: 1,
    height: 1,
    marginVertical: 10,
  },
});

Divider.propTypes = {
  horizontal: PropTypes.bool,
  vertical: PropTypes.bool,
};

Divider.defaultProps = {
  veritcal: false,
  horizontal: false,
};

export { Divider };
