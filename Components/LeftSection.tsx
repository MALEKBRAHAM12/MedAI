import React, { useState } from 'react';
import { Input, InputGroup, InputLeftElement, VStack } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { FaCircleUser, FaUser, FaLock } from "react-icons/fa6";
import { Box, FormControl, FormLabel, Button, InputRightElement, IconButton } from '@chakra-ui/react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ZodType, z } from 'zod';
import { Link } from 'react-router-dom';


type FormData = {
  id: string;
  password: string;
};

const LeftSection: React.FC = () => {

  const schema: ZodType<FormData> = z.object({
    
    id: z.string().refine(value => value.length >= 3, {
      message: "ID must contain at least 3 characters",
    }),
    password: z.string().refine(value => value.length >= 8, {
      message: "Password must contain at least 8 characters",
    }),
    
  });

  const [showPassword, setShowPassword] = useState(false);
const handleTogglePassword = () => setShowPassword(!showPassword);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });

  const submitData = (data: FormData) => {
    console.log("IT WORKED", data)
  }
  return (
  <VStack className="right-section" marginY="auto">
      
      <Heading style={{ fontSize: '5em', padding: '3px' ,marginLeft:'85%',color:'#1c2b4f' } }>MED'AI</Heading>
    
      <Text fontSize='4xl'  top="10px" marginLeft='80%'fontWeight="bold" color='#29385c'>Welcome</Text>
    
    <form onSubmit={handleSubmit(submitData)}>
     <Box width="350px" marginLeft="40%" marginTop="10px">
      <center>
      <FaCircleUser style={{fontSize: '3em', color:'#212d4a'}}  />
      <FormControl mb={3}>
        <FormLabel  color='#1a243b' htmlFor="username">ID</FormLabel>
        <InputGroup>
        <InputLeftElement
                pointerEvents="none"
                children={<FaUser color="#1a243b" />}
              />
        <Input 
          pr="4.5rem"
          type="text" 
          id="username" 
          placeholder="Enter your ID" 
          width="100%" 
          focusBorderColor="#1a243b" 
          color="#1a243b" 
          borderWidth={2}
          {...register("id")} />
        </InputGroup>
      </FormControl>
      {errors.id && <Box color="red.500" mt={2} fontSize='small'>{errors.id.message}</Box>}

      <FormControl mb={2} position="relative">
        <FormLabel  color='#1a243b' htmlFor="confirmPassword">Password</FormLabel>
          <InputGroup>
            <InputLeftElement
            pointerEvents="none"
            children={<FaLock color='#1a243b' />}
            />
            <Input
            pr="4.5rem"
            type={!showPassword ? 'text' : 'password'}
            placeholder="Enter your Password"
            width="100%"
            focusBorderColor="#1a243b"
            color='#1a243b'
            borderWidth={2}
            {...register("password")}
            />
            <InputRightElement position="absolute" right="0" top="50%" transform="translateY(-50%)">
            <IconButton
            h="1.75rem"
            size="sm"
            onClick={handleTogglePassword}
            icon={showPassword ? <FaEyeSlash /> : <FaEye />}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            style={{ position: 'absolute', right: '4px', top: '50%', transform: 'translateY(-50%)' }}
            />
            </InputRightElement>
          </InputGroup>
      </FormControl>

      {errors.password && <Box color="red.500" mt={2} fontSize='small'>{errors.password.message}</Box>}

      <Button type='submit' marginTop="20px" color="white" bgColor='#1c2b4f' width="70%">
        Log In
      </Button>
      <Box marginTop="10px">
        <Link to="/password-recovery">Forgot Password?</Link>
      </Box>
      <Box marginTop="10px">
        <Link to="/signup"> Don't have an account? Sign out</Link>
      </Box>
      </center>
     </Box>
    </form> 
  </VStack>
  );
};





export default LeftSection;