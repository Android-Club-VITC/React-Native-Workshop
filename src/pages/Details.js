import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import Ionicons from "@expo/vector-icons/Ionicons";

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
        <Text style={styles.removeText}>
          <Ionicons name="trash" size={20} color="white" />
          Remove All
        </Text>
      </TouchableOpacity>
      <Text style={styles.heading}>Saved Details</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.detailCard}>
            <Text style={styles.detailText}>
              Name: <Text style={styles.details}>{item.name}</Text>
            </Text>
            <Text style={styles.detailText}>
              Email: <Text style={styles.details}>{item.email}</Text>
            </Text>
            <Text style={styles.detailText}>
              Age: <Text style={styles.details}>{item.age}</Text>
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    padding: 20,
    paddingTop: 50,
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
  details: {
    fontWeight: 600,
  },
  removeText: {
    color: "white",
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
