//Acciones referidas al filtrado de juegos
import { types } from '../../types/types';

export const searchGames = (searchText) => ({
  type: types.searchGames,
  payload: searchText,
});
