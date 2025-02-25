"use client"

const ResumenReserva = ({reserva, liberarMesa}) => {
    if (!reserva.mesaId) return null;
  
    return(
      <div className="mt-4">
        <h3>Resumen de la Reserva</h3>
        <p>Numero de mesa: {reserva.mesaId}</p>
        <p>Cantidad de personas: {reserva.cantidadPersonas}</p>
        <button className="btn btn-danger" onClick={() => liberarMesa(reserva.mesaId)}>
          Cancelar Reserva
        </button>
      </div>
    );
  };
  
  export default ResumenReserva;