import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";

import { Colors, commonStyles } from "../../constants/styles";
import { commonAppBar } from "../../components/commonComponents";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MyStatusBar from "../../components/myStatusBar";
import {
  JourneyCardSkeleton,
  JourneyCard,
} from "../../components/userSideJourneyCard";

const JOURNEYS = [
  {
    id: "1",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png",
    driverName: "Amit Sharma",
    rating: 4.5,
    sourceCity: "Pune",
    sourceTime: "12/08/25 3:00PM",
    sourceAddress: "123 MG Road, Pune, Maharashtra 411045",
    destinationCity: "Mumbai",
    destinationTime: "12/08/25 8:00PM",
    destinationAddress: "456 Marine Drive, Mumbai, Maharashtra, 411041",
    weightCapacity: "200 kg",
    volumeCapacity: "30 m^3",
  },
  {
    id: "2",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png",
    driverName: "Rahul Patil",
    rating: 4.2,
    sourceCity: "Delhi",
    sourceTime: "14/08/25 9:00AM",
    sourceAddress: "Sector 21, Dwarka, Delhi",
    destinationCity: "Noida",
    destinationTime: "14/08/25 12:00PM",
    destinationAddress: "GIP Mall, Noida",
    weightCapacity: "150 kg",
    volumeCapacity: "20 m^3",
  },
];

const SearchJourneyByName = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const filteredJourneys = JOURNEYS.filter((item) => {
    const text = searchText.toLowerCase();
    return (
      item.driverName.toLowerCase().includes(text) ||
      item.sourceCity.toLowerCase().includes(text) ||
      item.destinationCity.toLowerCase().includes(text) ||
      item.sourceAddress.toLowerCase().includes(text) ||
      item.destinationAddress.toLowerCase().includes(text)
    );
  });

  const handleCardClick = (item) => {
    navigation.navigate("VehicleAndParcelDetail");
  };
  const handleRefresh = async () => {};
  return (
    <SafeAreaView style={styles.container}>
      <MyStatusBar />
      {/* {commonAppBar("Search Journey", navigation)} */}

      <View style={styles.searchBox}>
        <MaterialIcons name="search" color={Colors.grayColor} size={20} />
        <TextInput
          placeholder="Search Driver or City or Address"
          placeholderTextColor={Colors.grayColor}
          value={searchText}
          onChangeText={setSearchText}
          style={styles.searchInput}
        />
      </View>

      {isLoading ? (
        <View style={{ paddingTop: 60, marginHorizontal: 10 }}>
          <JourneyCardSkeleton count={5} />
        </View>
      ) : (
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={handleRefresh}
              colors={["#9Bd35A", "#101942"]}
              tintColor="#101942"
            />
          }
        >
          {filteredJourneys.length > 0 ? (
            filteredJourneys.map((item) => (
              <TouchableOpacity
                activeOpacity={0.8}
                key={item.id}
                onPress={() => handleCardClick(item)}
              >
                <JourneyCard data={item} />
              </TouchableOpacity>
            ))
          ) : (
            <View style={styles.emptyContainer}>
              <Icon
                name="map-search-outline"
                size={60}
                color={Colors.grayColor}
              />
              <Text style={styles.emptyText}>No journeys found</Text>
            </View>
          )}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bodyBackColor,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.whiteColor,
    // ...commonStyles.shadow,
    borderRadius: 8,
    borderColor: Colors.grayColor,
    borderWidth: 0.5,
    marginHorizontal: 16,
    marginTop: 20,

    paddingHorizontal: 12,
    paddingVertical: 2,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: Colors.lightBlackColor,
  },
  scrollContainer: {
    paddingBottom: 60,
    paddingHorizontal: 16,
    paddingTop: 60,
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

export default SearchJourneyByName;
