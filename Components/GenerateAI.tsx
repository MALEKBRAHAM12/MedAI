import React, { useRef, useState, ChangeEvent, FC } from 'react';
import { Box, Button, Text, VStack, Center, Image, Heading, Input } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'; // Importez `useNavigate` pour la navigation

const GenerateAI: FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate(); // Créez une instance de `useNavigate` pour la navigation

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setFile(event.target.files[0]);
        }
    };

    const handleGenerate = () => {
        if (!file) {
            alert("Please upload a file first.");
            return;
        }
        console.log('Generating image from:', file);
        navigate('/oui'); // Naviguer vers `/oui` après le traitement
    };

    const triggerFileInput = () => {
        fileInputRef.current?.click();
    };

    return (
        <Box p={5} shadow="2xl" id="generateSection">
            <VStack spacing={4} align="stretch">
                <Box bg="#107790" marginRight='3%' marginLeft='3%' height='100px' borderRadius="10px" boxShadow='10%'>
                    <Heading textAlign="center" size="xl" color="white" marginTop='1%'>
                        Generate AI
                    </Heading>
                    <Text textAlign="center" color="white" fontSize="xl">
                        Explore the power of AI to generate images from your descriptions. Be creative!
                    </Text>
                </Box>
                <Box>
                    <Text as='b'>In this section, you can select an MRI scan from one of your patients by clicking on the "Import MRI" button. Then, click on "Generate" to display the results.</Text>
                </Box>
                <Box position="relative" height="300px" marginRight='2%' borderRadius="md">
                    <Image
                        src={file ? URL.createObjectURL(file) : "../src/assets/medai4.png"}
                        alt="Uploaded Preview"
                        objectFit="cover"
                        width="100%"
                        height="100%"
                        borderRadius="md"
                    />
                    <Text position="absolute" bottom="0" width="100%" textAlign="center" bg="rgba(0, 0, 0, 0.7)" color="white" p={2} borderRadius="md">
                        AI Generated Image
                    </Text>
                </Box>
                <Center flexDirection="column">
                    <Input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        size="lg"
                        placeholder="Upload File"
                        hidden // Hide the default file input
                    />
                    <Button bg="#107790" color='white' fontSize='l' height='50px' width='23%' onClick={triggerFileInput} shadow="md" _hover={{ shadow: "lg" }} mb={3}>
                        Import MRI
                    </Button>
                    <Button bg="#107790" color='white' fontSize='large' height='50px' width='23%' boxShadow='40%' onClick={handleGenerate} shadow="md" _hover={{ shadow: "lg" }}>
                        Generate
                    </Button>
                </Center>
            </VStack>
        </Box>
    );
};

export default GenerateAI;
