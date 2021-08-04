//Acciones referidas al carrito
import { types } from '../../types/types';

export const addToCart = (game, priceAcc) => ({
  type: types.addToCart,
  payload: {
    game,
    priceAcc,
  },
});

export const removeFromCart = (id, priceAcc) => ({
  type: types.removeFromCart,
  payload: {
    id,
    priceAcc,
  },
});
