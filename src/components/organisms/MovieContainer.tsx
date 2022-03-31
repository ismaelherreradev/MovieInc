import * as React from 'react';
import {Dimensions, SafeAreaView, View, Text, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {BlurView} from 'expo-blur';
import FastImage from 'react-native-fast-image';
import {Ionicons} from '@expo/vector-icons';
import tw from '@lib/tailwind';

// Interfaces
import {IGenre} from '@core/domain/genre.interface';
import {ICastResult} from '@core/domain/cast.interface';

// Atoms
import IconStart from '@atoms/IconStart';
import MovieCardAtom from '@atoms/MovieCard';
import TagContainer from '@atoms/TagContainer';

// Molecules
import CastCardCarousel from '@molecules/CastCardCarousel';

// Navigator Type
import {RootStackScreenProps} from './../../navigation/types';

export default function MovieContainer({
  route,
  genres,
  cast,
}: RootStackScreenProps<'Movie'> & {genres: IGenre[]; cast: ICastResult[]}) {
  const genresNames = genres.filter(({id}) =>
    route.params.genre_ids.includes(id),
  );

  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={tw.style('relative ')}>
        <View style={tw`z-50 absolute left-[20px] top-[50px]`}>
          <Ionicons
            name="close-outline"
            size={34}
            borderRadius={4}
            color="#fff"
            onPress={() => navigation.goBack()}
          />
        </View>
        <FastImage
          style={tw.style(
            `items-center w-[${Dimensions.get('window').width}px] h-[663px] `,
          )}
          source={{
            uri: `https://image.tmdb.org/t/p/original${route.params.backdrop_path}`,
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.cover}>
          <SafeAreaView style={tw`z-50 items-center`}>
            <View style={tw`w-[206px] mt-[78px] mb-[44px] z-50 h-[300px]`}>
              <MovieCardAtom show_content={false} {...route.params} />
            </View>
            <View>
              <Text
                style={tw.style('text-white text-[30px] leading-[36px]', {
                  fontFamily: 'ProximaNovaA-Extrabld',
                })}>
                {route.params.original_title}
              </Text>
              <Text
                style={tw.style(
                  'text-white text-slate-400 text-[16px] leading-[19px]',
                  {
                    fontFamily: 'ProximaNovaA-Regular',
                  },
                )}>
                {genresNames.map(({name}) => name).join(' • ')}
              </Text>
              <View style={tw`mt-[10px] flex-row`}>
                <TagContainer style="mr-2">
                  <Text
                    style={tw.style(
                      'px-[12px] py-[8px] text-white text-center',
                      {
                        fontFamily: 'ProximaNovaA-Semibold',
                      },
                    )}>
                    {route.params.release_date}
                  </Text>
                </TagContainer>
                <TagContainer
                  height="32px"
                  width="70px"
                  text={route.params.vote_average}>
                  <IconStart style={tw`-mb-[5px]`} />
                </TagContainer>
              </View>
            </View>
          </SafeAreaView>

          <BlurView
            style={tw.style(
              `absolute w-[${Dimensions.get('window').width}px] h-[663px]`,
            )}
            intensity={80}
            tint="dark"
          />
        </FastImage>
        <View style={tw`mx-[30px] mt-[20px]`}>
          <Text
            style={tw.style(
              'text-[23px] tracking-[0.7px] leading-[36px] font-bold',
              {fontFamily: 'ProximaNovaA-Bold'},
            )}>
            Plot Summary
          </Text>
          <Text
            style={tw.style('text-[16px] tracking-[0.7px]', {
              fontFamily: 'ProximaNovaA-Regular',
            })}>
            {route.params.overview}
          </Text>
        </View>
        <View>
          <Text
            style={tw.style(
              'text-[23px] mt-[20px] pl-[30px]tracking-[0.7px] leading-[36px] font-bold',
              {fontFamily: 'ProximaNovaA-Bold'},
            )}>
            Cast
          </Text>
          <CastCardCarousel cast={cast} />
        </View>
      </View>
    </ScrollView>
  );
}
