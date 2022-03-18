import * as React from 'react';
import {Dimensions, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import tw from '@lib/tailwind';

// Interfaces
import {IResult} from '@core/domain/movies.interface';

// Atoms
import MovieCardAtom from '@atoms/MovieCard';

export default function MovieCardCarouselMolecule({
  movies,
}: {
  movies: IResult[];
}) {
  return (
    <View style={tw`h-[300px]`}>
      <Carousel
        containerCustomStyle={tw`pl-[30px]`}
        activeSlideAlignment={'start'}
        loop={true}
        loopClonesPerSide={5}
        data={movies}
        renderItem={({item}) => <MovieCardAtom show_content={true} {...item} />}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={218}
      />
    </View>
  );
}
