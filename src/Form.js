import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { AsyncStorage } from "@react-native-async-storage/async-storage";

const Form = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);

  const onPress = async () => {
    try {
      const load = await AsyncStorage.getItem("data");
      const previousData = load ? load : [];

      await AsyncStorage.setItem("data", [
        ...previousData,
        { name: name, email: email, age: age },
      ]);

      props.navigation.navigate("Details");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.body}>
      <Text style={styles.heading}>Enter Details</Text>
      <View style={styles.form}>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={(e) => setName(e)}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(e) => setEmail(e)}
          style={styles.input}
        />
        <TextInput
          placeholder="Age"
          value={age}
          onChangeText={(e) => setAge(e)}
          style={styles.input}
        />
        <Button title="Submit" style={styles.button} onPress={onPress} />
      </View>
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

export default Form;
