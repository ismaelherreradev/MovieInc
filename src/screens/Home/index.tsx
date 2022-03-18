import * as React from 'react';
import {SafeAreaView} from 'react-native';
import tw from '@lib/tailwind';

// Interfaces
import {IResult} from '@core/domain/movies.interface';

// Services
import {fetchMoviesNowPlaying} from '../../core/services/movies.service';

// Molecules
import MovieCardCarousel from '@molecules/MovieCardCarousel';
import MainHeader from '@molecules/MainHeader';

export default function HomeScreen() {
  const [movies, setMovies] = React.useState<IResult[]>([]);

  const fetchNovies = async () => {
    const data = await fetchMoviesNowPlaying();
    setMovies(data.results);
  };

  React.useEffect(() => {
    fetchNovies();
  }, []);

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <MainHeader />
      <MovieCardCarousel movies={movies} />
    </SafeAreaView>
  );
}
