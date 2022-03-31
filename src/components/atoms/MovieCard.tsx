import * as React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import FastImage from 'react-native-fast-image';
import tw from '@lib/tailwind';
import {useNavigation} from '@react-navigation/native';

// Interfaces
import {IResult} from '@core/domain/movies.interface';

// Atoms
import TagContainer from './TagContainer';
import IconStart from './IconStart';

export default function MovieCardAtom({
  poster_path,
  adult,
  overview,
  release_date,
  genre_ids,
  id,
  original_title,
  original_language,
  title,
  backdrop_path,
  popularity,
  vote_count,
  video,
  vote_average,
  show_content = true,
}: IResult & {show_content: boolean}) {
  const navigation = useNavigation();

  return (
    <TouchableHighlight
      onPress={() =>
        navigation.navigate('Movie', {
          poster_path,
          adult,
          overview,
          release_date,
          genre_ids,
          id,
          original_title,
          original_language,
          title,
          backdrop_path,
          popularity,
          vote_count,
          video,
          vote_average,
        })
      }
      style={tw`flex-1 w-[206px] h-[260px] rounded-[22px]`}>
      <FastImage
        style={tw`flex-1 w-[206px] h-[260px] rounded-[22px]`}
        source={{
          uri: `https://image.tmdb.org/t/p/original${poster_path}`,
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.cover}>
        {show_content && (
          <View style={tw`p-[16px] flex-1 justify-between`}>
            <View>
              <TagContainer height="32px" width="70px" text={vote_average}>
                <IconStart style={tw`-mb-[5px]`} />
              </TagContainer>
            </View>
            <View>
              <TagContainer>
                <Text
                  style={tw.style('px-[12px] py-[8px] text-white text-center', {
                    fontFamily: 'ProximaNovaA-Semibold',
                  })}>
                  {original_title}
                </Text>
              </TagContainer>
            </View>
          </View>
        )}
      </FastImage>
    </TouchableHighlight>
  );
}
