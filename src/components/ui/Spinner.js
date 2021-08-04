//Componente que renderiza un spinner cuando se está esperando respuesta de una petición
import React from 'react';

export const Spinner = () => {
  return (
    <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  );
};
