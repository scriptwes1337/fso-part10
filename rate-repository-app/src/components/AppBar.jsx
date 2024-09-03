import { View, StyleSheet, Pressable, ScrollView } from "react-native";
import Constants from "expo-constants";
import Text from "./Text";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight * 2,
    paddingBottom: 10,
    paddingHorizontal: 15,
    backgroundColor: "#24292e",
  },
  tab: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between"
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.tab}>
        <Pressable>
          <Link to="/">
            <Text fontWeight="bold" fontSize="heading" color="white">
              Repositories
            </Text>
          </Link>
        </Pressable>
        <Pressable>
          <Link to="/signin">
            <Text color="white">Sign In</Text>
          </Link>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default AppBar;
