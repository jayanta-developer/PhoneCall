import {
  StyleSheet,
  Text,
  View,
} from "react-native";


export default function NavigationBar() {
  return (
    <>
      <View style={styles.navigationTabe}>
        <View>
          <Text style={styles.navigationText}>Keypad</Text>
        </View>
        <View>
          <Text style={styles.navigationText}>Recent</Text>
        </View>
        <View>
          <Text style={styles.navigationText}>Contacts</Text>
        </View>
      </View>
    </>
  )
}


const styles = StyleSheet.create({
  navigationTabe: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 50,
    paddingVertical: 20,
  },
  navigationText: {
    color: "#fff",
    fontSize: 17,
  },
})