import * as React from "react";
import { View } from "react-native";
import StatusBar from "./StatusBar";
import WelcomeHeader from "./WelcomeHeader";
import ActionButton from "./ActionButton";

const WelcomeScreen: React.FC = () => {
  return (
    <View className="flex-1 bg-white">
      <StatusBar />
      <View className="flex-1 px-6 pt-8">
        <WelcomeHeader />
        <ActionButton />
      </View>
    </View>
  );
};

export default WelcomeScreen;
