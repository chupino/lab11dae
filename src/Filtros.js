import React from 'react';

function Filtros({ filtrarTareas, setOrder }) {
  return (
    <div className='mt-3'>
      <button onClick={() => filtrarTareas("Todas")} className='btn btn-primary rounded-0'>Todas</button>
      <button onClick={() => filtrarTareas("Pendientes")} className='btn btn-primary rounded-0'>Pendientes</button>
      <button onClick={() => filtrarTareas("Completadas")} className='btn btn-primary rounded-0'>Completadas</button>
      <button onClick={() => {setOrder((prevOrdenAsc) => !prevOrdenAsc); filtrarTareas("Fecha");}} className='btn btn-secondary mx-3'>Ordenar por Fecha</button>

    </div>
  );
}

export default Filtros;
