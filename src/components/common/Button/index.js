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

let smallStyle = {};
let color = "#fff";

const Button = ({ children, onClick, size, style }) => {
  switch (size) {
    case "small":
      smallStyle = {
        width: 210,
      };
      break;
    case "medium":
      smallStyle = {
        width: 210,
      };
      break;
    case "large":
      smallStyle = {
        width: "100%",
      };
      break;
    default:
      smallStyle = {
        width: "100%",
      };
      break;
  }

  return (
    <Clickable
      onClick={onClick}
      style={{
        ...smallStyle,
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
  iconLeft: {
    alignItems: "center",
    borderRightWidth: 1,
    borderRightColor: grayColor,
    paddingHorizontal: 15,
  },
  iconRight: {
    alignItems: "center",
    borderLeftWidth: 1,
    borderLeftColor: grayColor,
    paddingHorizontal: 15,
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
