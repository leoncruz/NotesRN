import React from 'react';

import { NativeBaseProvider } from 'native-base';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Routes } from '../../routes';

const App: React.FC = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NativeBaseProvider>
        <Routes />
      </NativeBaseProvider>
    </GestureHandlerRootView>
  );
};

export { App };
