import { useFormik } from "formik";
import Text from "./Text";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  field: {
    marginTop: 15,
    marginHorizontal: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
  },
  buttonPrimary: {
    backgroundColor: theme.colors.primary,
    color: "white",
    marginTop: 15,
    marginHorizontal: 15,
    padding: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
});

const initialValues = {
  username: "",
  password: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const SignIn = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <>
      <View>
        <TextInput
          placeholder="Username"
          value={formik.values.username}
          onChangeText={formik.handleChange("username")}
          style={styles.field}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          value={formik.values.password}
          onChangeText={formik.handleChange("password")}
          style={styles.field}
        />
        <Pressable onPress={formik.handleSubmit}>
          <Text style={styles.buttonPrimary}>Sign In</Text>
        </Pressable>
      </View>
    </>
  );
};

export default SignIn;
