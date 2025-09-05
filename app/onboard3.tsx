import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";

export default function Onboard2() {
  const handleNext = () => {
    router.push("/welcomePage");
  };

  const handleSkip = () => {
    router.push("/welcomePage");
  };

  return (
    <View style={styles.container}>
      {/* Skip button */}
      <TouchableOpacity onPress={handleSkip}>
        <Text style={styles.skip}>Skip</Text>
      </TouchableOpacity>
      
      {/* Illustration - using a different image for variety */}
      <Image
        source={require("../assets/images/image2.png")} // Make sure to add this image
        style={styles.image}
        resizeMode="contain"
      />
      
      {/* Title */}
      <Text style={styles.title}>At Your Fingertips</Text>
      
      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Access all your property listings and client information anytime, anywhere with our intuitive mobile app.
      </Text>
      
      {/* Circular Button with arrow icon */}
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <AntDesign name="arrowright" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

// Reusing the same styles as the first screen
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