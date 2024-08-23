import React from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { MdOutlineVpnKey } from "react-icons/md";
import { Box, FormControl, FormLabel, Button, FormHelperText, VStack } from '@chakra-ui/react';
import { MdEmail } from "react-icons/md";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ZodType, z } from 'zod';


const RightEmail: React.FC = () => {

    const schema: ZodType<FormData> = z.object({
        email: z.string().email(),
      });
      
      type FormData = {
        email: string;
      }
     
      const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema),
      });
    
      const submitData = (data: FormData) => {
        console.log("IT WORKED",data) 
      }
      
  return (
  <VStack className="right-section" >
      
      <Heading  marginTop="48px"style={{ fontSize: '5em', padding: '3px' ,marginLeft:'85%',color:'#1c2b4f' } }>MED'AI</Heading>
    
    <form onSubmit={handleSubmit(submitData)}>
     <Box width="350px" marginLeft="40%" marginTop="10px">
     <Text fontSize='4xl'  top="40px" marginLeft='20%'fontWeight="bold" color='#29385c'>new password </Text>
      <center>
      <MdOutlineVpnKey style={{fontSize: '3em', color:'#212d4a'}}  />
      <FormControl  marginTop='10%' mb={3}>
        <FormLabel   marginTop='10%' color='#1a243b'>E-mail</FormLabel>
        <InputGroup>
        <InputLeftElement
                pointerEvents="none"
                children={<MdEmail color="#1a243b" />}
              />
        <Input 
          pr="4.5rem"
          type="email" 
          placeholder="Enter your email" 
          width="100%" 
          focusBorderColor="#1a243b" 
          color="#1a243b" 
          borderWidth={2}
          {...register("email")} />
        </InputGroup>
      
      {errors.email?.message && <Box color="red.500" mt={2}>{errors.email.message}</Box>}
      <FormHelperText>A message will be sent to your e-mail with further instructions.</FormHelperText>
      </FormControl>
        
      <Button type='submit' marginTop="20px"  color="white" bgColor='#1c2b4f' width="70%">
        Send
      </Button>
      

      
      </center>
     </Box>
    </form> 
  </VStack>
  );
};





export default RightEmail;