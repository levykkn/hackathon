import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './pages/Home';


const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Home/>
    </ChakraProvider>
  );
};

export default App;