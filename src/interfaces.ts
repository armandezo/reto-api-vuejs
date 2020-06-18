import { PokmeonStatColor, PokemonColors, Nullable } from './types';
import { POKEMON_TYPE_COLOR, POKEMON_STAT_COLOR } from './enums';

// tslint:disable no-empty-interface
export interface IPokemonColor extends PokemonColors {}
// tslint:disable no-empty-interface
export interface IPokemonStatColor extends PokmeonStatColor {}

interface IDataTableHeader {
  text: string;
  align: string;
  sortable: boolean;
  value: string;
}

interface INameUrl {
  name: string;
  url: string;
}

interface IGeneralError {
  msg: string;
  code: number;
}

interface IPokeEvolution {
  name: Nullable<string>;
}

export interface IDashboardData {
  loading: boolean;
  search: string;
  headers: IDataTableHeader[];
  pokemons: Nullable<INameUrl>;
  errorToShow: boolean;
  error: IGeneralError;
}

export interface IPokeData {
  order: number;
  name: string;
  sprites: {
    back_default: Nullable<string>;
    back_female: Nullable<string>;
    back_shiny: Nullable<string>;
    back_shiny_female: Nullable<string>;
    front_default: Nullable<string>;
    front_female: Nullable<string>;
    front_shiny: Nullable<string>;
    front_shiny_female: Nullable<string>;
  };
  abilities: Array<{
    ability: INameUrl;
    is_hidden: boolean;
    slot: number;
  }>;
  types: Array<{
    slot: number;
    type: INameUrl;
  }>;
  stats: Array<{
    base_stat: number;
    effort: number;
    stat: INameUrl;
  }>;
  moves: Array<{
    move: INameUrl;
    version_group_details: Array<{
      level_learned_at: number;
      move_learn_method: INameUrl;
      version_group: INameUrl;
    }>;
  }>;
}

export interface IPokemonDetailsData {
  loading: boolean;
  errorToShow: boolean;
  error: IGeneralError;
  movesHeaders: IDataTableHeader[];
  pokeData: Nullable<IPokeData>;
  pokeEvolution: IPokeEvolution[];
}

export interface IPokemonDetailsMethods {
  fetchData: () => void;
  fetchSpiecesInformation: () => void;
  fetchEvolutionData: (url: string) => void;
  getTypeColor: (val: POKEMON_TYPE_COLOR) => string;
  getStatColor: (val: POKEMON_STAT_COLOR) => string;
  isHiddenAbility: (hidden: boolean, name: string) => string;
  nameConvert: (name: string) => string;
  getStatPercentage: (amount: number) => number;
}

export interface IEvolutionSpecies {
  species: INameUrl;
  evolves_to?: IEvolutionSpecies[];
}

export interface IEvolutionData {
  chain: IEvolutionSpecies;
}
