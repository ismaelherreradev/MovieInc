import * as React from 'react';
import {View, Text} from 'react-native';
import tw from '@lib/tailwind';

export default function HeaderAtom({children}: {children: JSX.Element}) {
  return (
    <View style={tw`ml-[30px] my-[30px]`}>
      <Text
        style={tw.style(
          'text-[#272F4B] text-[23px] tracking-[0.7px] leading-[36px] font-bold',
          {fontFamily: 'ProximaNovaA-Bold'},
        )}>
        What would you like{'\n'}
        to see today? {children}
      </Text>
    </View>
  );
}
