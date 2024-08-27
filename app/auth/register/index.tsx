import React from "react";
import { View, Text } from "react-native";
import { AppLogo, RegisterForm } from "@components/index";

export default function () {
  return (
    <View className="flex-1 pt-[80px] px-5 bg-white">
      <View className="flex items-center mb-8">
        <AppLogo />
      </View>
      <Text className="text-[32px] font-medium mb-2">Create Account</Text>
      <Text className="text-xs text-gray-600 mb-4">Please provide the needed details for your account</Text>
      <RegisterForm />
    </View>
  );
}
