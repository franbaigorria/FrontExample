import { types } from '../types/types';

const initialState = {
  gamesInCart: [],
  price: 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addToCart:
      return {
        ...state,
        gamesInCart: [...state.gamesInCart, action.payload.game], //devuelve el estado anterior más el nuevo que ingresa por payload
        price: action.payload.priceAcc, //actualiza el precio total
      };
    case types.removeFromCart:
      return {
        ...state,
        gamesInCart: state.gamesInCart.filter(
          (game) => game.gameID !== action.payload.id //Si coinciden los id, no se retorna
        ),
        price: action.payload.priceAcc, //actualiza el precio total
      };
    default:
      return state;
  }
};
