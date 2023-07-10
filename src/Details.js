import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { AsyncStorage } from "@react-native-async-storage/async-storage";

const Details = async () => {
  const data = await AsyncStorage.getItem("data");

  return (
    <View style={styles.body}>
      <Text style={styles.heading}>Saved Details</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View>
            <Text>Name: {item.name}</Text>
            <Text>Email: {item.email}</Text>
            <Text>Age: {item.age}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    padding: 50,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    margin: 20,
  },
  input: {
    padding: 5,
    borderColor: "#000000",
    borderRadius: 1,
    borderWidth: 1,
    width: 300,
  },
  heading: {
    fontSize: 30,
    fontWeight: 500,
  },
  form: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
});

export default Details;
