import React from 'react';
import RightSection from '../Components/RightSection';
import LeftSection from '../Components/LeftSection';
import { Flex } from '@chakra-ui/react';
const Login: React.FC = () => {
  return (
    <div >
      <Flex>
      <LeftSection />
      <RightSection />
      </Flex>
    </div>
  );
}

export default Login;

