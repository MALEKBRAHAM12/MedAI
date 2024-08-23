import React from 'react';

import { Flex } from '@chakra-ui/react';
import RightEmail from '../Components/RightEmail';
import RightSection from '../Components/RightSection';
const PasswordRecovery: React.FC = () => {
  return (
    <div >
      <Flex>
      <RightEmail />
      <RightSection />
      
      </Flex>
    </div>
  );
}

export default PasswordRecovery;

