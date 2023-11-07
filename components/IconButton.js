import { StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
function IconButton({ icon, color, onPress, size }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons name={icon} size={32} color={color} />
    </TouchableOpacity>
  );
}
export default IconButton;
const styles = StyleSheet.create({});
