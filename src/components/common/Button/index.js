import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "../Text";
import {
  primaryColor,
  inactiveColor,
  grayColor,
  textColor,
} from "../variables";
import { Clickable } from "../Clickable";

let color = "#fff";

const Button = ({ children, onClick, style }) => {
  return (
    <Clickable
      onClick={onClick}
      style={{
        ...styles.button,
        ...style,
      }}
      activeOpacity={0.6}
    >
      <Text color={color} style={{ ...styles.title }}>
        {children}
      </Text>
    </Clickable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    backgroundColor: "#F2F2F2",
    height: 70,
    width: 70,
    alignItems: "center",
    flexDirection: "row",
    elevation: 5,
  },
  title: {
    fontSize: 16,
    flex: 3,
    textAlign: "center",
  },
});

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  size: PropTypes.string,
  iconLeft: PropTypes.element,
  iconRight: PropTypes.element,
  showIconDivider: PropTypes.bool,
  style: PropTypes.object,
};

Button.defaultProps = {
  onClick: () => {},
  size: "large",
  type: "",
  showIconDivider: false,
  style: {},
};

export { Button };
