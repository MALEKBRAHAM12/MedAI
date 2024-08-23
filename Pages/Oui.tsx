import { Flex } from '@chakra-ui/react';
import Navbar from '../Components/Navbar'
import Resulat from '../Components/Result'
import React from 'react';
const Oui: React.FC = () => {
  return (
    <div >
        <Flex>
       <Navbar/>
       <Resulat imageUrl={'../src/assets/Y11.jpg'}/>
       </Flex>
    </div>
  );
}

export default Oui;

