import * as React from 'react';
import {View, Text} from 'react-native';
import {BlurView} from 'expo-blur';
import tw from '@lib/tailwind';

type TagBox = {
  width?: string;
  height?: string;
  text?: string | number;
  children?: React.ReactElement;
  style?: string;
};

export default function TagContainer({
  width,
  height,
  text,
  children,
  style,
}: TagBox) {
  return (
    <View
      style={tw.style(
        `${width ? `w-[${width}]` : ''} ${
          height ? `h-[${height}]` : ''
        } overflow-hidden  rounded-[16px] ${style}`,
      )}>
      <BlurView
        intensity={80}
        tint="dark"
        style={tw.style(
          `${width ? `w-[${width}]` : ''} ${
            height ? `h-[${height}]` : ''
          } flex-row justify-center items-center `,
        )}>
        {children}
        <Text
          style={tw.style('text-white', {
            fontFamily: 'ProximaNovaA-Regular',
          })}>
          {text}
        </Text>
      </BlurView>
    </View>
  );
}
