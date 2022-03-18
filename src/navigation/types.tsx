import type {StackScreenProps} from '@react-navigation/stack';
import {IResult} from '@core/domain/movies.interface';

export type RootStackParamList = {
  Home: undefined;
  Movie: IResult;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type HomeScreenProps<> = RootStackScreenProps<keyof RootStackParamList>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
