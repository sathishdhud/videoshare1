import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons"; // for arrow icon
import { router } from "expo-router";

export default function App() {
  const handleNext = () => {
    router.push("/onboard3");
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

      {/* Illustration (local image from assets) */}
      <Image
        source={require("../assets/images/image1.png")} // 👈 your illustration image
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
    backgroundColor: "#00B16A", // inner green circle
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 5,
    borderColor: "#BFF0D6", // outer light green ring
  },
});
