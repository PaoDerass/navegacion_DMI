
import React, { createContext, useState } from 'react';

interface Tarea {
  id: number;
  descripcion: string;
}

interface TareasContextType {
  tareas: Tarea[];
  agregarTarea: (descripcion: string) => void;
}

const TareasContext = createContext<TareasContextType | undefined>(undefined);

export const TareasProvider: React.FC = ({ children }) => {
  const [tareas, setTareas] = useState<Tarea[]>([]);

  const agregarTarea = (descripcion: string) => {
    setTareas([...tareas, { id: tareas.length + 1, descripcion }]);
  };

  return (
    <TareasContext.Provider value={{ tareas, agregarTarea }}>
      {children}
    </TareasContext.Provider>
  );
};

export default TareasContext;
