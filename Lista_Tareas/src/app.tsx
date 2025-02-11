

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PantallaInicio from './src/screens/PantallaInicio';
import PantallaAgregarTarea from './src/screens/PantallaAgregarTarea';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Inicio" component={PantallaInicio} />
        <Tab.Screen name="Agregar Tarea" component={PantallaAgregarTarea} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
