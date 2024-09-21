import { ApolloClient, InMemoryCache } from "@apollo/client";
import Constants from "expo-constants";

console.log(Constants.expoConfig.extra);

const createApolloClient = () => {
  return new ApolloClient({
    uri: Constants.expoConfig.extra.uri,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
