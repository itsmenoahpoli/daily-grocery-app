import React from "react";
import { View, Image } from "react-native";
import { ASSETS } from "@constants/assets.constant";

type Props = {
  height?: number;
  width?: number;
};

export const AppLogo: React.FC<Props> = (props) => {
  return <Image className={`h-[120px] w-[120px]`} source={ASSETS.APP_LOGO} resizeMode="contain" resizeMethod="resize" />;
};
