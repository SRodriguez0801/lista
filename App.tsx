import { StyleSheet, Text, View } from 'react-native';
import { StudentsProvider } from './Provider/StudentsProvider';
import StudentsList from './Components/StudentsList';

export default function App() {
  return (
   <StudentsProvider>
    <StudentsList></StudentsList>
   </StudentsProvider>
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
