import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Illustration */}
      <Image
        source={require("./assets/image.png")} // 👈 put your illustration here
        style={styles.image}
        resizeMode="contain"
      />
      
      {/* Title + Subtitle */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>Have a better sharing experience</Text>
      </View>
      
      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.createButton}>
          <Text style={styles.createButtonText}>Create an account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 40,
  },
  image: {
    width: "90%",
    height: 300,
    marginTop: 20,
  },
  textContainer: {
    alignItems: "center",
    // Removed marginTop and marginBottom to eliminate space
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    color: "#000000",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: "#8A8A8A",
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  createButton: {
    backgroundColor: "#009966",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 15,
  },
  createButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
  },
  loginButton: {
    borderWidth: 1,
    borderColor: "#009966",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  loginButtonText: {
    color: "#009966",
    fontSize: 16,
    fontWeight: "500",
  },
});