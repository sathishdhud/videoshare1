import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router"; // Import Expo Router

export default function OnBoard1() {
  const handleNext = () => {
    router.push("/onboard2"); // Navigate to onboard2
  };

  const handleSkip = () => {
    router.push("/welcomePage"); // Skip to welcome page
  };

  return (
    <View style={styles.container}>
      {/* Skip button */}
      <TouchableOpacity onPress={handleSkip}>
        <Text style={styles.skip}>Skip</Text>
      </TouchableOpacity>
      
      {/* Illustration */}
      <Image
        source={require("../assets/images/image.png")}
        style={styles.image}
        resizeMode="contain"
      />
      
      {/* Title */}
      <Text style={styles.title}>Anywhere you are</Text>
      
      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Sell houses easily with the help of Listenoryx and to make this line big
        I am writing more.
      </Text>
      
      {/* Circular Button with arrow icon */}
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <AntDesign name="arrowright" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  skip: {
    position: "absolute",
    top: 50,
    right: 20,
    fontSize: 16,
    color: "gray",
  },
  image: {
    width: "100%",
    height: 280,
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "gray",
    textAlign: "center",
    lineHeight: 20,
    paddingHorizontal: 15,
    marginBottom: 40,
  },
  nextButton: {
    position: "absolute",
    bottom: 60,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#00B16A",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 5,
    borderColor: "#BFF0D6",
  },
});