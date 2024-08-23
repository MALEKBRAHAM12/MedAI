import React from 'react';
import { Box, Text, Image, Flex } from '@chakra-ui/react';
import log from '../src/assets/medai1.jpg'; // Assurez-vous que le chemin est correct

const HeroImage: React.FC = () => {
  return (
    <Box
    id="homeSection"
      position="relative"
      width="100vw"  // Utilise la largeur totale de la vue
      height="100vh" // Utilise la hauteur totale de la vue
      overflow="hidden"
    >
      <Image
        src={log}
        alt="Hero Image"
        objectFit="cover"
        width="100%"
        height="100%"
        loading="lazy"
      />
      <Flex
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        backgroundColor="rgba(0, 0, 0, 0.5)"  // Overlay semi-transparent pour améliorer la lisibilité
      >
        <Text fontSize="4xl" fontWeight="bold" color="white" textAlign="center">
          Welcome to MED'AI
        </Text>
        <Text fontSize="xl" color="white" textAlign="center" mt={2}>
          Empowering the future with AI, Connect with Smart Solution:
          Harness the power of our AI model
        </Text>
        <Text fontSize="xl" color="white" textAlign="center" mt={2}>
          Explore an innovative AI system that dramatically enhances tumor detection, offering faster, more accurate diagnoses to improve treatment outcomes and save lives.
        </Text>
      </Flex>
    </Box>
  );
};

export default HeroImage;
