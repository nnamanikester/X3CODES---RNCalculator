import PropTypes from "prop-types";
import React from "react";
import { Text as TXT, StyleSheet } from "react-native";
import { textColor, info, primaryColor } from "../variables";

/**
 * A component for displaying texts which supports
 */
const Text = ({
  h1,
  h2,
  h3,
  h4,
  note,
  size,
  bold,
  children,
  style,
  color,
  textDecoration,
}) => {
  const textStyle = {};

  if (h1) {
    textStyle.fontSize = 50;
    textStyle.lineHeight = 59;
  } else if (h2) {
    textStyle.fontSize = 28;
    textStyle.lineHeight = 28;
    textStyle.fontWeight = "bold";
  } else if (h3) {
    textStyle.fontSize = 14;
    textStyle.lineHeight = 24;
    textStyle.letterSpacing = 6;
  } else if (h4) {
    textStyle.fontSize = 14;
    textStyle.lineHeight = 24;
    textStyle.color = primaryColor;
  } else if (note) {
    textStyle.color = info;
    textStyle.fontSize = 13;
    textStyle.lineHeight = 17;
  } else if (size) {
    textStyle.fontSize = size;
    textStyle.lineHeight = size + 10;
  } else {
    textStyle.fontSize = 16;
    textStyle.lineHeight = 20;
  }

  if (color) {
    textStyle.color = color;
  }

  if (bold) {
    textStyle.fontWeight = "bold";
  }

  switch (textDecoration) {
    case "lineThrough":
      textStyle.textDecorationLine = "line-through";
  }

  return (
    <TXT style={{ ...styles.text, ...textStyle, ...style }}>{children}</TXT>
  );
};

const styles = StyleSheet.create({
  text: {
    color: textColor,
    fontSize: 16,
    fontFamily: "gilory",
  },
});

Text.propTypes = {
  /**
   * Used to change the font size of the `Text`. Default is `16`.
   */
  size: PropTypes.number,
  /**
   *
   */
  h1: PropTypes.bool,
  h2: PropTypes.bool,
  h3: PropTypes.bool,
  bold: PropTypes.bool,
  style: PropTypes.object,
  color: PropTypes.string,
  note: PropTypes.bool,
  heading: PropTypes.bool,
  numberOfLines: PropTypes.number,
};

Text.defaultProps = {
  style: {},
  size: 16,
  bold: false,
  color: textColor,
  note: false,
  heading: false,
  h1: false,
  h2: false,
  h3: false,
  numberOfLines: 9999999999,
};

export { Text };
