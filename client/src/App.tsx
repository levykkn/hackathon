import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './pages/Home';
import Chat from './components/Chat/Chat';


const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Home/>
      <Chat/>
    </ChakraProvider>
  );
};

export default App;