import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function IndexScreen() {
  useEffect(() => {
    // Navigate to onboarding after a brief delay
    const timer = setTimeout(() => {
      router.replace('/onboard');
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {/* You can add a splash screen or loading indicator here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});