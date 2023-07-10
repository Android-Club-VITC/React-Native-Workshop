import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Home = (props) => {
  const onPress = () => {
    props.navigation.navigate("Form");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to React Native</Text>
      <Button title="Start" style={styles.button} onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 20,
  },
});

export default Home;
