import { useEffect, useState } from "react";
import proveedores from "../proveedores";

const Resultados = ({ inputFilter }) => {
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    const filterProv = proveedores.filter((prov) => {
      return prov.nombre.toLowerCase().includes(inputFilter.toLowerCase()); // Comparación insensible a mayúsculas y minúsculas
    });

    setResultados(filterProv); // Actualiza los resultados filtrados
  }, [inputFilter]);

  return (
    <div>
      {resultados.length > 0 ? (
        resultados.map((resultado, index) => (
          <div
            key={index}
            style={{ border: "1px solid", marginBottom: "10px" }}
          >
            <h3>{resultado.nombre}</h3>
            {resultado.correo2 ? (
              <a
                href={`mailto:${resultado.correo};${resultado.correo2}?subject=PAGO A PROVEEDORES - JOSE NUCETE E HIJOS S.A`}
              >
                Enviar correo electrónico
              </a>
            ) : (
              <a
                href={`mailto:${resultado.correo}?subject=PAGO A PROVEEDORES - JOSE NUCETE E HIJOS S.A`}
              >
                Enviar correo electrónico
              </a>
            )}
          </div>
        ))
      ) : (
        <h3>No hay resultados</h3>
      )}
    </div>
  );
};
export default Resultados;
