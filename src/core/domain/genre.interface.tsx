export interface IGenreResult {
  genres: IGenre[];
}

export interface IGenre {
  [x: string]: any;
  id: number;
  name: string;
}
