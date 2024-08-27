import React from "react";
import ToastManager from "react-native-toast-alert";
import { usePathname } from "expo-router";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function () {
  const pathname = usePathname();
  const bgColor = pathname === "/" ? "bg-green-500" : "bg-white";

  return (
    <GestureHandlerRootView>
      <SafeAreaView className={`flex-1 ${bgColor}`}>
        <ToastManager />
        <StatusBar />
        <Stack screenOptions={{ headerShown: false }} />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
