import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import {
  Zocial,
  Ionicons,
  SimpleLineIcons,
  AntDesign,
  FontAwesome5,
  Foundation,
} from "@expo/vector-icons";

//components
import NavigationBar from "./Components/Navigation";
import NapPad from "./Components/NamPad";
import NumInput from "./Components/NamInput";

export default function App() {
  const [num, setNum] = useState("");

  const handleDeleteNum = () => {
    if (num.length > 0) {
      const updatedNum = num.slice(0, -1);
      setNum(updatedNum);
    }
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        {/* TopNavBar */}
        <View style={styles.topNav}>
          <View style={styles.phoneHeaderTextBox}>
            <Text style={styles.headerText}>Phone</Text>
          </View>
          <AntDesign
            style={styles.optionIcon}
            name="search1"
            size={22}
            color="#A0A0A0"
          />
          <SimpleLineIcons name="options-vertical" size={20} color="#A0A0A0" />
        </View>

        {/* Numimport */}
        <NumInput num={num} setNum={setNum} />

        {/* numPad */}
        <NapPad num={num} setNum={setNum} />

        {/* call btn */}
        <View style={styles.callBtnBox}>
          <TouchableOpacity activeOpacity={0.7}>
            <Foundation
              name="video"
              size={30}
              color="#fff"
              style={{ display: num ? "flex" : "none" }}
            />
          </TouchableOpacity>
          <View style={styles.callBtn}>
            <Zocial name="call" size={40} color="#fff" />
          </View>
          <TouchableOpacity
            onPress={handleDeleteNum}
            activeOpacity={0.7}
            onLongPress={() => setNum("")}
          >
            <FontAwesome5
              name="backspace"
              size={24}
              color="#fff"
              style={{ display: num ? "flex" : "none" }}
            />
          </TouchableOpacity>
        </View>

        {/* navigation */}
        <NavigationBar />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    backgroundColor: "black",
    justifyContent: "space-between",
    alignItems: "center",
  },
  callBtnBox: {
    width: "85%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 60,
  },
  callBtn: {
    width: 70,
    height: 70,
    borderRadius: "50%",
    overflow: "hidden",
    backgroundColor: "#9EB8B3",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 25,
    borderRadius: 50,
  },
  topNav: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 0,
    paddingHorizontal: 20,
  },
  phoneHeaderTextBox: {
    flex: 1,
    justifyContent: "center",
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
  },
  optionIcon: {
    marginLeft: 50,
    paddingRight: 20,
  },
});
