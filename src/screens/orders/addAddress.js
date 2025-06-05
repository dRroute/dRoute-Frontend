import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
  Image,
  Modal,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { Colors, commonStyles } from "../../constants/styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MyStatusBar from "../../components/myStatusBar";
import {
  circularLoader,
  commonAppBar,
  commonLabel,
  fullImageContainer,
  ImageBottomSheet,
  inputBox,
  renderImageBox,
  textArea,
  typeSection,
} from "../../components/commonComponents";
import { showFullImageFunction } from "../../utils/commonMethods";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/selector/authSelector";
import {
  AADHAR_REGEX,
  ACCOUNT_NUMBER_REGEX,
  DL_REGEX,
  IFSC_REGEX,
  NAME_REGEX,
  UPI_REGEX,
  VEHICLE_NUMBER_REGEX,
} from "../../constants/regex";
import { completeProfile } from "../../redux/thunk/authThunk";
import { showSnackbar } from "../../redux/slice/snackbarSlice";

const AddAddress = () => {
  const [imageloading, setImageLoading] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [currentImageSetter, setCurrentImageSetter] = useState(null);
  const [currentImageLabel, setCurrentImageLabel] = useState(null);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [senderAddress, setSenderAddress] = useState(null);
  const [recieverAddress, setRecieverAddress] = useState(null);
  const [recieverNumber, setRecieverNumber] = useState(null);
  const [senderName, setSenderName] = useState(null);
  const [recieverName, setRecieverName] = useState(null);
  const [senderNumber, setSenderNumber] = useState(null);
  const [parcelImageURI, setParcelImageURI] = useState(null);

  const validateForm = () => {
    return null;
  };

  const handleSubmit = async () => {
    const data = {};

    const error = validateForm();
    if (error) {
      dispatch(
        showSnackbar({
          message: error,
          type: "error",
          time: 3000,
        })
      );
      return;
    }

    setIsLoading(true);
    try {
      const response = await dispatch(completeProfile(data));
      if (completeProfile.fulfilled.match(response)) {
        dispatch(
          showSnackbar({
            message: response?.payload?.message,
            type: "success",
            time: 3000,
          })
        );
        // Optionally navigate or reset form here
      } else {
        dispatch(
          showSnackbar({
            message: response?.payload?.message,
            type: "error",
            time: 3000,
          })
        );
      }
    } catch (err) {
      dispatch(
        showSnackbar({
          message: error,
          type: "error",
          time: 3000,
        })
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <MyStatusBar />
      {commonAppBar("Add Address", navigation)}
      <ScrollView contentContainerStyle={styles.container}>
        {inputBox?.(
          senderName,
          setSenderName,
          "Sender Name",
          "Enter Sender Name",
          false
        )}
        {inputBox?.(
          senderNumber,
          setSenderNumber,
          "Enter Sender Contact Number",
          "Sender Contact Number",
          false,
          "numeric"
        )}
        {textArea?.(
          senderAddress,
          setSenderAddress,
          "Flat no./Building/Street/Landmark/Locality",
          "Address",
          false
        )}
        {inputBox?.(
          recieverName,
          setRecieverName,
          "Enter Reciever Name",
          "Reciever Name",
          false
        )}

        {inputBox?.(
          recieverNumber,
          setRecieverNumber,
          "Enter Reciever Contact Number",
          "Reciever Contact Number",
          false,
          "numeric"
        )}
        {textArea?.(
          recieverAddress,
          setRecieverAddress,
          "Flat no./Building/Street/Landmark/Locality",
          "Address",
          false
        )}

        {imageSection?.()}
        <TouchableOpacity
          style={{ ...commonStyles.button, marginBottom: 50 }}
          onPress={handleSubmit}
        >
          <Text style={{ ...commonStyles.buttonText }}>Pay Now</Text>
        </TouchableOpacity>
        {fullImageContainer(modalVisible, setModalVisible, selectedImage)}
        <ImageBottomSheet
          currentImageSetter={currentImageSetter}
          currentImageLabel={currentImageLabel}
          isBottomSheetVisible={isBottomSheetVisible}
          setBottomSheetVisible={setBottomSheetVisible}
          setImageLoading={setImageLoading}
          user={user}
          dispatch={dispatch}
        />
      </ScrollView>
      {circularLoader(isLoading)}
    </View>
  );

  function imageSection() {
    return (
      <>
        {commonLabel("Upload Parcel Image", true)}
        <View style={styles.imageContainer}>
          {renderImageBox(
            "Parcel",
            setParcelImageURI,
            parcelImageURI,
            showFullImageFunction,
            setCurrentImageSetter,
            setCurrentImageLabel,
            setBottomSheetVisible,
            imageloading,
            setSelectedImage,
            setModalVisible
          )}
        </View>
      </>
    );
  }
};

export default AddAddress;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    padding: 20,
  },

  backButton: {
    marginLeft: 10,
    marginRight: 15,
  },

  photoDescription: {
    fontSize: 10,
    color: "#666",
    // marginBottom: 12,
  },
  imageContainer: {
    flexDirection: "row",
    // justifyContent: "space-between",
    gap: 20,
    marginTop: 20,
    flexWrap: "wrap",
  },
});
