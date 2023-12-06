import {
  StyleSheet,
  View,
  TextInput,
} from "react-native";


export default function NumInput({ num, setNum }) {
  return (
    <View style={styles.numInput}>
      <TextInput
        style={styles.numInputText}
        value={num}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  numInput: {
    flex: 2,
    width: "100%",
    justifyContent: "flex-end",
    marginBottom: 30,
    alignItems: "center"
  },
  numInputText: {
    width: "90%",
    color: "#fff",
    fontSize: 50,
    letterSpacing: 4,
    textAlign: "center",
  },
})