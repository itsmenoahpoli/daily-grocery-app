import React from "react";
import { Stack, Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function () {
  return (
    <SafeAreaView className="flex-1 bg-green-500">
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaView>
  );
}
