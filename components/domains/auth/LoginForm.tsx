import React from "react";
import { useRouter } from "expo-router";
import { useForm, Controller } from "react-hook-form";
import { View } from "react-native";
import { AppInput } from "@components/app/AppInput";
import { AppLink } from "@components/app/AppLink";
import { AppButton } from "@components/app/AppButton";
import type { Credentials } from "types/auth";

export const LoginForm: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Credentials>();
  const router = useRouter();

  const goToCreateAccount = () => {
    return router.push("/auth/register");
  };

  const handleLogin = handleSubmit(async (formData) => {
    console.log(formData);
  });

  return (
    <View className="flex-1 flex-col justify-between pb-4">
      <View className="flex flex-col gap-y-4">
        <View>
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <AppInput placeholder="E-mail Address" error={errors.email} value={field.value} onChangeText={field.onChange} onBlur={field.onBlur} />
            )}
          />
        </View>
        <View>
          <Controller
            name="password"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <AppInput placeholder="Password" error={errors.password} value={field.value} onChangeText={field.onChange} onBlur={field.onBlur} />
            )}
          />
        </View>

        <View className="flex items-end">
          <AppLink title="Forgot your password?" classNames="text-sm" />
        </View>
      </View>

      <View className="flex flex-col gap-y-3">
        <AppButton title="Log in" classNames="bg-green-600" labelClassnames="text-sm" onPress={handleLogin} />
        <AppButton title="Create Account" classNames="bg-slate-200" labelClassnames="text-sm text-black" onPress={goToCreateAccount} />
      </View>
    </View>
  );
};
