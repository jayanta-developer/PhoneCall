import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';



export default function NapPad({ setNum }) {
  const handelNumClick = (n) => setNum((privesVal) => privesVal + n);
  const rippelColor = "#A1A1A1"

  return (
    <View style={styles.numPad}>
      <View style={styles.numPadRow}>

        <View style={styles.numOuterbox}>
          <Pressable style={styles.numBox} android_ripple={{ color: rippelColor }} onPress={() => handelNumClick("1")}>
            <Text style={styles.numPadText}>1</Text>
            <Entypo name="voicemail" size={18} color="#D4D4D4" />
          </Pressable>
        </View>

        <View style={styles.numOuterbox}>
          <Pressable style={styles.numBox} android_ripple={{ color: rippelColor }} onPress={() => handelNumClick("2")}>
            <Text style={styles.numPadText}>2</Text>
            <Text style={styles.numSubText}>ABC</Text>
          </Pressable>
        </View>

        <View style={styles.numOuterbox}>
          <Pressable style={styles.numBox} android_ripple={{ color: rippelColor }} onPress={() => handelNumClick("3")}>
            <Text style={styles.numPadText}>3</Text>
            <Text style={styles.numSubText}>DEF</Text>
          </Pressable>
        </View>


      </View>
      <View style={styles.numPadRow}>

        <View style={styles.numOuterbox}>
          <Pressable style={styles.numBox} android_ripple={{ color: rippelColor }} onPress={() => handelNumClick("4")}>
            <Text style={styles.numPadText}>4</Text>
            <Text style={styles.numSubText}>GHI</Text>
          </Pressable>
        </View>

        <View style={styles.numOuterbox}>
          <Pressable style={styles.numBox} android_ripple={{ color: rippelColor }} onPress={() => handelNumClick("5")}>
            <Text style={styles.numPadText}>5</Text>
            <Text style={styles.numSubText}>JKL</Text>
          </Pressable>
        </View>

        <View style={styles.numOuterbox}>
          <Pressable style={styles.numBox} android_ripple={{ color: rippelColor }} onPress={() => handelNumClick("6")}>
            <Text style={styles.numPadText}>6</Text>
            <Text style={styles.numSubText}>MNO</Text>
          </Pressable>
        </View>

      </View>
      <View style={styles.numPadRow}>

        <View style={styles.numOuterbox}>
          <Pressable style={styles.numBox} android_ripple={{ color: rippelColor }} onPress={() => handelNumClick("7")}>
            <Text style={styles.numPadText}>7</Text>
            <Text style={styles.numSubText}>PQRS</Text>
          </Pressable>
        </View>

        <View style={styles.numOuterbox}>
          <Pressable style={styles.numBox} android_ripple={{ color: rippelColor }} onPress={() => handelNumClick("8")}>
            <Text style={styles.numPadText}>8</Text>
            <Text style={styles.numSubText}>TUV</Text>
          </Pressable>
        </View>

        <View style={styles.numOuterbox}>
          <Pressable style={styles.numBox} android_ripple={{ color: rippelColor }} onPress={() => handelNumClick("9")}>
            <Text style={styles.numPadText}>9</Text>
            <Text style={styles.numSubText}>WXYZ</Text>
          </Pressable>
        </View>

      </View>
      <View style={styles.numPadRow}>

        <View style={styles.numOuterbox}>
          <Pressable style={styles.numBox} android_ripple={{ color: rippelColor }} onPress={() => handelNumClick("*")}>
            <Text style={styles.numPadText}>*</Text>
          </Pressable>
        </View>

        <View style={styles.numOuterbox}>
          <Pressable style={styles.numBox} android_ripple={{ color: rippelColor }} onPress={() => handelNumClick("0")}>
            <Text style={styles.numPadText}>0</Text>
            <MaterialIcons style={styles.plassIcon} name="add" color="#f2f2f2" />
          </Pressable>
        </View>

        <View style={styles.numOuterbox}>
          <Pressable style={styles.numBox} android_ripple={{ color: rippelColor }} onPress={() => handelNumClick("#")}>
            <Text style={styles.numPadText}>#</Text>
          </Pressable>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  numPad: {
    width: "100%",
    flexDirection: "column",
    paddingHorizontal: 60,
  },
  numPadRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8
  },
  numBox: {
    width: 78,
    height: 75,
    borderRadius: 50,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // borderColor: "green",
    borderWidth: 1,

  },
  numPadText: {
    color: "#fff",
    fontSize: 55,
    textAlign: "center"
  },
  numSubText: {
    fontSize: 11,
    color: "#f2f2f2",
    textAlign: "center"
  },
  plassIcon: {
    fontSize: 16,
    color: "#f2f2f2",
    textAlign: "center"
  },
  numOuterbox: {
    // borderColor: "red",
    borderWidth: 1,
    borderRadius: 50,
    overflow: "hidden"
  }
})