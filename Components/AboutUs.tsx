import React from 'react';
import { Box, Flex, Heading, Text, AspectRatio } from '@chakra-ui/react';


const AboutUs: React.FC = () => {
  return (
    <Box p={5} id="aboutSection">
      <Flex direction="column" align="center" justify="center" mb={10}>
        <Heading as="h1" size="xl" fontWeight="bold" textAlign="center">
          About Us
        </Heading>
      </Flex>
      <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between">
        <Box flex="1" mr={{ md: 5 }}>
          <Text fontSize="lg" textAlign={{ base: 'center', md: 'left' }}>
           Artificial intelligence (AI) is transforming the field of medical diagnostics, particularly in the detection of brain tumors, through the integration of machine learning algorithms with medical imaging techniques. AI systems are trained using large datasets of brain scans to recognize the subtle patterns and variations that might elude even experienced radiologists. These systems can analyze MRI and CT scans to quickly and accurately identify the presence, size, and type of brain tumors. This capability not only speeds up the diagnosis process.
          </Text>
        </Box>
        <AspectRatio ratio={16 / 9} flex="1" ml={{ md: 5 }} width="100%">
          <video
            src='../src/assets/video - Trim.mp4'
            title="AI in Medicine"
            controls
            muted
            autoPlay
            loop
          />
        </AspectRatio>
      </Flex>
    </Box>
  );
};

export default AboutUs;
