import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TareasProvider } from './context/TareasContext'; 
import PantallaInicio from './screens/PantallaInicio';
import PantallaAgregarTarea from './screens/PantallaAgregarTarea';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <TareasProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Inicio" component={PantallaInicio} />
          <Tab.Screen name="Agregar Tarea" component={PantallaAgregarTarea} />
        </Tab.Navigator>
      </NavigationContainer>
    </TareasProvider>
  );
}
