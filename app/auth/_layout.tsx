import React from "react";
import { Stack } from "expo-router";
import { Text } from "react-native";

export default function () {
  return <Stack screenOptions={{ headerShown: false }} />;
}
