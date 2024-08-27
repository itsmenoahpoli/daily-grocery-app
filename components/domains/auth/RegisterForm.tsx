import React from "react";
import { useRouter } from "expo-router";
import { View } from "react-native";
import { AppInput } from "@components/app/AppInput";
import { AppButton } from "@components/app/AppButton";

export const RegisterForm: React.FC = () => {
  const router = useRouter();

  const goToLoginAccount = () => {
    return router.push("/auth/login");
  };

  return (
    <View className="flex-1 flex-col justify-between pb-4">
      <View className="flex flex-col gap-y-4">
        <AppInput placeholder="E-mail Address" />
        <AppInput placeholder="Password" />
      </View>

      <View className="flex flex-col gap-y-3">
        <AppButton title="Create Account" classNames="bg-green-600" labelClassnames="text-sm" />
        <AppButton title="Back to login" classNames="bg-slate-200" labelClassnames="text-sm text-black" onPress={goToLoginAccount} />
      </View>
    </View>
  );
};
