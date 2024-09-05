import { useFormik } from "formik";
import Text from "./Text";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import theme from "../theme";
import * as yup from "yup";

const styles = StyleSheet.create({
  field: {
    marginTop: 15,
    marginHorizontal: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
  },
  fieldError: {
     marginTop: 15,
    marginHorizontal: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: "#d73a4a",
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

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required"),
  password: yup
    .string()
    .required("Password is required")
})

const SignIn = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <>
      <View>
        <TextInput
          placeholder="Username"
          value={formik.values.username}
          onChangeText={formik.handleChange("username")}
          style={[
            styles.field,
            formik.touched.username && formik.errors.username
              ? styles.fieldError
              : null,
          ]}
        />
        {formik.touched.username && formik.errors.username && (
          <Text style={{ color: "red", paddingLeft: 15 }}>
            {formik.errors.username}
          </Text>
        )}
        <TextInput
          placeholder="Password"
          secureTextEntry
          value={formik.values.password}
          onChangeText={formik.handleChange("password")}
          style={[
            styles.field,
            formik.touched.password && formik.errors.password
              ? styles.fieldError
              : null,
          ]}
        />
        {formik.touched.password && formik.errors.password && (
          <Text style={{ color: "red", paddingLeft: 15 }}>
            {formik.errors.password}
          </Text>
        )}
        <Pressable onPress={formik.handleSubmit}>
          <Text style={styles.buttonPrimary}>Sign In</Text>
        </Pressable>
      </View>
    </>
  );
};

export default SignIn;
