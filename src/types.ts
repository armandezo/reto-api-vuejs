import { POKEMON_TYPE_COLOR, POKEMON_STAT_COLOR } from './enums';

export type PokemonColors = {
  [key in POKEMON_TYPE_COLOR]: string;
};

export type PokmeonStatColor = {
  [key in POKEMON_STAT_COLOR]: string;
};

export type Nullable<T> = T | null;
