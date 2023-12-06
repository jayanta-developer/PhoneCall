import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Zocial } from "@expo/vector-icons";

import { SimpleLineIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

//components
import NavigationBar from "./Components/Navigation";
import NapPad from "./Components/NamPad";
import NumInput from "./Components/NamInput";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        {/* TopNavBar */}
        <View style={styles.topNav}>
          <AntDesign
            style={styles.optionIcon}
            name="search1"
            size={24}
            color="#f2f2f2"
          />
          <SimpleLineIcons name="options-vertical" size={24} color="#f2f2f2" />
        </View>

        {/* Numimport */}
        <NumInput />

        {/* numPad */}
        <NapPad />

        {/* call btn */}
        <View style={styles.callBtnBox}>
          <View style={styles.callBtn}>
            <Zocial name="call" size={40} color="#fff" />
          </View>
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
  },

  callBtnBox: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  callBtn: {
    width: 70,
    height: 70,
    borderRadius: "50%",
    overflow: "hidden",
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 25,
    borderRadius: 50,
  },
  topNav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 40,
  },
  optionIcon: {
    marginLeft: 50,
  },
});
