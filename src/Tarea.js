// src/Tarea.js
import React, { useState } from 'react';

function Tarea({ tarea, onDelete, onEdit, completada, onToggleCompletada, fecha }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(tarea);
  
    const handleEditClick = () => {
      setIsEditing(true);
    };
  
    const handleSaveClick = () => {
      onEdit(editedText);
      setIsEditing(false);
    };
  
    return (
      <li className='d-flex my-2'>
        <input type="checkbox" className='form-check-input' checked={completada} onChange={onToggleCompletada} />
        {isEditing ? (
          <>
            <input
              type="text"
              className='form-control mx-2'
              style={{width : "130px"}}
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            />
            <button onClick={handleSaveClick} className='btn btn-dark'>Guardar</button>
          </>
        ) : (
          <>
            <h4 className='form-label mx-2'>
                {tarea}
            </h4>
            <h4 className='form-label mx-2'>
              {fecha}
            </h4>
            <button onClick={onDelete} className='btn btn-danger mx-2' style={{marginRight:"5px"}}>Eliminar</button>
            <button onClick={handleEditClick} className='btn btn-dark'>Editar</button>
          </>
        )}
      </li>
    );
  }
  
  export default Tarea;
  