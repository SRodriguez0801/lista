import React, { useState, useEffect, ReactNode } from 'react';
import { StudentsContext } from '../Context/StudentsContext';

interface Student {
  id: string;
  name: string;
}

export const StudentsProvider = ({ children }: { children: ReactNode }) => {
  const [students, setStudents] = useState<Student[]>([
    { id: '1', name: 'Juan' },
    { id: '2', name: 'María' },
    { id: '3', name: 'Carlos' },
    { id: '4', name: 'Ana' },
    { id: '5', name: 'Pedro' },
    { id: '6', name: 'Laura' },
    { id: '7', name: 'Diego' },
    { id: '8', name: 'Sofía' },
    { id: '9', name: 'Javier' },
    { id: '10', name: 'Lucía' }
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStudents((prevStudents) => [
        ...prevStudents,
        { id: '11', name: 'Roberto' },
        { id: '12', name: 'Mónica' },
        { id: '13', name: 'Elena' }
      ]);
    }, 5000)

    return () => clearTimeout(timer);
  }, []);

  return (
    <StudentsContext.Provider value={{ students, setStudents }}>
      {children}
    </StudentsContext.Provider>
  );
};
