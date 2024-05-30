const Buscador = ({ setInputFilter }) => {
  const handleInput = (e) => {
    const inputProveedor = e.target.value;
    setInputFilter(inputProveedor);
  };

  return (
    <>
      <img
        src="./MARCA_JOSENUCETEHIJOS_2019-3.jpg"
        alt=""
        style={{ height: "100px", width: "100px" }}
      />
      <h2>BUSCADOR DE PROVEEDORES</h2>
      <label htmlFor="buscador">Ingrese el proveedor</label>
      <input
        type="text"
        name="buscador"
        id="buscador"
        onChange={handleInput}
        autocomplete="off"
      />
      <br />
      <br />
    </>
  );
};
export default Buscador;
