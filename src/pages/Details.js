import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

const Details = () => {
  const { getItem, removeItem } = useAsyncStorage("data_user");
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await getItem();
    setData(JSON.parse(res));
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <View style={styles.body}>
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => {
          removeItem();
          getData();
        }}
      >
        <Text>Remove All</Text>
      </TouchableOpacity>
      <Text style={styles.heading}>Saved Details</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.detailCard}>
            <Text style={styles.detailText}>Name: {item.name}</Text>
            <Text style={styles.detailText}>Email: {item.email}</Text>
            <Text style={styles.detailText}>Age: {item.age}</Text>
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
    gap: 30,
    width: "100%",
  },
  heading: {
    fontSize: 32,
    fontWeight: 500,
    color: "purple",
  },
  detailCard: {
    width: "100%",
    padding: 10,
    marginVertical: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#000000",
  },
  detailText: {
    fontSize: 18,
  },
  removeButton: {
    padding: 10,
    backgroundColor: "red",
    borderRadius: 5,

    position: "absolute",
    top: 10,
    right: 10,
  },
});

export default Details;
