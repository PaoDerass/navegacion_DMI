
import React, { useState, useContext } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import TareasContext from '../context/TareasContext';

const PantallaAgregarTarea: React.FC = ({ navigation }) => {
  const [descripcion, setDescripcion] = useState('');
  const context = useContext(TareasContext);

  if (!context) {
    return <Text>Error al cargar el contexto</Text>;
  }

  const { agregarTarea } = context;

  const manejarAgregarTarea = () => {
    if (descripcion.trim()) {
      agregarTarea(descripcion);
      setDescripcion('');
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nueva tarea"
        value={descripcion}
        onChangeText={setDescripcion}
      />
      <Button title="Agregar Tarea" onPress={manejarAgregarTarea} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E1D0F6', 
  },
  input: {
    height: 40,
    borderColor: '#7A5BA3', 
    borderWidth: 1,
    marginBottom: 20,
    width: '80%',
    paddingLeft: 10,
    borderRadius: 5,
  },
});

export default PantallaAgregarTarea;
