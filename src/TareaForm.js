// src/TareaForm.js
import React, { useState } from "react";

function TareaForm({ agregarTarea, setShowError }) {
  const [texto, setTexto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (texto.length > 20) {
      setShowError(true);
      return;
    }
    if (texto.trim() === "") return;
    agregarTarea(texto);
    setTexto("");
  };

  return (
      <form onSubmit={handleSubmit}>
        <div className="form-group form-inline d-flex">
          <input
            type="text"
            class="form-control"
            style={{width : "200px", marginRight: "10px"}}
            placeholder="Añadir tarea..."
            value={texto}
            required
            onChange={(e) => setTexto(e.target.value)}
          />
          <button type="submit" class="btn btn-success">
            Agregar Tarea
          </button>
        </div>
      </form>
  );
}

export default TareaForm;
