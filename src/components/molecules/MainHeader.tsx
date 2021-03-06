import * as React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import tw from '@lib/tailwind';

// Molecules
import HeaderTitle from '@atoms/HeaderTitle';

export default function MainHeader() {
  return (
    <HeaderTitle>
      <TouchableOpacity style={tw`flex-row  items-end`}>
        <Text
          style={tw.style(
            'text-[#3544C4] text-[23px] tracking-[0.7px] underline font-bold',
            {fontFamily: 'ProximaNovaA-Bold'},
          )}>
          Now Showing
        </Text>
      </TouchableOpacity>
    </HeaderTitle>
  );
}
