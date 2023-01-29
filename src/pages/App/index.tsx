import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { Home } from '../Home';
import { Note } from '../Note';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Notes" component={Home} />
          <Stack.Screen
            name="Note"
            component={Note}
            options={({ route }) => ({ title: route.params?.name })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export { App };
