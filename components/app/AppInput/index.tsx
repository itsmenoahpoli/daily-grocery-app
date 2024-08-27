import React from "react";
import { View, Text, TextInput, type TextInputProps } from "react-native";

type Props = {
  error?: any;
} & TextInputProps;

const ErrorLabel: React.FC<{ error?: any }> = () => {
  return <Text></Text>;
};

export const AppInput: React.FC<Props> = (props) => {
  if (props.error) console.log(props.error);

  return (
    <View className="flex flex-col gap-y-3">
      <TextInput className="h-[50px] bg-slate-100 rounded-xl px-3" autoCapitalize="none" {...props} />
      {props.error ? <ErrorLabel error={props.error} /> : null}
    </View>
  );
};
