import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Colors, screenWidth } from "../../constants/styles";
import { commonAppBar } from "../../components/commonComponents";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { FontAwesome } from "@expo/vector-icons";
import { TicketLoaderCard } from "../../components/ticketCard";
const Parcels = [
  {
    id: '1',
    pickupCity: 'Pune',
    destinationCity: 'Mumbai',
    weight: 10,
    weightUnit: 'kg',
    length: 20,
    width: 15,
    height: 10,
    lengthUnit: 'cm',
  },
  {
    id: '2',
    pickupCity: 'Delhi',
    destinationCity: 'Chandigarh',
    weight: 5,
    weightUnit: 'kg',
    length: 30,
    width: 20,
    height: 12,
    lengthUnit: 'cm',
  },
];


const AllSavedParcels = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.label}>From:</Text>
        <Text style={styles.value}>{item.pickupCity}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>To:</Text>
        <Text style={styles.value}>{item.destinationCity}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Weight:</Text>
        <Text style={styles.value}>
          {item.weight} {item.weightUnit}
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Dimensions:</Text>
        <Text style={styles.value}>
          {item.length}×{item.width}×{item.height} {item.lengthUnit}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {commonAppBar("Saved Parcels", navigation)}
      {isLoading ? (
        <TicketLoaderCard count={5} />
      ) : (
        <FlatList
          data={Parcels}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 20 }}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <FontAwesome
                name="cube"
                size={60}
                color={Colors.extraLightGrayColor}
              />
              <Text style={styles.emptyText}>Saved Parcels Not Found</Text>
            </View>
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bodyBackColor,
    padding: 10,
  },
  card: {
    backgroundColor: Colors.whiteColor,
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    shadowColor: Colors.blackColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  row: {
    flexDirection: "row",
    marginBottom: 6,
  },
  label: {
    fontSize: 12,
    fontWeight: "600",
    color: Colors.grayColor,
    width: 90,
  },
  value: {
    fontSize: 12,
    color: Colors.lightBlackColor,
    flex: 1,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: 14,
    color: Colors.grayColor,
    marginTop: 12,
  },
});

export default AllSavedParcels;
