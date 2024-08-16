import React, { useRef, useEffect } from 'react';

const Buscador = ({ setInputFilter }) => {
  // Crear una referencia para el input
  const inputRef = useRef(null);

  // Establecer el foco en el input cuando el componente se monta
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const manejarEntrada = (e) => {
    const entradaProveedor = e.target.value;
    setInputFilter(entradaProveedor);
  };

  return (
    <>
      <img
        src="./MARCA_JOSENUCETEHIJOS_2019-3.jpg"
        alt=""
        style={{ height: '100px', width: '100px' }}
      />
      <h2>BUSCADOR DE PROVEEDORES</h2>
      <label htmlFor="buscador">Ingrese el proveedor</label>
      <input 
        type="text" 
        name="buscador" 
        id="buscador" 
        onChange={manejarEntrada} 
        autoComplete="off" 
        ref={inputRef}  // Asignar la referencia al input
      />
      <br />
      <br />
    </>
  );
};

export default Buscador;
