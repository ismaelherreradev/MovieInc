import * as React from 'react';
import {View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import Config from 'react-native-config';
import tw from '@lib/tailwind';

// Interfaces
import {ICastResult} from '@core/domain/cast.interface';

export default function CastProfileAtom({
  profile_path,
  original_name,
}: ICastResult) {
  return (
    <View style={tw`flex-1 w-[80px] h-[100px] rounded-[15px]`}>
      <FastImage
        style={tw`flex-1 w-[80px] h-[100px] rounded-[15px]`}
        source={{
          uri: `${Config.TMDB_IMAGE}${profile_path}`,
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={tw`flex-1`}>
        <Text
          style={tw.style(
            'text-[12px] text-center leading-[18px] tracking-[0.7px]',
            {
              fontFamily: 'ProximaNovaA-Regular',
            },
          )}>
          {original_name}
        </Text>
      </View>
    </View>
  );
}
