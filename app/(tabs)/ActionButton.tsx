import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";

const ActionButton: React.FC = () => {
  const handlePress = () => {
    console.log("Let's Start button pressed");
    // Add navigation or action logic here
  };

  const handIconXml = `
    <svg width="31" height="42" viewBox="0 0 31 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.1752 15.1413C12.8653 13.9133 12.4561 12.343 11.26 11.6344C10.064 10.9258 8.53454 11.346 7.84442 12.574L3.67702 19.9849C0.224755 26.1242 2.27344 33.975 8.25281 37.5195C14.2322 41.0641 21.8785 38.9606 25.3308 32.8214L28.6647 26.8927C29.3548 25.6646 28.9456 24.0943 27.7496 23.3857C26.5535 22.6772 25.0241 23.0974 24.334 24.3254L25.1674 22.8432C25.8576 21.6152 25.4483 20.0449 24.2523 19.3363C23.0562 18.6277 21.5268 19.0479 20.8367 20.2759L21.6702 18.7937C22.3603 17.5657 21.951 15.9954 20.755 15.2868C19.559 14.5782 18.0296 14.9984 17.3394 16.2264L23.1738 5.85117C23.8639 4.62315 23.4546 3.05283 22.2586 2.34426C21.0626 1.63569 19.5331 2.05586 18.843 3.28388L9.25798 20.3298L12.1752 15.1413Z" stroke="white" stroke-width="3.72414" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;

  return (
    <TouchableOpacity
      onPress={handlePress}
      className="bg-blue-500 rounded-full py-4 px-6 flex-row items-center justify-center self-center"
    >
      <View className="flex-row items-center">
        <Text className="text-white text-lg font-semibold">Lets Start</Text>
        <View className="ml-2">
          <SvgXml xml={handIconXml} width={27} height={37} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ActionButton;
