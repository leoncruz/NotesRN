import { Center, Text, View } from 'native-base';
import React from 'react';

const Home: React.FC = () => {
  return (
    <View justifyContent="center" flex={1}>
      <Center>
        <Text>Hello World</Text>
      </Center>
    </View>
  );
};

export { Home };
