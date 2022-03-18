import {http} from '../axios';
import {IMovies} from '@core/domain/movies.interface';
import {IGenre} from '@core/domain/genre.interface';
import {ICast} from '@core/domain/cast.interface';

import Config from 'react-native-config';

const controller = new AbortController();

export const fetchMoviesNowPlaying = async (): Promise<IMovies> => {
  try {
    const {data} = await http.get<{}, IMovies>(
      `/movie/now_playing?api_key=${Config.TMDB_API_KEY}`,
      {signal: controller.signal},
    );

    return data;
  } catch (error: any) {
    controller.abort();
    throw new Error(error);
  }
};

export const fetchGenres = async (): Promise<IGenre> => {
  try {
    const {data} = await http.get<{}, IGenre>(
      `/genre/movie/list?api_key=${Config.TMDB_API_KEY}`,
      {signal: controller.signal},
    );

    return data;
  } catch (error: any) {
    controller.abort();
    throw new Error(error);
  }
};

export const fetchCast = async (movie_id: string | number): Promise<ICast> => {
  try {
    const {data} = await http.get<{}, IGenre>(
      `/movie/${movie_id}/credits?api_key=${Config.TMDB_API_KEY}`,
      {signal: controller.signal},
    );

    return data;
  } catch (error: any) {
    controller.abort();
    throw new Error(error);
  }
};
