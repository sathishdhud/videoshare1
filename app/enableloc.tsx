import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing,
  Alert,
  ActivityIndicator,
  Platform,
  Modal,
  Linking,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";

const { width, height } = Dimensions.get("window");

export default function App() {
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [locationDetails, setLocationDetails] = useState(null);
  const [mapRegion, setMapRegion] = useState(null);
  const pulseAnim = React.useRef(new Animated.Value(1)).current;
  const slideAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.1,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start();
    Animated.timing(slideAnim, {
      toValue: 1,
      duration: 800,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  }, []);

  const requestLocationPermission = async () => {
    setLoading(true);
    
    try {
      // Request permission
      const { status } = await Location.requestForegroundPermissionsAsync();
      
      if (status !== 'granted') {
        Alert.alert(
          "Permission Denied",
          "Location permission is required to use this feature. Please enable it in your device settings.",
          [
            { text: "Cancel", style: "cancel" },
            { text: "Open Settings", onPress: () => Linking.openSettings() }
          ]
        );
        setLoading(false);
        return;
      }
      
      // Get current location
      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });
      
      // Get location details using reverse geocoding
      const address = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      
      // Set map region
      const region = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      };
      setMapRegion(region);
      
      if (address && address.length > 0) {
        setLocationDetails(address[0]);
        setModalVisible(true);
      } else {
        // Fallback if no address details found
        setLocationDetails({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
        setModalVisible(true);
      }
      
    } catch (error) {
      Alert.alert(
        "Error",
        "Failed to get your location. Please try again later.",
        [{ text: "OK" }]
      );
      console.error("Location error:", error);
    } finally {
      setLoading(false);
    }
  };

  const renderLocationDetails = () => {
    if (!locationDetails) return null;
    
    return (
      <View style={styles.detailsContainer}>
        <View style={styles.locationIconContainer}>
          <Ionicons name="location-sharp" size={24} color="#00B16A" />
        </View>
        
        <Text style={styles.detailsTitle}>Your Location</Text>
        
        {/* Map View */}
        <View style={styles.mapContainer}>
          {mapRegion && (
            <MapView
              style={styles.map}
              region={mapRegion}
              provider="google"
              showsUserLocation={true}
              showsMyLocationButton={false}
            >
              <Marker
                coordinate={{
                  latitude: mapRegion.latitude,
                  longitude: mapRegion.longitude,
                }}
                title="Your Location"
                description={locationDetails.city || "Current Location"}
              >
                <View style={styles.markerContainer}>
                  <View style={styles.markerRing} />
                  <View style={styles.markerDot} />
                </View>
              </Marker>
            </MapView>
          )}
        </View>
        
        {/* Location Details */}
        <View style={styles.detailsInfo}>
          <View style={styles.detailsRow}>
            <Text style={styles.detailsLabel}>Coordinates:</Text>
            <Text style={styles.detailsValue}>
              {locationDetails.latitude?.toFixed(6) || 'N/A'}, {locationDetails.longitude?.toFixed(6) || 'N/A'}
            </Text>
          </View>
          
          {locationDetails.city && (
            <View style={styles.detailsRow}>
              <Text style={styles.detailsLabel}>City:</Text>
              <Text style={styles.detailsValue}>{locationDetails.city}</Text>
            </View>
          )}
          
          {locationDetails.region && (
            <View style={styles.detailsRow}>
              <Text style={styles.detailsLabel}>State/Region:</Text>
              <Text style={styles.detailsValue}>{locationDetails.region}</Text>
            </View>
          )}
          
          {locationDetails.country && (
            <View style={styles.detailsRow}>
              <Text style={styles.detailsLabel}>Country:</Text>
              <Text style={styles.detailsValue}>{locationDetails.country}</Text>
            </View>
          )}
          
          {locationDetails.postalCode && (
            <View style={styles.detailsRow}>
              <Text style={styles.detailsLabel}>Postal Code:</Text>
              <Text style={styles.detailsValue}>{locationDetails.postalCode}</Text>
            </View>
          )}
          
          {locationDetails.street && (
            <View style={styles.detailsRow}>
              <Text style={styles.detailsLabel}>Street:</Text>
              <Text style={styles.detailsValue}>{locationDetails.street}</Text>
            </View>
          )}
          
          {locationDetails.district && (
            <View style={styles.detailsRow}>
              <Text style={styles.detailsLabel}>District:</Text>
              <Text style={styles.detailsValue}>{locationDetails.district}</Text>
            </View>
          )}
        </View>
        
        <TouchableOpacity 
          style={styles.confirmButton}
          onPress={() => setModalVisible(false)}
        >
          <Text style={styles.confirmButtonText}>Confirm Location</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ImageBackground
      source={require("../assets/images/map.png")}
      style={styles.background}
    >
      <View style={styles.overlay} />
      
      <Animated.View 
        style={[
          styles.card,
          {
            transform: [
              {
                translateY: slideAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [100, 0],
                }),
              },
            ],
            opacity: slideAnim,
          },
        ]}
      >
        <Animated.View
          style={[
            styles.iconWrapper,
            {
              transform: [{ scale: pulseAnim }],
            },
          ]}
        >
          <View style={styles.outerRing} />
          <View style={styles.middleRing} />
          <View style={styles.innerCircle}>
            <Ionicons name="location" size={28} color="#00B16A" />
          </View>
        </Animated.View>
        <Text style={styles.title}>Enable your location</Text>
        <Text style={styles.subtitle}>
          Choose your location to start finding requests around you
        </Text>
        <TouchableOpacity 
          style={styles.button}
          activeOpacity={0.8}
          onPress={requestLocationPermission}
          disabled={loading}
        >
          <View style={styles.buttonGradient}>
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Use my location</Text>
            )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6}>
          <Text style={styles.skip}>Skip for now</Text>
        </TouchableOpacity>
      </Animated.View>
      
      {/* Location Details Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            {renderLocationDetails()}
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingVertical: 40,
    paddingHorizontal: 35,
    alignItems: "center",
    width: "85%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 8,
    justifyContent: "center",
    alignSelf: "center",
  },
  iconWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  outerRing: {
    position: "absolute",
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "rgba(0,177,106,0.08)",
  },
  middleRing: {
    position: "absolute",
    width: 85,
    height: 85,
    borderRadius: 42.5,
    backgroundColor: "rgba(0,177,106,0.12)",
  },
  innerCircle: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    backgroundColor: "#E8F9F1",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#00B16A",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#2C3E50",
    textAlign: "center",
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 15,
    color: "#7F8C8D",
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 22,
  },
  button: {
    borderRadius: 12,
    width: "100%",
    marginBottom: 20,
    shadowColor: "#00B16A",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonGradient: {
    backgroundColor: "#00B16A",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
  skip: {
    color: "#00B16A",
    fontSize: 15,
    fontWeight: "500",
    textDecorationLine: "underline",
    marginTop: 5,
  },
  // Modal styles
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    width: "90%",
    maxHeight: height * 0.8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 8,
  },
  detailsContainer: {
    alignItems: "center",
    padding: 20,
  },
  locationIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#E8F9F1",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "#00B16A",
  },
  detailsTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#2C3E50",
    marginBottom: 20,
    textAlign: "center",
  },
  // Map styles
  mapContainer: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  markerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  markerRing: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "rgba(0,177,106,0.2)",
    position: "absolute",
  },
  markerDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#00B16A",
  },
  // Location details styles
  detailsInfo: {
    width: "100%",
    marginBottom: 20,
  },
  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  detailsLabel: {
    fontSize: 15,
    fontWeight: "500",
    color: "#7F8C8D",
    flex: 1,
  },
  detailsValue: {
    fontSize: 15,
    color: "#2C3E50",
    flex: 2,
    textAlign: "right",
  },
  confirmButton: {
    backgroundColor: "#00B16A",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
    width: "100%",
  },
  confirmButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});