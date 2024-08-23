import React from 'react';
import RightSection from '../Components/RightSection';
import RightSign from '../Components/RightSign';
import { Flex } from '@chakra-ui/react';
const SignUp: React.FC = () => {
  return (
    <div >
      <Flex>
        <RightSign />

        <RightSection />
      </Flex>
    </div>
  );
}

export default SignUp;

