import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';



export default function NapPad() {
  return (
    <View style={styles.numPad}>
      <View style={styles.numPadRow}>
        <View>
          <Text style={styles.numPadText}>1</Text>
          <Entypo name="voicemail" size={18} color="#D4D4D4" />
        </View>
        <View>
          <Text style={styles.numPadText}>2</Text>
          <Text style={styles.numSubText}>ABC</Text>
        </View>
        <View>
          <Text style={styles.numPadText}>3</Text>
          <Text style={styles.numSubText}>DEF</Text>
        </View>
      </View>
      <View style={styles.numPadRow}>
        <View>
          <Text style={styles.numPadText}>4</Text>
          <Text style={styles.numSubText}>GHI</Text>
        </View>
        <View>
          <Text style={styles.numPadText}>5</Text>
          <Text style={styles.numSubText}>JKL</Text>
        </View>
        <View>
          <Text style={styles.numPadText}>6</Text>
          <Text style={styles.numSubText}>MNO</Text>
        </View>
      </View>
      <View style={styles.numPadRow}>
        <View>
          <Text style={styles.numPadText}>7</Text>
          <Text style={styles.numSubText}>PQRS</Text>
        </View>
        <View>
          <Text style={styles.numPadText}>8</Text>
          <Text style={styles.numSubText}>TUV</Text>
        </View>
        <View>
          <Text style={styles.numPadText}>9</Text>
          <Text style={styles.numSubText}>WXYZ</Text>
        </View>
      </View>
      <View style={styles.numPadRow}>
        <View>
          <Text style={styles.numPadText}>*</Text>
        </View>
        <View>
          <Text style={styles.numPadText}>0</Text>
          <MaterialIcons style={styles.plassIcon} name="add" color="#f2f2f2" />
        </View>
        <View>
          <Text style={styles.numPadText}>#</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  numPad: {
    width: "100%",
    flexDirection: "column",
    // paddingVertical: 50,
    paddingHorizontal: 70,
  },
  numPadRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
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
  }
})