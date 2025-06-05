import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal,
  TextInput,
} from "react-native";
import MyStatusBar from "../../components/myStatusBar";
import {
  ButtonWithLoader,
  commonAppBar,
  typeSection,
} from "../../components/commonComponents";
import { fetchAddressComponent, trimText } from "../../utils/commonMethods";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Colors, commonStyles, Sizes } from "../../constants/styles";

import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { showSnackbar } from "../../redux/slice/snackbarSlice";
import { selectUser } from "../../redux/selector/authSelector";

const LabeledInput = ({ label, placeholder, value, setter, required = false, style }) => (
  <View style={[{ flex: 1 }, style]}>
    <Text style={styles.sectionLabel}>
      {label}
      {required && <Text style={{ color: Colors.darkOrangeColor }}> *</Text>}
    </Text>
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={(text) => setter(text)}
      maxLength={80}
      keyboardType="numeric"
    />
  </View>
);

const SearchVehicleForm = ({ route, navigation }) => {
  const { data } = route?.params;
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const [selectedField, setSelectedField] = useState(null);
  const [departureDateTime, setDepartureDateTime] = useState("");
  const [arrivalDateTime, setArrivalDateTime] = useState("");
  const [isPickerVisible, setPickerVisible] = useState(false);
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const [length, setLength] = useState(null);
  const [lengthUnit, setLengthUnit] = useState(null);
  const [weightUnit, setWeightUnit] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const showPicker = () => setPickerVisible(true);
  const hidePicker = () => setPickerVisible(false);

  const handleDatePick = (date) => {
    const formatted = date.toLocaleString([], {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });

    if (selectedField === "departure") {
      setDepartureDateTime(formatted);
    } else {
      setArrivalDateTime(formatted);
    }

    hidePicker();
  };

  const handleSubmit = async () => {
    navigation.navigate("AllJourneyList");
  };

  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
      <MyStatusBar />
      {commonAppBar("Parcel Detail", navigation)}

    
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Parcel Detail</Text>

        <View style={styles.routeContainer}>
          <View style={styles.timeline}>
            <Ionicons name="location" size={16} color={Colors.darkOrangeColor} />
            <View style={styles.timelineLine} />
            <Ionicons name="location-outline" size={16} color={Colors.darkOrangeColor} />
          </View>

          <View style={styles.addressesContainer}>
            <Text style={styles.addressText}>
              {trimText(data?.sourceAddress, 45)}
            </Text>
            <View style={{ height: 25 }} />
            <Text style={styles.addressText}>
              {trimText(data?.destinationAddress, 45)}
            </Text>
          </View>
        </View>

        {/* Date-Time Section */}
        <Text style={styles.sectionLabel}>
          Date & Time <Text style={{ color: Colors.darkOrangeColor }}> *</Text>
        </Text>
        <View style={styles.customTimeContainer}>
          <TouchableOpacity
            style={styles.timeInput}
            onPress={() => {
              setSelectedField("departure");
              showPicker();
            }}
          >
            <Text style={{ fontSize: 12, textAlign: "center" }}>
              {departureDateTime || "Departure Time"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.timeInput}
            onPress={() => {
              setSelectedField("arrival");
              showPicker();
            }}
          >
            <Text style={{ fontSize: 12, textAlign: "center" }}>
              {arrivalDateTime || "Arrival Time"}
            </Text>
          </TouchableOpacity>
        </View>

        <DateTimePickerModal
          isVisible={isPickerVisible}
          mode="datetime"
          onConfirm={handleDatePick}
          onCancel={hidePicker}
        />

        {/* Capacity Section */}
        <View style={styles.section}>
          {typeSection(weightUnit, setWeightUnit, "Select Weight Unit", false, [
            { label: "Ton", value: "Ton" },
            { label: "kg", value: "Kg" },
          ])}
        </View>

        <View style={styles.section}>
          {typeSection(lengthUnit, setLengthUnit, "Select Length Unit", false, [
            { label: "meter", value: "m" },
            { label: "foot", value: "f" },
            { label: "Centimeter", value: "cm" },
          ])}
        </View>

        <View style={[styles.section, commonStyles.rowSpaceBetween]}>
          <LabeledInput
            label={`Weight (${weightUnit})`}
            placeholder="Enter Weight Capacity"
            value={weight}
            setter={setWeight}
            required
            style={{ marginRight: 8 }}
          />
          <LabeledInput
            label={`Length (${lengthUnit})`}
            placeholder="Enter Length"
            value={length}
            setter={setLength}
            required
            style={{ marginLeft: 8 }}
          />
        </View>

        <View style={[styles.section, commonStyles.rowSpaceBetween]}>
          <LabeledInput
            label={`Height (${lengthUnit})`}
            placeholder="Enter Height"
            value={height}
            setter={setHeight}
            required
            style={{ marginRight: 8 }}
          />
          <LabeledInput
            label={`Width (${lengthUnit})`}
            placeholder="Enter Width"
            value={width}
            setter={setWidth}
            required
            style={{ marginLeft: 8 }}
          />
        </View>
      </View>

      <View style={{ marginHorizontal: 10, marginVertical: 50 }}>
        {ButtonWithLoader("Search", "Processing..", isLoading, handleSubmit)}
      </View>
    </ScrollView>
  );
};


export default SearchVehicleForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  card: {
    backgroundColor: Colors.whiteColor,
    borderRadius: 12,
    margin: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    paddingBottom: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.primaryColor,
    marginBottom: 16,
  },
  sectionLabel: {
    fontSize: 12,
    fontWeight: "bold",
    color: Colors.primaryColor,
    marginBottom: 6,
  },
  //Location detail
  routeContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  timeline: {
    width: 20,
    alignItems: "center",
    marginRight: 8,
  },
 
  timelineLine: {
    width: 1,
    height: 18,
    backgroundColor: Colors.darkOrangeColor,
    marginVertical: 4,
    borderStyle: "dotted",
    borderWidth: 1,
  },

  addressesContainer: {
    flex: 1,
  },
  addressText: {
    fontSize: 12,
    color: Colors.blackColor,
    lineHeight: 15,
  },
  customTimeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  timeInput: {
    borderWidth: 1,
    borderColor: Colors.primaryColor,
    borderRadius: 8,
    padding: 10,
    fontSize: 12,
    width: "48%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    padding: 10,
    fontSize: 12,
  },
  section: {
    marginBottom: 12,
  },
});
