import { View, StyleSheet, Pressable } from "react-native";
import Constants from "expo-constants";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight * 2,
    paddingBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: "#24292e",
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text fontWeight="bold" fontSize="heading" color="white">Repositories</Text>
      </Pressable>
    </View>
  );
};

export default AppBar;
