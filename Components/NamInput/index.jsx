import {
  StyleSheet,
  View,
  TextInput,
} from "react-native";


export default function NumInput() {
  return (
    <View style={styles.numInput}>
      <TextInput
        style={styles.numInputText}
        placeholder="0000"
        value="987654321"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  numInput: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    marginBottom: 30,
  },
  numInputText: {
    width: "100%",
    color: "#fff",
    fontSize: 50,
    letterSpacing: 4,
    textAlign: "center",
  },
})