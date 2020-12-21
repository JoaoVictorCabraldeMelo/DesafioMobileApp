import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SignUp from "../screens/Login/SignUp";
import SignIn from "../screens/Login/SignIn";
import Index from "../screens/Map/Index";

const Stack = createStackNavigator();

const Routes = (props) => {
  const [token, setToken] = useState(null);

  useEffect(async () => {
    const newToken = await AsyncStorage.getItem("@token");
    setToken(newToken);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={token !== null ? "Index" : "SignUp"}>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Index" component={Index} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
