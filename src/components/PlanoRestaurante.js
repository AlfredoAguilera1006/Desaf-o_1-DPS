"use client";

import { useState } from 'react';
import Mesa from './Mesa';
import SelectorZona from '../components/Mesa';
import ResumenReserva from '../components/ResumenRemesa';


const PlanoRestaurante = () => {
    const [mesas, setMesas] = useState([
      { id: 1, zona: ' Terraza', ocupada: false },
      { id: 2, zona: ' Terraza', ocupada: false },
      { id: 3, zona: ' Terraza', ocupada: false },
      { id: 4, zona: ' Terraza', ocupada: false },
      { id: 5, zona: ' Interior', ocupada: false },
      { id: 6, zona: ' Interior', ocupada: false },
      { id: 7, zona: ' Interior', ocupada: false },
      { id: 8, zona: ' Interior', ocupada: false },
      { id: 9, zona: ' VIP', ocupada: false },
      { id: 10, zona: ' VIP', ocupada: false },
    ]);
    const [reserva, setReserva] = useState({ mesaId: null, cantidadPersonas: 0 });
  
    const reservarMesa = (mesaId, cantidadPersonas) => {
      if (cantidadPersonas > 4) {
        alert("El límite es de 4 personas por mesa.");
        return;
      }
  
      setMesas((prevMesas) =>
        prevMesas.map((mesa) =>
          mesa.id === mesaId ? { ...mesa, ocupada: true, cantidadPersonas: cantidadPersonas } : mesa
        )
      );
      setReserva({ mesaId, cantidadPersonas });
    };
  
    const liberarMesa = (mesaId) => {
      setMesas((prevMesas) =>
        prevMesas.map((mesa) =>
          mesa.id === mesaId ? { ...mesa, ocupada: false } : mesa
        )
      );
      setReserva({ mesaId: null, cantidadPersonas: 0 });
    };
  
    const eliminarMesa = (mesaId) => {
      setMesas((prevMesas) =>
        prevMesas.filter((mesa) => mesa.id !== mesaId)
      );
      setReserva((prevReserva) =>
        prevReserva.mesaId === mesaId ? { mesaId: null, cantidadPersonas: 0 } : prevReserva
      );
    };
  
    const mesasReservadas = mesas.filter(mesa => mesa.ocupada);
  
    const totalPersonas = mesasReservadas.reduce((total, mesa) => total + mesa.cantidadPersonas, 0);

    return (
      <div className="container">
        <h1>Reserva de Mesas</h1>
        <SelectorZona mesas={mesas} reservarMesa={reservarMesa} />
        <div className="row">
          {mesas.map((mesa) => (
            <Mesa key={mesa.id} mesa={mesa} reservarMesa={reservarMesa} liberarMesa={liberarMesa} />
          ))}
        </div>
        <ResumenReserva reserva={reserva} liberarMesa={liberarMesa} />
        <h2>Mesas Reservadas</h2>
        <ul className="list-unstyled mb-0">
          {mesasReservadas.map((mesa) => (
            <li key={mesa.id} className="d-flex justify-content-between mb-2">
              <span>
                Mesa {mesa.id} - Zona: {mesa.zona} - Personas: {mesa.cantidadPersonas}
              </span>
              <button className="btn btn-danger" onClick={() => eliminarMesa(mesa.id)}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
        <h2>Total de Personas</h2>
        <p>Total de personas en todas las mesas: {totalPersonas}</p>
      </div>
    );
  };
  
  export default PlanoRestaurante;