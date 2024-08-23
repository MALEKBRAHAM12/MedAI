import React, { useState } from 'react';
import { Input, InputGroup, InputLeftElement, InputRightElement, IconButton, Box, FormControl, FormLabel, Button, FormHelperText, VStack, Heading, Text } from '@chakra-ui/react';
import { MdOutlineVpnKey, MdEmail, MdPersonOutline, MdLockOutline, MdPhone } from "react-icons/md";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ZodType, z } from 'zod';

type FormData = {
    fullName: string;
    email: string;
    phone: string;
    password: string;
};

const schema: ZodType<FormData> = z.object({
    fullName: z.string().min(1, "Please enter your full name"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(8, "Phone number must be at least 10 digits"),
    password: z.string().min(6, "Password must be at least 6 characters")
});

const RightEmail: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const submitData = (data: FormData) => {
        console.log("Form Data:", data);
    };

    return (
        <VStack className="right-section">
            <Heading marginTop="10px" style={{ fontSize: '4em', padding: '3px', marginLeft: '85%', color: '#1c2b4f' }}>MED'AI</Heading>
            <form onSubmit={handleSubmit(submitData)}>
                <Box width="350px" marginLeft="40%" marginTop="2px">
                    <Text fontSize='2xl' top="2px" marginLeft='29%' fontWeight="bold" color='#29385c'>New Account</Text>
                    <center>
            
                        <FormControl marginTop='5%' mb={1}>
                            <FormLabel marginTop='1px' color='#1a243b'>Full Name</FormLabel>
                            <InputGroup>
                                <InputLeftElement pointerEvents="none" children={<MdPersonOutline color="#1a243b" />} />
                                <Input
                                    type="text"
                                    placeholder="Enter your full name"
                                    {...register("fullName")}
                                />
                            </InputGroup>
                            {errors.fullName?.message && <Box  fontSize='xs'color="red.500" mt={0.2}>{errors.fullName.message}</Box>}
                        </FormControl>

                        <FormControl marginTop='2' mb={1}>
                            <FormLabel color='#1a243b'>E-mail</FormLabel>
                            <InputGroup>
                                <InputLeftElement pointerEvents="none" children={<MdEmail color="#1a243b" />} />
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    {...register("email")}
                                />
                            </InputGroup>
                            {errors.email?.message && <Box color="red.500"  fontSize='xs' mt={0.2}>{errors.email.message}</Box>}
                        </FormControl>

                        <FormControl marginTop='2' mb={1}>
                            <FormLabel color='#1a243b'>Phone Number</FormLabel>
                            <InputGroup>
                                <InputLeftElement pointerEvents="none" children={<MdPhone color="#1a243b" />} />
                                <Input
                                    type="tel"
                                    placeholder="Enter your phone number"
                                    {...register("phone")}
                                />
                            </InputGroup>
                            {errors.phone?.message && <Box color="red.500"  fontSize='xs' mt={0.2}>{errors.phone.message}</Box>}
                        </FormControl>

                        <FormControl marginTop='2' mb={1}>
                            <FormLabel color='#1a243b'>Password</FormLabel>
                            <InputGroup>
                                <InputLeftElement pointerEvents="none" children={<MdLockOutline color="#1a243b" />} />
                                <Input
                                    pr="4.5rem"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter password"
                                    {...register("password")}
                                />
                                <InputRightElement width="4.5rem">
                                    <IconButton
                                        h="1.75rem"
                                        size="sm"
                                        onClick={togglePasswordVisibility}
                                        icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                                    />
                                </InputRightElement>
                            </InputGroup>
                            {errors.password?.message && <Box color="red.500"  fontSize='xs' mt={0.2}>{errors.password.message}</Box>}
                        </FormControl>

                        <Button type='submit' marginTop="20px" color="white" bgColor='#1c2b4f' width="70%">
                            Register
                        </Button>
                    </center>
                </Box>
            </form>
        </VStack>
    );
};

export default RightEmail;
