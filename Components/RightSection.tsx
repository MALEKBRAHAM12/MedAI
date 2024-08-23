import React from 'react';
import log from '../src/assets/medai.jpg'
import {  Image, Flex } from '@chakra-ui/react';
const RightSection: React.FC = () => {
  
  return (
    <div className="Right-section">
      <Flex alignItems="center" justifyContent="flex-start" height="100vh">
       <Image 
       marginLeft='50%'
       src={log}
       alt="medai" 
       boxSize="100%"
       height="100%" />
      </Flex>
    </div>
  );
};

export default RightSection;
