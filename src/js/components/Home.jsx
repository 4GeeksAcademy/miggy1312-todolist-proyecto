import React from "react";
import { useState } from "react"

function App() {
  const [tareas, setTareas] = useState([
    { id: 1, task: 'Hacer mercado' },
    { id: 2, task: 'Hacer la tarea' }
  ]);

  const [nuevaTarea, setNuevaTarea] = useState('');

  const agregarTarea = () => {
    if (!nuevaTarea.trim()) {
      alert('Por favor, ingresa una tarea válida');
      return;
    }

    const objetoTarea = {
      id: Date.now(),
      task: nuevaTarea
    }

    setTareas([...tareas, objetoTarea]);
    setNuevaTarea('');
  }

  const eliminarTarea = (id) => {
    const tareasFiltradas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasFiltradas);
  }

  const manejarEnter = (e) => {
    if (e.key === 'Enter') agregarTarea();
  }

  return (
    <div className="contenedor">
      <h1>Mi To-Do List</h1>

      <div className="input-container">
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          onKeyDown={manejarEnter}
          placeholder="Escribe una tarea..."
        />
        <button onClick={agregarTarea}>Agregar</button>
      </div>

      <div className="lista-tareas">
        {tareas.length === 0 ? (
          <p className='mensaje-vacio'>No hay tareas. ¡Añade una!</p>
        ) : (
          tareas.map(tarea => (
            <div key={tarea.id} className="tarea-item">
              <p>{tarea.task}</p>
              <button
                className="boton-eliminar"
                onClick={() => eliminarTarea(tarea.id)}
              >
                Eliminar 🗑️
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default App