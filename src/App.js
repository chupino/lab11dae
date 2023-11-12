import React, { useState } from 'react';
import TareaForm from './TareaForm';
import ListaTareas from './ListaTareas';
import Filtros from './Filtros';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  const [tareas, setTareas] = useState([]);
  const [filtro, setFiltro] = useState("Todas");
  const [ordenAsc, setOrdenAsc] = useState(true);
  const [showError, setShowError] = useState(false);

  const agregarTarea = (texto) => {
    const fechaActual = new Date();
    const formatoFecha = `${fechaActual.getDate()}/${fechaActual.getMonth() + 1}/${fechaActual.getFullYear()} ${fechaActual.getHours()}:${fechaActual.getMinutes()}`;

    setTareas([...tareas, { texto, formatoFecha ,completada: false }]);
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
  };

  const editarTarea = (index, nuevoTexto) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].texto = nuevoTexto;
    setTareas(nuevasTareas);
  };

  const toggleCompletada = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    setTareas(nuevasTareas);
  };

  const filtrarTareas = (filtro) => {
    setFiltro(filtro);
  };

  let tareasFiltradas = tareas;
  if (filtro === "Pendientes") {
    tareasFiltradas = tareas.filter((tarea) => !tarea.completada);
  } else if (filtro === "Completadas") {
    tareasFiltradas = tareas.filter((tarea) => tarea.completada);
  }else if (filtro === "Fecha") {
    tareasFiltradas = [...tareas].sort((a, b) => {
      const fechaA = new Date(a.formatoFecha);
      const fechaB = new Date(b.formatoFecha);
  
      if (ordenAsc) {
        return fechaA - fechaB;
      } else {
        return fechaB - fechaA;
      }
    });}

  return (
    <div className="App" >
      {showError && (
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
          <strong>Alerta</strong> La tarea es demasiado larga.
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      )}
      <h1>Lista de Tareas</h1>
      <TareaForm agregarTarea={agregarTarea} setShowError={setShowError} />
      <Filtros filtrarTareas={filtrarTareas} setOrder={setOrdenAsc} />
      <ListaTareas
        tareas={tareasFiltradas}
        eliminarTarea={eliminarTarea}
        editarTarea={editarTarea}
        toggleCompletada={toggleCompletada}
      />
    </div>
  );
}

export default App;
