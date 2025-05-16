import * as React from "react";
import { View, Text } from "react-native";
import { SvgXml } from "react-native-svg";

const WelcomeHeader: React.FC = () => {
  const imageXml = `
    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_31_84" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="3" width="33" height="27">
        <path d="M11.9625 12.1216C11.9625 13.9625 10.5299 15.4548 8.76265 15.4548C6.99541 15.4548 5.56277 13.9625 5.56277 12.1216C5.56277 10.2808 6.99541 8.78843 8.76265 8.78843C10.5299 8.78843 11.9625 10.2808 11.9625 12.1216Z" fill="#B4DBFF"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.500727 6.50037C0.500727 4.6595 1.93336 3.16718 3.7006 3.16718H29.2996C31.0668 3.16718 32.4995 4.6595 32.4995 6.50037V26.4996C32.4995 28.3404 31.0668 29.8328 29.2996 29.8328H27.1874C27.1804 29.8328 27.1734 29.8328 27.1664 29.8328H4.42988C4.42385 29.8328 4.41783 29.8328 4.41181 29.8328H3.7006C1.93336 29.8328 0.500727 28.3404 0.500727 26.4996V6.50037ZM3.7006 5.66707H29.2996C29.7414 5.66707 30.0996 6.04016 30.0996 6.50037V16.8868L23.1474 9.83361L11.3198 21.8331L7.83567 18.2984L2.90063 23.3052V6.50037C2.90063 6.04015 3.25879 5.66707 3.7006 5.66707Z" fill="#B4DBFF"/>
      </mask>
      <g mask="url(#mask0_31_84)">
        <rect x="0.500488" y="0.499695" width="31.9987" height="31.9987" fill="#B4DBFF"/>
      </g>
    </svg>
  `;

  return (
    <View className="mt-8">
      <View className="mb-6">
        <Text className="text-3xl font-bold text-black">
          Welcome to Bridge-IT!
        </Text>
      </View>
      <View className="items-center mb-6">
        <View className="w-32 h-32 justify-center items-center">
          <SvgXml xml={imageXml} width={32} height={32} />
        </View>
      </View>
      <View className="mb-12">
        <Text className="text-lg text-center text-gray-600">
          Join us and make your life as a west banker better!
        </Text>
      </View>
    </View>
  );
};

export default WelcomeHeader;
