import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export const storeToken = async (token) => {
  try {
    await AsyncStorage.setItem("@token", token);
  } catch (e) {
    Alert.alert(
      "Erro Login",
      "Aconteceu um erro quando guardamos o seu token",
      [{ text: "Ok", onPress: () => console.log(e) }],
      { cancelable: false }
    );
  }
};

export const getToken = () => async () => {

  try {
    const token = await AsyncStorage.getItem("@token");
    return token; 
  } catch (e) {
    Alert.alert(
      "Error",
      "Aconteceu um erro quando tentamos obter seu token",
      [{ text: "Ok", onPress: () => console.log(e) }],
      { cancelable: false }
    );
  }
};

export const deleteToken = async () => {
  try {
    await AsyncStorage.removeItem("@token");
  } catch (e) {
    Alert.alert(
      "Error",
      "Aconteceu um erro quando tentamos deletar seu token",
      [{ text: "Ok", onPress: () => console.log(e) }],
      { cancelable: false }
    );
  }
};
