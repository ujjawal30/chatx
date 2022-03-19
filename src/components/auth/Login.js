import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const togglePassword = () => setShow(!show);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  
  return (
    <VStack spacing={5}>
      <FormControl>
        <FormLabel>E-mail</FormLabel>
        <Input
          type="email"
          placeholder="Enter your e-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)} 
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={togglePassword}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button type="submit" colorScheme="blue" w="100%" onClick={handleSubmit}>
        Login
      </Button>
    </VStack>
  );
};

export default Login;
