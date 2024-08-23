import React from 'react';
import { Box, Flex, Text, Icon} from '@chakra-ui/react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <Box bg="#1a243b" color="white" p={5} id="contactSection">
      <Flex direction="column" alignItems="center">
      
        <Text fontSize="28" fontWeight="bold" mb={4}>Contact Us</Text>
        
     
        <Flex width="100%" justifyContent="space-around">
          <Flex alignItems="center">
            <Icon as={FaMapMarkerAlt} mr={2} w={5} h={5} />
            <Text  fontSize='small'>Ecole nationale d'ingenieurs de Sousse </Text>
          </Flex>
          <Flex alignItems="center">
            <Icon as={FaPhone} mr={2} w={5} h={5} />
            <Text fontSize='small'>+216 54 444 333</Text>
          </Flex>
          <Flex alignItems="center">
            <Icon as={FaEnvelope} mr={2} w={5} h={5} />
            <Text fontSize='small'>medai_team@gmail.com</Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
