import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'; // Import Scroll Link
import { Flex, Button, Box, Text, Icon, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { FaHandHoldingMedical } from "react-icons/fa";

const Navbar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="#1a243b"
      color="white"
      width="100vw"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="1000"
    >
      <Flex align="center" mr={5}>
          <Icon fontSize='2xl' as={FaHandHoldingMedical} />
          <Text marginLeft='20px' fontSize='2xl' as='b'>MED'AI</Text>
      </Flex>
      <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='white' />}>
        <BreadcrumbItem>
          <ScrollLink to="homeSection" spy={true} smooth={true} duration={500} offset={-70}>
            Home
          </ScrollLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <ScrollLink to="aboutSection" spy={true} smooth={true} duration={500} offset={-70}>
            About
          </ScrollLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <ScrollLink to="contactSection" spy={true} smooth={true} duration={500} offset={-70}>
            Contact
          </ScrollLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <ScrollLink to="generateSection" spy={true} smooth={true} duration={500} offset={-70}>
            Generate AI
          </ScrollLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Box>
        <RouterLink to="/login"><Button colorScheme="#1a243b" color='white' variant="outline" mr={4}>Log In</Button></RouterLink>
        <RouterLink to="/signup"><Button colorScheme="#1a243b" color='#1a243b' bg='white'>Sign Up</Button></RouterLink>
      </Box>
    </Flex>
  );
};

export default Navbar;
