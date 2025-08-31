import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Modal,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const countries = [
  { code: "+91", name: "India", flag: "https://flagcdn.com/w20/in.png" },
  { code: "+1", name: "USA", flag: "https://flagcdn.com/w20/us.png" },
  { code: "+44", name: "UK", flag: "https://flagcdn.com/w20/gb.png" },
  { code: "+61", name: "Australia", flag: "https://flagcdn.com/w20/au.png" },
  { code: "+81", name: "Japan", flag: "https://flagcdn.com/w20/jp.png" },
  { code: "+49", name: "Germany", flag: "https://flagcdn.com/w20/de.png" },
  { code: "+33", name: "France", flag: "https://flagcdn.com/w20/fr.png" },
  { code: "+39", name: "Italy", flag: "https://flagcdn.com/w20/it.png" },
  { code: "+86", name: "China", flag: "https://flagcdn.com/w20/cn.png" },
  { code: "+971", name: "UAE", flag: "https://flagcdn.com/w20/ae.png" },
];

export default function App() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [countryModal, setCountryModal] = useState(false);
  const [gender, setGender] = useState("");
  const [genderModal, setGenderModal] = useState(false);
  const [accepted, setAccepted] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
      <ScrollView contentContainerStyle={styles.scroll}>
        
        {/* Back */}
        <View style={styles.header}>
          <Ionicons name="chevron-back" size={22} color="#000" />
          <Text style={styles.backText}>Back</Text>
        </View>
        
        {/* Title */}
        <Text style={styles.title}>Sign up with your email or{"\n"}phone number</Text>
        
        {/* Inputs */}
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#9E9E9E"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#9E9E9E"
          keyboardType="email-address"
        />
        
        {/* Phone input */}
        <View style={styles.phoneContainer}>
          <TouchableOpacity
            style={styles.flagWrap}
            onPress={() => setCountryModal(true)}
          >
            <Image source={{ uri: selectedCountry.flag }} style={styles.flag} />
            <Text style={styles.countryText}>{selectedCountry.name}</Text>
            <Ionicons name="chevron-down" size={16} color="#000" />
          </TouchableOpacity>
          <Text style={styles.phoneCode}>{selectedCountry.code}</Text>
          <TextInput
            style={styles.phoneInput}
            placeholder="Your mobile number"
            placeholderTextColor="#9E9E9E"
            keyboardType="phone-pad"
          />
        </View>
        
        {/* Gender dropdown */}
        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => setGenderModal(true)}
        >
          <Text style={[styles.dropdownText, gender ? {color:"#000"}:{}]}>
            {gender || "Select Gender"}
          </Text>
          <Ionicons name="chevron-down" size={18} color="#000" />
        </TouchableOpacity>
        
        {/* Terms */}
        <TouchableOpacity
          style={styles.terms}
          onPress={() => setAccepted(!accepted)}
        >
          <Ionicons
            name={accepted ? "checkmark-circle" : "ellipse-outline"}
            size={22}
            color={accepted ? "#00A86B" : "#999"}
          />
          <Text style={styles.termsText}>
            By signing up, you agree to the{" "}
            <Text style={styles.link}>Terms of service</Text> and{" "}
            <Text style={styles.link}>Privacy policy</Text>.
          </Text>
        </TouchableOpacity>
        
        {/* Sign Up */}
        <TouchableOpacity
          style={[styles.signupBtn, !accepted && {backgroundColor:"#ccc"}]}
          disabled={!accepted}
        >
          <Text style={styles.signupText}>Sign Up</Text>
        </TouchableOpacity>
        
        {/* Divider */}
        <View style={styles.divider}>
          <View style={styles.line} />
          <Text style={styles.or}>or</Text>
          <View style={styles.line} />
        </View>
        
        {/* Social Buttons Container */}
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialBtn}>
            <Image
              source={{ uri: "https://img.icons8.com/color/48/gmail-new.png" }}
              style={styles.socialIcon}
            />
            <Text style={styles.socialText}>Sign up with Gmail</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialBtn}>
            <Image
              source={{ uri: "https://img.icons8.com/color/48/facebook-new.png" }}
              style={styles.socialIcon}
            />
            <Text style={styles.socialText}>Sign up with Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialBtn}>
            <Ionicons name="logo-apple" size={20} color="#000" />
            <Text style={styles.socialText}>Sign up with Apple</Text>
          </TouchableOpacity>
        </View>
        
        {/* Footer */}
        <Text style={styles.footer}>
          Already have an account? <Text style={styles.signIn}>Sign in</Text>
        </Text>
      </ScrollView>
      
      {/* Country Modal */}
      <Modal visible={countryModal} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalSheet}>
            <Text style={styles.modalTitle}>Select Country</Text>
            <FlatList
              data={countries}
              keyExtractor={(item) => item.code}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.modalItem,
                    selectedCountry.code === item.code && styles.selectedItem
                  ]}
                  onPress={() => {
                    setSelectedCountry(item);
                    setCountryModal(false);
                  }}
                >
                  <Image source={{ uri: item.flag }} style={styles.flag} />
                  <Text style={styles.modalText}>
                    {item.name} ({item.code})
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
      
      {/* Gender Modal */}
      <Modal visible={genderModal} animationType="fade" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalSheet}>
            <Text style={styles.modalTitle}>Select Gender</Text>
            {["Male","Female","Other"].map((g)=>(
              <TouchableOpacity
                key={g}
                style={styles.modalItem}
                onPress={()=>{
                  setGender(g);
                  setGenderModal(false);
                }}
              >
                <Ionicons
                  name={gender === g ? "radio-button-on" : "radio-button-off"}
                  size={20}
                  color={gender === g ? "#009966" : "#999"}
                />
                <Text style={styles.modalText}>{g}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#fff" },
  scroll: { padding: 20, paddingBottom: 50 },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 25 },
  backText: { fontSize: 16, marginLeft: 4, color: "#000" },
  title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 25,
    color: "#222",
    lineHeight: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#DADADA",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 15,
    marginBottom: 15,
    backgroundColor: "#fff",
    height: 50,
  },
  phoneContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DADADA",
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
    height: 50,
    backgroundColor: "#fff",
  },
  flagWrap: { flexDirection: "row", alignItems: "center", marginRight: 8 },
  flag: { width: 24, height: 16, marginRight: 6, borderRadius: 2 },
  countryText: { fontSize: 14, color: "#444", marginRight: 6 },
  phoneCode: { fontSize: 15, marginRight: 5, fontWeight: "500", color: "#000" },
  phoneInput: { flex: 1, fontSize: 15, color: "#000" },
  dropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DADADA",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 25,
    height: 50,
    backgroundColor: "#fff",
  },
  dropdownText: { fontSize: 15, color: "#9E9E9E" },
  terms: { flexDirection: "row", alignItems: "flex-start", marginBottom: 25 },
  termsText: {
    marginLeft: 10,
    fontSize: 13,
    color: "#555",
    flex: 1,
    lineHeight: 18,
  },
  link: { color: "#009966", fontWeight: "500" },
  signupBtn: {
    backgroundColor: "#009966",
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 25,
    height: 50,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  signupText: { color: "#fff", fontSize: 16, fontWeight: "600" },
  divider: { flexDirection: "row", alignItems: "center", marginBottom: 25 },
  line: { flex: 1, height: 1, backgroundColor: "#E0E0E0" },
  or: { marginHorizontal: 10, color: "#888", fontSize: 14 },
  
  // New container for social buttons
  socialContainer: {
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  
  socialBtn: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DADADA",
    borderRadius: 10,
    marginBottom: 12,
    backgroundColor: "#fff",
    height: 50,
    width: "90%", // Set consistent width for all buttons
    paddingHorizontal: 15,
    justifyContent: "center", // Center content horizontally
  },
  socialIcon: { width: 22, height: 22, marginRight: 12 },
  socialText: { 
    fontSize: 15, 
    color: "#000", 
    fontWeight: "500",
    textAlign: "center", // Center text
  },
  footer: { 
    textAlign: "center", 
    marginTop: 20, 
    fontSize: 14, 
    color: "#444" 
  },
  signIn: { color: "#009966", fontWeight: "500" },
  modalOverlay: {
    flex:1,
    backgroundColor:"rgba(0,0,0,0.3)",
    justifyContent:"flex-end",
  },
  modalSheet: {
    backgroundColor:"#fff",
    borderTopLeftRadius:16,
    borderTopRightRadius:16,
    maxHeight:"60%",
    paddingVertical:15,
    paddingHorizontal:20,
  },
  modalTitle: {
    fontSize:18,
    fontWeight:"600",
    marginBottom:10,
    color:"#222"
  },
  modalItem: {
    flexDirection:"row",
    alignItems:"center",
    paddingVertical:12,
  },
  modalText: { fontSize:16, marginLeft:10, color:"#333" },
  selectedItem: {
    backgroundColor:"#f0f9f6",
    borderRadius:8
  }
});