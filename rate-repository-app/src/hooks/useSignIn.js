import { useMutation } from "@apollo/client";
import { AUTHENTICATE_MUTATION } from "../graphql/mutations";

export const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE_MUTATION);

  const signIn = async ({ username, password }) => {
    try {
      const { data } = await mutate({
        variables: {
          credentials: { username, password },
        },
      });

      console.log("AccessToken:", data.authenticate.accessToken);
      return data;
    } catch (error) {
      console.error("Error during sign in:", error);
      throw error;
    }
  };

  return [signIn, result];
};
