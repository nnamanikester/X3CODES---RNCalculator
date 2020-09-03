import React from "react";
import { View, StatusBar, StyleSheet, Dimensions, Image } from "react-native";
import * as UI from "./components/common";
import {
  primaryColorDark,
  primaryColorLight,
  textColorLight,
  textColorDark,
  danger,
} from "./components/common/variables";
import measurement from "../assets/images/measurement.png";
import microscope from "../assets/images/microscope.png";
import currency from "../assets/images/currency.png";

const App = () => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor={primaryColorLight}
        barStyle="light-content"
      />
      <View style={styles.layout}>
        <View style={styles.controls}>
          <UI.Spacer />

          <UI.Row
            style={{ justifyContent: "space-between", paddingHorizontal: 10 }}
          >
            <View style={{ flexDirection: "row" }}>
              <UI.Clickable onClick={() => {}}>
                <Image source={microscope} style={styles.iconStyle} />
              </UI.Clickable>
              <UI.Spacer medium />
              <UI.Clickable onClick={() => {}}>
                <Image source={currency} style={styles.iconStyle} />
              </UI.Clickable>
              <UI.Spacer medium />
              <UI.Clickable onClick={() => {}}>
                <Image source={measurement} style={styles.iconStyle} />
              </UI.Clickable>
            </View>

            <UI.Clickable onClick={() => {}}>
              <UI.Icon type="Feather" name="delete" />
            </UI.Clickable>
          </UI.Row>

          <UI.Divider />

          <View style={{ justifyContent: "space-between", flex: 1 }}>
            <UI.Row style={{ justifyContent: "space-between" }}>
              <UI.Button>
                <UI.Text
                  color={danger}
                  style={{ fontFamily: "magneto" }}
                  size={40}
                >
                  c
                </UI.Text>
              </UI.Button>

              <UI.Button>
                <UI.Text
                  color={primaryColorLight}
                  style={{ fontFamily: "magneto" }}
                  size={30}
                >
                  ()
                </UI.Text>
              </UI.Button>

              <UI.Button>
                <UI.Text
                  color={primaryColorLight}
                  style={{ fontFamily: "magneto" }}
                  size={30}
                >
                  %
                </UI.Text>
              </UI.Button>

              <UI.Button>
                <UI.Text
                  color={textColorLight}
                  style={{ fontFamily: "magneto" }}
                  size={30}
                >
                  <UI.Icon
                    color={primaryColorLight}
                    type="FontAwesome5"
                    name="divide"
                  />
                </UI.Text>
              </UI.Button>
            </UI.Row>

            <UI.Row style={{ justifyContent: "space-between" }}>
              <UI.Button>
                <UI.Text
                  color={textColorLight}
                  style={{ fontFamily: "magneto" }}
                  size={30}
                >
                  7
                </UI.Text>
              </UI.Button>

              <UI.Button>
                <UI.Text
                  color={textColorLight}
                  style={{ fontFamily: "magneto" }}
                  size={30}
                >
                  8
                </UI.Text>
              </UI.Button>

              <UI.Button>
                <UI.Text
                  color={textColorLight}
                  style={{ fontFamily: "magneto" }}
                  size={30}
                >
                  9
                </UI.Text>
              </UI.Button>

              <UI.Button>
                <UI.Text
                  color={primaryColorLight}
                  style={{ fontFamily: "magneto" }}
                  size={30}
                >
                  x
                </UI.Text>
              </UI.Button>
            </UI.Row>
            <UI.Row style={{ justifyContent: "space-between" }}>
              <UI.Button>
                <UI.Text
                  color={textColorLight}
                  style={{ fontFamily: "magneto" }}
                  size={30}
                >
                  4
                </UI.Text>
              </UI.Button>

              <UI.Button>
                <UI.Text
                  color={textColorLight}
                  style={{ fontFamily: "magneto" }}
                  size={30}
                >
                  5
                </UI.Text>
              </UI.Button>

              <UI.Button>
                <UI.Text
                  color={textColorLight}
                  style={{ fontFamily: "magneto" }}
                  size={30}
                >
                  6
                </UI.Text>
              </UI.Button>

              <UI.Button>
                <UI.Text
                  color={textColorLight}
                  style={{ fontFamily: "magneto" }}
                  size={30}
                >
                  -
                </UI.Text>
              </UI.Button>
            </UI.Row>
            <UI.Row style={{ justifyContent: "space-between" }}>
              <UI.Button>
                <UI.Text
                  color={textColorLight}
                  style={{ fontFamily: "magneto" }}
                  size={30}
                >
                  1
                </UI.Text>
              </UI.Button>

              <UI.Button>
                <UI.Text
                  color={textColorLight}
                  style={{ fontFamily: "magneto" }}
                  size={30}
                >
                  2
                </UI.Text>
              </UI.Button>

              <UI.Button>
                <UI.Text
                  color={textColorLight}
                  style={{ fontFamily: "magneto" }}
                  size={30}
                >
                  3
                </UI.Text>
              </UI.Button>

              <UI.Button>
                <UI.Text
                  color={textColorLight}
                  style={{ fontFamily: "magneto" }}
                  size={30}
                >
                  1
                </UI.Text>
              </UI.Button>
            </UI.Row>

            <UI.Row style={{ justifyContent: "space-between" }}>
              <UI.Button>
                <UI.Text
                  color={textColorLight}
                  style={{ fontFamily: "magneto" }}
                  size={30}
                >
                  0
                </UI.Text>
              </UI.Button>

              <UI.Button>
                <UI.Text
                  color={textColorLight}
                  style={{ fontFamily: "magneto" }}
                  size={30}
                >
                  ,
                </UI.Text>
              </UI.Button>

              <UI.Button
                style={{ width: 70 * 2.5, backgroundColor: primaryColorLight }}
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
    height: Dimensions.get("screen").height / 1.5,
    width: "100%",
    backgroundColor: "#E0E0E0",
    elevation: 5,
    position: "absolute",
    bottom: 0,
    padding: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});

export default App;
