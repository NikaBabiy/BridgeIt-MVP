import * as React from "react";
import { View, Text } from "react-native";

const StatusBar: React.FC = () => {
  return (
    <View className="h-10 px-4 flex-row justify-between items-center">
      <View className="flex-1">
        <Text className="font-medium text-black">9:41</Text>
      </View>
      <View className="flex-row items-center">
        <View className="flex-row mr-2">
          <View className="w-1 h-3 bg-black rounded-sm mr-0.5" />
          <View className="w-1 h-4 bg-black rounded-sm mr-0.5" />
          <View className="w-1 h-5 bg-black rounded-sm mr-0.5" />
          <View className="w-1 h-6 bg-black rounded-sm" />
        </View>
        <View className="mr-2">
          <Text className="text-black">􀙇</Text>
        </View>
        <View>
          <Text className="text-black">􀛨</Text>
        </View>
      </View>
    </View>
  );
};

export default StatusBar;
