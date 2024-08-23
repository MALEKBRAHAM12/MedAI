import React from 'react';
import { Box, Image, Text, VStack, Button, useColorModeValue, Icon, Stack } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

interface GenerateComponentProps {
  imageUrl: "'../src/assets/Y11.jpg'";
}

const Resultat: React.FC<GenerateComponentProps> = ({ imageUrl }) => {
  const bgColor = useColorModeValue('#dce7ec', 'gray.800'); // Couleur de fond adaptable au thème clair/sombre
  const textColor = useColorModeValue('gray.800', 'white'); // Couleur de texte adaptable

  return (
    <Stack>
    <RouterLink to="/accueil">
          <Button leftIcon={<ArrowBackIcon />} colorScheme="teal"  marginLeft="2%" marginTop="10%" size="sm" mb={4}>
            Home Page
          </Button>
    </RouterLink>
    <Box w="full" bg={bgColor} borderRadius='10px'boxShadow="md" marginLeft='4%'height='400px' width='1200px'>
      <Stack  >
        <Text fontSize="3xl" fontWeight="bold" textAlign="center" color={textColor}>
          Generate was done successfully
        </Text>
        <Image src={imageUrl} alt="Generated result" align='center ' boxSize="220px"  marginTop='3%' marginLeft='40%' objectFit="cover" borderRadius="lg" />
        <Text fontSize="xl" textAlign="center" fontWeight="bold" marginTop='2%' color='#107790'>
          Brain Tumor
        </Text>
      </Stack>
    </Box>
    </Stack>
  );
};

export default Resultat;
