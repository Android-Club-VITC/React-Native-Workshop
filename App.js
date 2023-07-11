import React from "react";
// import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";

//Navigation import
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Form from "./src/pages/Form";
import Home from "./src/pages/Home";
import Details from "./src/pages/Details";

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
