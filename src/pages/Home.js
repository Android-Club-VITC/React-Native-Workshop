import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Home = (props) => {
  const onPress = () => {
    props.navigation.navigate("Form");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainHeader}>Welcome to React Native</Text>
      <View>
        <Text style={styles.heading}>Add New Info</Text>
        <Button title="Go" style={styles.button} onPress={onPress} />
      </View>
      <View>
        <Text style={styles.heading}>View Info</Text>
        <Button
          title="Go"
          style={styles.button}
          onPress={(e) => props.navigation.navigate("Details")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
    width: "100%",
  },
  mainHeader: {
    fontSize: 32,
    fontWeight: 500,
  },
});

export default Home;
