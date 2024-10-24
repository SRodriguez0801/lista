import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

interface Student{
    id: string;
    name: string;
}

export default function Students() {
    //Estado inicial de la lista de los estudiantes
    const[students, setStudents] = useState<Student[]>([
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
// Simulación de la obtención de datos con useEffect
useEffect(()=>{
    // Simulación de nuevos datos después de 5 segundos
    const timer = setTimeout(() => {
        setStudents([
          { id: '1', name: 'Juan' },
          { id: '2', name: 'María' },
          { id: '3', name: 'Carlos' },
          { id: '4', name: 'Ana' },
          { id: '5', name: 'Pedro' },
          { id: '6', name: 'Laura' },
          { id: '7', name: 'Diego' },
          { id: '8', name: 'Sofía' },
          { id: '9', name: 'Javier' },
          { id: '10', name: 'Lucía' },
          // Nuevos estudiantes añadidos
          { id: '11', name: 'Roberto' },
          { id: '12', name: 'Mónica' },
          { id: '13', name: 'Elena' },
        ]);
      }, 5000);

// Limpiar el temporizador cuando el componente se desmonte
return () => clearTimeout(timer);
}, []);

 // Renderizado de cada estudiante
 const renderStudent = ({ item }: { item: Student }) => (
    <Text style={{ fontSize: 18, marginVertical: 5 }}>{item.name}</Text>
  );

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24,alignItems: 'center', fontWeight: 'bold' }}>Lista de Estudiantes</Text>
      {/* FlatList para mostrar la lista de estudiantes */}
      <FlatList
        data={students}
        keyExtractor={(item) => item.id}
        renderItem={renderStudent}
      />
    </View>
  )
}
