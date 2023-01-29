import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Note as NodeModel } from '../models/Note';
import { Home } from '../pages/Home';
import { Note } from '../pages/Note';

export type StackNavigatorProps = {
  Notes: undefined;
  Note: { name: string; note: NodeModel };
};

const Stack = createNativeStackNavigator<StackNavigatorProps>();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Notes" component={Home} />
        <Stack.Screen
          name="Note"
          component={Note}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { Routes };
