import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';

export default function RootLayout() {
  useFrameworkReady();

  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="onboard" />
        <Stack.Screen name="onboard2" />
        <Stack.Screen name="onboard3" />
        <Stack.Screen name="welcomePage" />
        <Stack.Screen name="signupPage" />
        <Stack.Screen name="setPassword" />
        <Stack.Screen name="OTPverify" />
        <Stack.Screen name="enableloc" />
        <Stack.Screen name="Home" />
        <Stack.Screen name="EditProfile" />
        <Stack.Screen name="Notification" />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}