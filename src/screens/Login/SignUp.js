import React, { useState } from "react";
import api from "../../services/api";
import { View, StyleSheet, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, Button } from "react-native-elements";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "space-around",
    width: "80%",
    flexDirection: "row",
  },
});

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const postUser = () => {
    api
      .post("users", { email, password })
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error.data));
  };

  return (
    <View style={styles.container}>
      <Input
        label="Seu endereço de email"
        placeholder=" email@address.com"
        leftIcon={<Icon name="envelope" size={24} color="#2191db" />}
        onChangeText={(email) => setEmail(email)}
      />
      <Input
        placeholder=" Password"
        label="Password"
        leftIcon={<Icon name="lock" size={24} color="#2191db" />}
        onChangeText={(password) => setPassword(password)}
        secureTextEntry={true}
      />
      <Input
        placeholder="Password"
        label="Confirm Password"
        leftIcon={<Icon name="lock" size={24} color="#2191db" />}
        onChangeText={async (passwordConfirm) => {
          await setConfirmPassword(passwordConfirm);
        }}
        secureTextEntry={true}
      />
      <View style={styles.buttonsContainer}>
        <Button
          title="Registrar"
          style={{
            marginTop: "15px",
            width: "40%",
          }}
          onPress={() => {
            password !== confirmPassword
              ? Alert.alert(
                  "Diferença nas senhas",
                  "Senhas são diferentes",
                  [
                    {
                      text: "Ok",
                      onPress: () => console.log(`Senhas diferentes`),
                    },
                  ],
                  { cancelable: false }
                )
              : postUser();
          }}
        />
        <Button
          title="Login"
          style={{
            marginTop: "15px",
            width: "40%",
          }}
          onPress={() => navigation.navigate("SignIn")}
        />
      </View>
    </View>
  );
};

export default SignUp;
