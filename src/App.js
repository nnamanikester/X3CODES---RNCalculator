import React from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import * as UI from "./components/common";
import StatusBar from "./components/StatusBar";
import {
  primaryColorDark,
  primaryColorLight,
  textColorLight,
  textColorDark,
  danger,
  buttonColorDark,
  buttonColorLight,
  secondaryColorDark,
} from "./components/common/variables";
import measurement from "../assets/images/measurement.png";
import measurementSec from "../assets/images/measurementSec.png";
import microscope from "../assets/images/microscope.png";
import microscopeSec from "../assets/images/microscopeSec.png";
import currency from "../assets/images/currency.png";
import currencySec from "../assets/images/currencySec.png";

const App = () => {
  const [dark, setDark] = React.useState(false);

  const [numbers, setNumbers] = React.useState([
    "2",
    "0",
    "0",
    "x",
    "2",
    "5",
    "0",
  ]);
  const [answer, setAnswer] = React.useState("50,000");

  return (
    <>
      <StatusBar color={dark ? primaryColorDark : primaryColorLight} />

      <View
        style={{
          ...styles.layout,
          backgroundColor: dark ? primaryColorDark : "#C4C4C4",
        }}
      >
        <View
          style={{
            ...styles.screen,
            backgroundColor: dark ? primaryColorDark : "#C4C4C4",
          }}
        >
          <UI.Row style={{ justifyContent: "flex-end" }}>
            {numbers.map((n, i) => {
              if (isNaN(n)) {
                return (
                  <UI.Text
                    size={40}
                    color={dark ? secondaryColorDark : primaryColorLight}
                    style={{ fontWeight: "bold" }}
                    key={i + n}
                  >
                    {n}
                  </UI.Text>
                );
              } else {
                return (
                  <UI.Text
                    size={40}
                    color={dark ? textColorDark : textColorLight}
                    style={{ fontWeight: "bold" }}
                    key={i + n}
                  >
                    {n}
                  </UI.Text>
                );
              }
            })}
          </UI.Row>

          <UI.Spacer large />

          <UI.Text
            size={40}
            color={dark ? secondaryColorDark : primaryColorLight}
            style={{ fontWeight: "bold" }}
          >
            {answer}
          </UI.Text>
        </View>

        <View style={{ padding: 20 }}>
          <UI.Clickable
            style={{
              width: 50,
              height: 40,
              justifyContent: "center",
            }}
            onClick={() => setDark(!dark)}
          >
            <UI.Icon
              size={30}
              name="ios-moon"
              color={dark ? textColorDark : textColorLight}
            />
          </UI.Clickable>
        </View>

        <View
          style={{
            ...styles.controls,
            backgroundColor: dark ? "#051933" : "#E0E0E0",
          }}
        >
          <UI.Spacer />

          <UI.Row
            style={{ justifyContent: "space-between", paddingHorizontal: 10 }}
          >
            <View style={{ flexDirection: "row" }}>
              <UI.Clickable onClick={() => {}}>
                {!dark ? (
                  <Image source={microscope} style={styles.iconStyle} />
                ) : (
                  <Image source={microscopeSec} style={styles.iconStyle} />
                )}
              </UI.Clickable>
              <UI.Spacer medium />
              <UI.Clickable onClick={() => {}}>
                {!dark ? (
                  <Image source={currency} style={styles.iconStyle} />
                ) : (
                  <Image source={currencySec} style={styles.iconStyle} />
                )}
              </UI.Clickable>
              <UI.Spacer medium />
              <UI.Clickable onClick={() => {}}>
                {!dark ? (
                  <Image source={measurement} style={styles.iconStyle} />
                ) : (
                  <Image source={measurementSec} style={styles.iconStyle} />
                )}
              </UI.Clickable>
            </View>

            <UI.Clickable onClick={() => {}}>
              <UI.Icon
                color={dark ? secondaryColorDark : primaryColorLight}
                type="Feather"
                name="delete"
              />
            </UI.Clickable>
          </UI.Row>

          <UI.Divider />

          <View style={{ justifyContent: "space-between", flex: 1 }}>
            <UI.Row style={{ justifyContent: "space-between" }}>
              <UI.Button
                style={{
                  backgroundColor: dark ? buttonColorDark : buttonColorLight,
                }}
              >
                <UI.Text
                  color={danger}
                  style={{ fontFamily: "magneto" }}
                  size={40}
                >
                  c
                </UI.Text>
              </UI.Button>

              <UI.Button
                style={{
                  backgroundColor: dark ? buttonColorDark : buttonColorLight,
                }}
              >
                <UI.Text
                  color={dark ? secondaryColorDark : primaryColorLight}
                  style={{ fontFamily: "magneto" }}
                  size={30}
                >
                  ()
                </UI.Text>
              </UI.Button>

              <UI.Button
                style={{
                  backgroundColor: dark ? buttonColorDark : buttonColorLight,
                }}
              >
                <UI.Text
                  color={dark ? secondaryColorDark : primaryColorLight}
                  style={{ fontFamily: "magneto" }}
                  size={30}
                >
                  %
                </UI.Text>
              </UI.Button>

              <UI.Button
                style={{
                  backgroundColor: dark ? buttonColorDark : buttonColorLight,
                }}
              >
                <UI.Text
                  color={textColorLight}
                  style={{ fontFamily: "magneto" }}
                  size={30}
                >
                  <UI.Icon
                    color={dark ? secondaryColorDark : primaryColorLight}
                    type="FontAwesome5"
                    name="divide"
                  />
                </UI.Text>
              </UI.Button>
            </UI.Row>

            <UI.Row style={{ justifyContent: "space-between" }}>
              <UI.Button
                style={{
                  backgroundColor: dark ? buttonColorDark : buttonColorLight,
                }}
              >
                <UI.Text
                  color={dark ? textColorDark : textColorLight}
                  style={{ fontFamily: "magneto" }}
                  size={30}
                >
                  7
                </UI.Text>
              </UI.Button>

              <UI.Button
                style={{
                  backgroundColor: dark ? buttonColorDark : buttonColorLight,
                }}
              >
                <UI.Text
                  color={dark ? textColorDark : textColorLight}
                  style={{ fontFamily: "magneto" }}
                  size={30}
                >
                  8
                </UI.Text>
              </UI.Button>

              <UI.Button
                style={{
                  backgroundColor: dark ? buttonColorDark : buttonColorLight,
                }}
              >
                <UI.Text
                  color={dark ? textColorDark : textColorLight}
                  style={{ fontFamily: "magneto" }}
                  size={30}
                >
                  9
                </UI.Text>
              </UI.Button>

              <UI.Button
                style={{
                  backgroundColor: dark ? buttonColorDark : buttonColorLight,
                }}
              >
                <UI.Text
                  color={dark ? secondaryColorDark : primaryColorLight}
                  style={{ fontFamily: "magneto" }}
                  size={30}
                >
                  x
                </UI.Text>
              </UI.Button>
            </UI.Row>
            <UI.Row style={{ justifyContent: "space-between" }}>
              <UI.Button
                style={{
                  backgroundColor: dark ? buttonColorDark : buttonColorLight,
                }}
              >
                <UI.Text
                  color={dark ? textColorDark : textColorLight}
                  style={{ fontFamily: "magneto" }}
                  size={30}
                >
                  4
                </UI.Text>
              </UI.Button>

              <UI.Button
                style={{
                  backgroundColor: dark ? buttonColorDark : buttonColorLight,
                }}
              >
                <UI.Text
                  color={dark ? textColorDark : textColorLight}
                  style={{ fontFamily: "magneto" }}
                  size={30}
                >
                  5
                </UI.Text>
              </UI.Button>

              <UI.Button
                style={{
                  backgroundColor: dark ? buttonColorDark : buttonColorLight,
                }}
              >
                <UI.Text
                  color={dark ? textColorDark : textColorLight}
                  style={{ fontFamily: "magneto" }}
                  size={30}
                >
                  6
                </UI.Text>
              </UI.Button>

              <UI.Button
                style={{
                  backgroundColor: dark ? buttonColorDark : buttonColorLight,
                }}
              >
                <UI.Text
                  color={dark ? secondaryColorDark : primaryColorLight}
                  style={{ fontFamily: "magneto" }}
                  size={30}
                >
                  -
                </UI.Text>
              </UI.Button>
            </UI.Row>
            <UI.Row style={{ justifyContent: "space-between" }}>
              <UI.Button
                style={{
                  backgroundColor: dark ? buttonColorDark : buttonColorLight,
                }}
              >
                <UI.Text
                  color={dark ? textColorDark : textColorLight}
                  style={{ fontFamily: "magneto" }}
                  size={30}
                >
                  1
                </UI.Text>
              </UI.Button>

              <UI.Button
                style={{
                  backgroundColor: dark ? buttonColorDark : buttonColorLight,
                }}
              >
                <UI.Text
                  color={dark ? textColorDark : textColorLight}
                  style={{ fontFamily: "magneto" }}
                  size={30}
                >
                  2
                </UI.Text>
              </UI.Button>

              <UI.Button
                style={{
                  backgroundColor: dark ? buttonColorDark : buttonColorLight,
                }}
              >
                <UI.Text
                  color={dark ? textColorDark : textColorLight}
                  style={{ fontFamily: "magneto" }}
                  size={30}
                >
                  3
                </UI.Text>
              </UI.Button>

              <UI.Button
                style={{
                  backgroundColor: dark ? buttonColorDark : buttonColorLight,
                }}
              >
                <UI.Text
                  color={dark ? secondaryColorDark : primaryColorLight}
                  style={{ fontFamily: "magneto" }}
                  size={30}
                >
                  +
                </UI.Text>
              </UI.Button>
            </UI.Row>

            <UI.Row style={{ justifyContent: "space-between" }}>
              <UI.Button
                style={{
                  backgroundColor: dark ? buttonColorDark : buttonColorLight,
                }}
              >
                <UI.Text
                  color={dark ? textColorDark : textColorLight}
                  style={{ fontFamily: "magneto" }}
                  size={30}
                >
                  0
                </UI.Text>
              </UI.Button>

              <UI.Button
                style={{
                  backgroundColor: dark ? buttonColorDark : buttonColorLight,
                }}
              >
                <UI.Text
                  color={dark ? textColorDark : textColorLight}
                  style={{ fontFamily: "magneto" }}
                  size={30}
                >
                  ,
                </UI.Text>
              </UI.Button>

              <UI.Button
                style={{
                  width: 70 * 2.5,
                  backgroundColor: dark
                    ? secondaryColorDark
                    : primaryColorLight,
                }}
              >
                <UI.Text
                  color="#fff"
                  style={{ fontFamily: "magneto" }}
                  size={30}
                >
                  =
                </UI.Text>
              </UI.Button>
            </UI.Row>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: "#C4C4C4",
  },
  controls: {
    height: Dimensions.get("screen").height / 1.6,
    width: "100%",
    backgroundColor: "#E0E0E0",
    elevation: 5,
    position: "absolute",
    bottom: 0,
    padding: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  screen: {
    height: Dimensions.get("screen").height / 3.7,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingTop: 30,
    paddingRight: 20,
  },
});

export default App;
