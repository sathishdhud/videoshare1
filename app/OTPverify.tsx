import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function OTPInputScreen() {
  const [otp, setOtp] = useState(["", "", "", ""]);

  // Get index of first empty slot
  const getEmptyIndex = (otpArray) => otpArray.findIndex((val) => val === "");
  // Get index of last filled slot
  const getLastFilledIndex = (otpArray) =>
    otpArray.reduce((lastIndex, val, idx) => (val !== "" ? idx : lastIndex), -1);

  // Handle number press
  const handleChange = (value, index) => {
    if (index === -1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  // Handle backspace
  const handleBackspace = (index) => {
    if (index === -1) return;
    const newOtp = [...otp];
    newOtp[index] = "";
    setOtp(newOtp);
  };

  // Handle Verify button press
  const handleVerify = () => {
    const code = otp.join("");
    console.log("Entered OTP:", code);
    alert(`OTP Entered: ${code}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="chevron-back" size={28} color="#000" />
        <Text style={styles.headerText}>Back</Text>
      </View>

      {/* Title */}
      <Text style={styles.title}>Phone verification</Text>
      <Text style={styles.subtitle}>Enter your OTP code</Text>

      {/* OTP Input Fields */}
      <View style={styles.otpContainer}>
        {otp.map((digit, idx) => (
          <View key={idx} style={styles.otpBox}>
            <Text style={styles.otpText}>{digit}</Text>
          </View>
        ))}
      </View>

      {/* Resend */}
      <Text style={styles.resendText}>
        Didn’t receive code? <Text style={styles.resendLink}>Resend again</Text>
      </Text>

      {/* Bottom Section */}
      <View style={styles.bottomContainer}>
        {/* Verify Button */}
        <TouchableOpacity style={styles.verifyBtn} onPress={handleVerify}>
          <Text style={styles.verifyText}>Verify</Text>
        </TouchableOpacity>

        {/* Custom Keyboard */}
        <View style={styles.keyboard}>
          <View style={styles.row}>
            <Key label="1" sub="" onPress={() => handleChange("1", getEmptyIndex(otp))} />
            <Key label="2" sub="ABC" onPress={() => handleChange("2", getEmptyIndex(otp))} />
            <Key label="3" sub="DEF" onPress={() => handleChange("3", getEmptyIndex(otp))} />
          </View>
          <View style={styles.row}>
            <Key label="4" sub="GHI" onPress={() => handleChange("4", getEmptyIndex(otp))} />
            <Key label="5" sub="JKL" onPress={() => handleChange("5", getEmptyIndex(otp))} />
            <Key label="6" sub="MNO" onPress={() => handleChange("6", getEmptyIndex(otp))} />
          </View>
          <View style={styles.row}>
            <Key label="7" sub="PQRS" onPress={() => handleChange("7", getEmptyIndex(otp))} />
            <Key label="8" sub="TUV" onPress={() => handleChange("8", getEmptyIndex(otp))} />
            <Key label="9" sub="WXYZ" onPress={() => handleChange("9", getEmptyIndex(otp))} />
          </View>
          <View style={styles.row}>
            <Key label="." sub="" transparent />
            <Key label="0" sub="+" onPress={() => handleChange("0", getEmptyIndex(otp))} />
            <Key
              label={<Ionicons name="backspace-outline" size={26} color="#000" />}
              sub=""
              transparent
              onPress={() => handleBackspace(getLastFilledIndex(otp))}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const Key = ({ label, sub, onPress, transparent }) => {
  return (
    <TouchableOpacity
      style={[styles.key, transparent && { backgroundColor: "transparent", elevation: 0 }]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={styles.keyText}>{label}</Text>
      {sub ? <Text style={styles.subText}>{sub}</Text> : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 16,
    marginLeft: 5,
    color: "#000",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 20,
    color: "#000",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 10,
    color: "#888",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },
  otpBox: {
    width: 55,
    height: 60,
    borderWidth: 1.5,
    borderColor: "#ccc",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
  },
  otpText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  resendText: {
    textAlign: "center",
    fontSize: 15,
    color: "#666",
  },
  resendLink: {
    color: "#00A86B",
    fontWeight: "600",
  },
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
  },
  verifyBtn: {
    backgroundColor: "#00894C",
    paddingVertical: 14,
    borderRadius: 8,
    marginHorizontal: 20,
    marginBottom: 8,
    alignItems: "center",
  },
  verifyText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  keyboard: {
    backgroundColor: "#C5C9D0E5",
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    paddingVertical: 6,
    borderTopWidth: 1,
    borderColor: "#DADADA",
    width: "100%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 4,
  },
  key: {
    backgroundColor: "#fff",
    width: 120,
    height: 55,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },
  keyText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
  },
  subText: {
    fontSize: 11,
    color: "#666",
  },
});
