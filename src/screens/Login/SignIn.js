import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, Button } from "react-native-elements";
import api from "../../services/api";
import { storeToken } from "../../services/auth";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {},
});

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    api
      .post("api/v1/auth", { email, password })
      .then((response) => {
        storeToken(response.data.token);
      })  
      .catch((error) => {
        console.log(error);
      });
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
      <Button
        title="Login"
        style={{
          marginTop: "15px",
        }}
        onPress={() => login()}
      />
    </View>
  );
};

export default SignIn;
