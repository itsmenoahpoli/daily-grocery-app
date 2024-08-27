import React from "react";
import { useRouter } from "expo-router";
import { SplashScreen } from "expo-router";
import { View, Text, ActivityIndicator } from "react-native";
import { AppLogo } from "@components/index";

SplashScreen.hideAsync();

export default function () {
  const router = useRouter();

  const onLoadRedirect = () => {
    setTimeout(() => {
      router.push("/auth/register");
    }, 200);
  };

  React.useLayoutEffect(() => {
    onLoadRedirect();
  }, []);

  return (
    <View className="flex-1 flex-col gap-y-5 justify-center items-center bg-green-500 relative">
      <AppLogo height={200} width={200} />
      <Text className="text-white text-2xl font-bold">DailyGroceryApp</Text>
      <ActivityIndicator color="white" />

      <Text className="text-white text-sm absolute bottom-5 left-3">v1.0.0 (beta)</Text>
    </View>
  );
}
