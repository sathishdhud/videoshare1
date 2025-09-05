import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Platform,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import Modal from "react-native-modal";
import { router } from "expo-router";

const AVATAR_SIZE = 120;
const CAM_SIZE = 36;

// 📌 Country list (10 countries)
const COUNTRIES = [
  { code: "BD", name: "Bangladesh", dial: "+880", flag: "https://flagcdn.com/w40/bd.png" },
  { code: "IN", name: "India", dial: "+91", flag: "https://flagcdn.com/w40/in.png" },
  { code: "US", name: "United States", dial: "+1", flag: "https://flagcdn.com/w40/us.png" },
  { code: "GB", name: "United Kingdom", dial: "+44", flag: "https://flagcdn.com/w40/gb.png" },
  { code: "PK", name: "Pakistan", dial: "+92", flag: "https://flagcdn.com/w40/pk.png" },
  { code: "CA", name: "Canada", dial: "+1", flag: "https://flagcdn.com/w40/ca.png" },
  { code: "AU", name: "Australia", dial: "+61", flag: "https://flagcdn.com/w40/au.png" },
  { code: "SA", name: "Saudi Arabia", dial: "+966", flag: "https://flagcdn.com/w40/sa.png" },
  { code: "MY", name: "Malaysia", dial: "+60", flag: "https://flagcdn.com/w40/my.png" },
  { code: "SG", name: "Singapore", dial: "+65", flag: "https://flagcdn.com/w40/sg.png" },
];

export default function ProfileScreen() {
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");

  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]); // default Bangladesh
  const [isModalVisible, setModalVisible] = useState(false);

  const handleBack = () => {
    router.back();
  };

  const handleSave = () => {
    console.log({
      fullName,
      mobile,
      email,
      street,
      city,
      district,
      country: selectedCountry,
    });
    alert("Profile Saved!");
  };

  const handleCancel = () => {
    setFullName("");
    setMobile("");
    setEmail("");
    setStreet("");
    setCity("");
    setDistrict("");
    alert("Cancelled");
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const selectCountry = (country) => {
    setSelectedCountry(country);
    toggleModal();
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backHit} onPress={handleBack}>
            <Ionicons name="chevron-back" size={24} color="#333" />
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.headerText}>Profile</Text>
          <View style={{ width: 50 }} />
        </View>

        {/* Avatar + Camera */}
        <View style={styles.avatarWrap}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={60} color="#BDBDBD" />
          </View>
          <TouchableOpacity style={styles.cameraBtn} activeOpacity={0.8}>
            <Ionicons name="camera" size={18} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Form */}
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor="#B6B6B6"
            value={fullName}
            onChangeText={setFullName}
          />

          {/* Country Code Selector */}
          <View style={styles.phoneRow}>
            <TouchableOpacity style={styles.flagBox} onPress={toggleModal}>
              <Image source={{ uri: selectedCountry.flag }} style={styles.flag} />
              <Ionicons
                name="chevron-down"
                size={16}
                color="#444"
                style={{ marginLeft: 4 }}
              />
            </TouchableOpacity>

            <View style={styles.vDivider} />

            <Text style={styles.countryCode}>{selectedCountry.dial}</Text>

            <TextInput
              style={styles.phoneInput}
              placeholder="Your mobile number"
              placeholderTextColor="#B6B6B6"
              keyboardType="phone-pad"
              value={mobile}
              onChangeText={setMobile}
            />
          </View>

          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#B6B6B6"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            placeholder="Street"
            placeholderTextColor="#B6B6B6"
            value={street}
            onChangeText={setStreet}
          />

          <View style={styles.dropdownRow}>
            <TextInput
              style={styles.dropdownInput}
              placeholder="City"
              placeholderTextColor="#B6B6B6"
              value={city}
              onChangeText={setCity}
            />
            <Ionicons name="chevron-down" size={18} color="#3D3D3D" />
          </View>

          <View style={styles.dropdownRow}>
            <TextInput
              style={styles.dropdownInput}
              placeholder="District"
              placeholderTextColor="#B6B6B6"
              value={district}
              onChangeText={setDistrict}
            />
            <Ionicons name="chevron-down" size={18} color="#3D3D3D" />
          </View>
        </View>

        {/* Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.cancelBtn} onPress={handleCancel}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
            <Text style={styles.saveText}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Country Code Modal */}
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Select Country</Text>
          <FlatList
            data={COUNTRIES}
            keyExtractor={(item) => item.code}
            showsVerticalScrollIndicator={false} // ✅ Hides scrollbar
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.countryRow}
                onPress={() => selectCountry(item)}
              >
                <Image source={{ uri: item.flag }} style={styles.modalFlag} />
                <Text style={styles.countryName}>{item.name}</Text>
                <Text style={styles.dialCode}>{item.dial}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#fff" },
  scrollView: { flex: 1 },
  content: {
    paddingTop: 6,
    paddingHorizontal: 18,
    paddingBottom: 24,
    alignItems: "center",
    flexGrow: 1,
  },

  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 18,
  },
  backHit: { flexDirection: "row", alignItems: "center" },
  backText: { fontSize: 16, color: "#333", marginLeft: 2 },
  headerText: { fontSize: 20, fontWeight: "600", color: "#333" },

  avatarWrap: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    marginTop: 6,
    marginBottom: 20,
  },
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    backgroundColor: "#D9D9D9",
    alignItems: "center",
    justifyContent: "center",
  },
  cameraBtn: {
    position: "absolute",
    right: -3,
    bottom: -3,
    width: CAM_SIZE,
    height: CAM_SIZE,
    borderRadius: CAM_SIZE / 2,
    backgroundColor: "#0A8754",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#fff",
    elevation: 2,
  },

  form: { width: "100%", marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#CFCFCF",
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 50,
    fontSize: 15,
    color: "#111",
    marginBottom: 18,
  },

  phoneRow: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#CFCFCF",
    borderRadius: 12,
    height: 50,
    paddingHorizontal: 10,
    marginBottom: 18,
  },
  flagBox: { flexDirection: "row", alignItems: "center", paddingRight: 6 },
  flag: { width: 24, height: 16, borderRadius: 3 },
  vDivider: {
    width: 1,
    height: "70%",
    backgroundColor: "#E1E1E1",
    marginRight: 8,
  },
  countryCode: { fontSize: 16, fontWeight: "600", color: "#222", marginRight: 6 },
  phoneInput: { flex: 1, fontSize: 15, color: "#111" },

  dropdownRow: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#CFCFCF",
    borderRadius: 12,
    height: 50,
    paddingHorizontal: 14,
    marginBottom: 18,
  },
  dropdownInput: { flex: 1, fontSize: 15, color: "#111" },

  buttonRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
    marginBottom: Platform.OS === "ios" ? 10 : 0,
  },
  cancelBtn: {
    flex: 1,
    height: 50,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#0A8754",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
    backgroundColor: "#fff",
  },
  saveBtn: {
    flex: 1,
    height: 50,
    borderRadius: 12,
    backgroundColor: "#0A8754",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },
  cancelText: { fontSize: 16, color: "#3A3A3A", fontWeight: "500" },
  saveText: { fontSize: 16, color: "#fff", fontWeight: "600" },

  // Modal Styles
  modal: { justifyContent: "flex-end", margin: 0 },
  modalContent: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
    maxHeight: "60%",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
    textAlign: "center",
  },
  countryRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  modalFlag: { width: 28, height: 20, borderRadius: 4, marginRight: 12 },
  countryName: { fontSize: 16, flex: 1, color: "#222" },
  dialCode: { fontSize: 16, fontWeight: "600", color: "#0A8754" },
});
