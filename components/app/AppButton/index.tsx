import React from "react";
import { Pressable, Text, type PressableProps } from "react-native";

type Props = {
  title: string;
  classNames?: string;
  labelClassnames?: string;
} & PressableProps;

export const AppButton: React.FC<Props> = (props) => {
  const classNames = `h-[50px] flex justify-center items-center bg-blue-700 rounded-xl px-3 ${props.classNames}`;
  const labelClassnames = `text-lg text-white font-medium ${props.labelClassnames}`;

  return (
    <Pressable className={`${classNames}`} {...props}>
      <Text className={labelClassnames}>{props.title}</Text>
    </Pressable>
  );
};
