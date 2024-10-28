import {createContext}from 'react'


interface Student{
    id: string;
    name: string;
}

interface StudentsContextProps{
    students: Student[];
    setStudents: React.Dispatch<React.SetStateAction<Student[]>>;

}

export const StudentsContext = createContext<StudentsContextProps | undefined>(undefined);