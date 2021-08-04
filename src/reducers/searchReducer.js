import { types } from '../types/types';

const initialState = {
  searchTerms: null,
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.searchGames:
      return {
        ...state,
        searchTerms: action.payload, //actualiza los términos que se utilizarán para el filtrado.
      };
    default:
      return state;
  }
};
