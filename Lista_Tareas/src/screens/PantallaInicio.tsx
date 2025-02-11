import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import TareasContext from '../context/TareasContext';

const PantallaInicio: React.FC = ({ navigation }) => {
  const context = useContext(TareasContext);

  if (!context) {
    return <Text>Error al cargar las tareas</Text>;
  }

  const { tareas } = context;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Tareas</Text>
      {tareas.length === 0 ? (
        <Text>No hay tareas</Text>
      ) : (
        tareas.map((tarea) => <Text key={tarea.id}>{tarea.descripcion}</Text>)
      )}
      <Button title="Agregar Tarea" onPress={() => navigation.navigate('Agregar Tarea')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E1D0F6', // Color lila
  },
  titulo: {
    fontSize: 24,
    marginBottom: 10,
    color: '#7A5BA3', // Color lila
  },
});

export default PantallaInicio;
