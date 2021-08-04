//CustomHook para el uso de Formularios.
//Devuelve el valor del input, la funcíon que lo actualiza y otra función que limpia el formulario(en este caso no se utilizó)
import { useState } from 'react';

export const useForm = (initialState = {}) => {
  const cleanInput = () => {
    setValues(initialState);
  };

  const [values, setValues] = useState(initialState);

  const handleInputChange = ({ target }) => {
    setValues({ ...values, [target.name]: target.value });
  };

  return [values, handleInputChange, cleanInput];
};
