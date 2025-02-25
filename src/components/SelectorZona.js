"use client"

const SelectorZona = ({ mesas, reservarMesa }) =>{
    const zonas = [...new Set(mesas.map(mesa =>mesa.zona))];

    return(
      <div className="mb-4">
        <h2>Selecciona una Zona</h2>
        {zonas.map(zona =>(
          <div key={zona} className="mb-2">
            <h4>{zona}</h4>
            <div className="d-flex flex-wrap">
              {mesas.filter(mesa => mesa.zona === zona).map(mesa => (
                <button
                  key={mesa.id}
                  className={`btn ${mesa.ocupada ? 'btn-danger' : 'btn-success'} m-1`}
                  onClick={() => {
                    if (!mesa.ocupada){
                      const cantidadPersonas = prompt("¿Cuántas personas?");
                      if (cantidadPersonas){
                        reservarMesa(mesa.id, parseInt(cantidadPersonas));
                      }
                    }
                  }}
                  disabled={mesa.ocupada}
                >
                  Mesa {mesa.id}
                </button>
              ))}
            </div>
          </div>
        ))}
        </div>
    );
  };
  
  export default SelectorZona;