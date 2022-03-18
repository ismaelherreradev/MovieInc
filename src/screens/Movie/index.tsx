import * as React from 'react';
import {View} from 'react-native';
import tw from '@lib/tailwind';

// Interfaces
import {IGenre} from '@core/domain/genre.interface';
import {ICastResult} from '@core/domain/cast.interface';

// Services
import {fetchGenres} from '../../core/services/movies.service';
import {fetchCast} from '../../core/services/movies.service';

// Navigator Type
import {RootStackScreenProps} from './../../navigation/types';

// Organisms
import MovieContainer from '@organisms/MovieContainer';

export default function MovieScreen({
  navigation,
  route,
}: RootStackScreenProps<'Movie'>) {
  const [genres, setGenre] = React.useState<IGenre[]>([]);
  const [cast, setCast] = React.useState<ICastResult[]>([]);

  React.useEffect(() => {
    const fetchGenre = async () => {
      const data = await fetchGenres();
      setGenre(data.genres);
    };

    const fetchCastProfile = async () => {
      const data = await fetchCast(route.params.id);
      setCast(data.cast);
    };

    fetchGenre();
    fetchCastProfile();
  }, [route.params.id]);

  return (
    <View style={tw`items-center`}>
      <MovieContainer
        navigation={navigation}
        route={route}
        genres={genres}
        cast={cast}
      />
    </View>
  );
}
