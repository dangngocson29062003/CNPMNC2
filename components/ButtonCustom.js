import { View, TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

function ButtonCustom({ children, style, onPress, id, date, time }) {
  const navigation = useNavigation();
  const PressHandler = () => {
    if (date || time) return navigation.navigate("SeatScreen", { id });
    else return Alert.alert("Thông báo", "Vui lòng chọn suất chiếu");
  };
  return (
    <View>
      <TouchableOpacity onPress={PressHandler} style={styles.container}>
        <Text style={styles.text}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
}
export default ButtonCustom;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FF5524",
    borderRadius: 10,
    paddingVertical: 20,
    marginBottom: 50,
    marginTop: 20,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    letterSpacing: 0.4,
    fontSize: 14,
    textAlign: "center",
  },
});
