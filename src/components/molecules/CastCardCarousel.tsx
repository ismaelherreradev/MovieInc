import * as React from 'react';
import {Dimensions, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import tw from '@lib/tailwind';

// Interfaces
import {ICastResult} from '@core/domain/cast.interface';

// Atoms
import CastProfile from '@atoms/CastProfile';

export default function CastProfileMolecule({cast}: {cast: ICastResult[]}) {
  return (
    <View style={tw`h-[150px]`}>
      <Carousel
        containerCustomStyle={tw`pl-[30px]`}
        activeSlideAlignment={'start'}
        data={cast}
        renderItem={({item}) => <CastProfile {...item} />}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={90}
      />
    </View>
  );
}
