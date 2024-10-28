import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { StudentsContext } from '../Context/StudentsContext';

export default function StudentsList() {
  const studentsContext = useContext(StudentsContext);

  // Verificación en caso de que el contexto no esté disponible
  if (!studentsContext) {
    return <Text>Error: No se pudo cargar la lista de estudiantes</Text>;
  }

  const { students } = studentsContext;

  // Renderizado de cada estudiante
  const renderStudent = ({ item }: { item: { id: string; name: string } }) => (
    <Text style={styles.studentText}>{item.name}</Text>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Estudiantes</Text>
      <FlatList
        data={students}
        keyExtractor={(item) => item.id}
        renderItem={renderStudent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  studentText: {
    fontSize: 18,
    marginVertical: 5,
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
  },
});
