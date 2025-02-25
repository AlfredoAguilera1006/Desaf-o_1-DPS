"use client";

const Mesa = ({ mesa, reservarMesa, liberarMesa }) => {
  if (!mesa) {
    return null;
  }
  const handleReservar=() => {
    const cantidadPersonas = prompt("¿Cuántas personas? (Máximo 4)");
    if (cantidadPersonas) {
      reservarMesa(mesa.id, parseInt(cantidadPersonas));
    }
  };
  return (
    <div className="col-3 mb-3">
      <button className={`btn ${mesa.ocupada ? 'btn-danger':'btn-success'}`}onClick={mesa.ocupada ? ()=>liberarMesa(mesa.id):handleReservar}
        disabled={mesa.ocupada}>
        Mesa {mesa.id}-Zona:{mesa.zona}{mesa.ocupada ? ' (Ocupada)':' (Disponible)'}
      </button>
    </div>
  );
};

export default Mesa;