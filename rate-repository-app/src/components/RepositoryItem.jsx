import { Image, StyleSheet, View } from "react-native";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

const formatNumber = (number) => {
  if (number >= 1000) {
    return (number / 1000).toFixed(1) + "k";
  }
  return number;
};

export const RepositoryItem = ({ item }) => {
  const {
    // id,
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
    ownerAvatarUrl,
  } = item;

  return (
    <>
      <View style={{ padding: 15, display: "flex", flexDirection: "row" }}>
        <Image
          source={{ uri: ownerAvatarUrl }}
          style={{ width: 50, height: 50, borderRadius: 5 }}
        />
        <View style={{ paddingHorizontal: 20, flex: 1 }}>
          <Text fontWeight="bold" fontSize="subheading">
            {fullName}
          </Text>
          <Text color="textSecondary" style={{ paddingVertical: 5 }}>
            {description}
          </Text>
          <Text
            style={{
              backgroundColor: theme.colors.primary,
              padding: 5,
              borderRadius: 5,
              color: "white",
              alignSelf: "flex-start",
            }}
          >
            {language}
          </Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <View style={{paddingBottom: 10}}>
          <Text style={{ textAlign: "center" }} fontWeight="bold">
            {formatNumber(stargazersCount)}
          </Text>
          <Text style={{ textAlign: "center" }}>Stars</Text>
        </View>
        <View>
          <Text style={{ textAlign: "center" }} fontWeight="bold">
            {formatNumber(forksCount)} 
          </Text>
          <Text style={{ textAlign: "center" }}>Forks</Text>
        </View>
        <View>
          <Text style={{ textAlign: "center" }} fontWeight="bold">
            {formatNumber(reviewCount)}
          </Text>
          <Text style={{ textAlign: "center" }}>Reviews</Text>
        </View>
        <View>
          <Text style={{ textAlign: "center" }} fontWeight="bold">
            {formatNumber(ratingAverage)}
          </Text>
          <Text style={{ textAlign: "center" }}>Rating</Text>
        </View>
      </View>
      {/* <Text>id: {id}</Text> */}
    </>
  );
};
