import * as React from 'react';
import {Text} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import tw from '@lib/tailwind';

type TagBox = {
  width?: string;
  height?: string;
  text?: string | number;
  children?: React.ReactElement;
};

export default function TagContainer({width, height, text, children}: TagBox) {
  return (
    <BlurView
      blurType="dark"
      blurAmount={32}
      style={tw.style(
        `${width ? `w-[${width}]` : ''} ${
          height ? `h-[${height}]` : ''
        } rounded-[16px] flex-row justify-center items-center `,
      )}>
      {children}
      <Text
        style={tw.style('text-white', {
          fontFamily: 'ProximaNovaA-Regular',
        })}>
        {text}
      </Text>
    </BlurView>
  );
}
