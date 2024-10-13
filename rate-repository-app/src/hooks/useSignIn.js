import { useMutation } from "@apollo/client";
import { AUTHENTICATE_MUTATION } from "../graphql/mutations";
import useAuthStorage from "../hooks/useAuthStorage";

export const useSignIn = () => {
  const authStorage = useAuthStorage();
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
