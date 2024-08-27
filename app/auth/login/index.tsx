import React from "react";
import { View, Text } from "react-native";
import { AppLogo, LoginForm } from "@components/index";

export default function () {
  return (
    <View className="flex-1 pt-[80px] px-5 bg-white">
      <View className="flex items-center mb-8">
        <AppLogo />
      </View>
      <Text className="text-[32px] font-medium mb-2">Login</Text>
      <Text className="text-xs text-gray-600 mb-4">Provide your account credentials and start ordering the groceries you need!</Text>
      <LoginForm />
    </View>
  );
}
