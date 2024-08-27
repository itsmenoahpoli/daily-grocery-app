import React from "react";
import { Pressable, Text, type PressableProps } from "react-native";

type Props = {
  title: string;
  classNames?: string;
} & PressableProps;

export const AppLink: React.FC<Props> = (props) => {
  const classNames = `text-lg text-blue-700 font-medium ${props.classNames}`;

  return (
    <Pressable {...props}>
      <Text className={classNames}>{props.title}</Text>
    </Pressable>
  );
};
