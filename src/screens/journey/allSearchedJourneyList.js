import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import {
  Colors,
  commonStyles,
} from "../../constants/styles";
import { commonAppBar } from "../../components/commonComponents";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MyStatusBar from "../../components/myStatusBar";
import { JourneyCardSkeleton, JourneyCard } from "../../components/userSideJourneyCard";

const JOURNEYS = [
  {
    id: "1",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png",
    driverName: "Driver Name",
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
    avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png",
    driverName: "Driver Name",
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
    id: "3",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png",
    driverName: "Driver Name",
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
];

const AllSearchedJourneyList = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleCardClick = (item) => {
    navigation.navigate("VehicleAndParcelDetail");
  };

  return (
    <SafeAreaView style={styles.container}>
      <MyStatusBar />
      {commonAppBar("All Matching Vehicles", navigation)}

      {/* <View style={{ marginTop: 20, marginBottom: 10, ...commonStyles.rowSpaceBetween }}>
        <Text style={{ fontSize: 14, fontWeight: "700" }}>Nearest Ongoing Vehicles:</Text>
        <Text style={{ fontSize: 14, fontWeight: "700", color: Colors.primaryColor }}>See All</Text>
      </View> */}

      {isLoading ? (
        <JourneyCardSkeleton count={5} />
      ) : (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {JOURNEYS.length > 0 ? (
            JOURNEYS.map((item) => (
              <TouchableOpacity activeOpacity={0.8} key={item.id} onPress={() => handleCardClick(item)}>
                <JourneyCard data={item} />
              </TouchableOpacity>
            ))
          ) : (
            <View style={styles.emptyContainer}>
              <Icon name="map-search-outline" size={60} color={Colors.grayColor} />
              <Text style={styles.emptyText}>Journey Not found</Text>
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

export default AllSearchedJourneyList;
