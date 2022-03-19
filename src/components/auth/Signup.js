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

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [show, setShow] = useState(false);

  const togglePassword = () => setShow(!show);

  const setPicture = (pics) => {}

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password, (password == confirmPassword));
  };
  
  return (
    <VStack spacing={5}>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
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
      <FormControl>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Confirm your password"
            onChange={(e) => setConfirmPassword(e.target.value)} 
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={togglePassword}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Profile Picture</FormLabel>
        <Input
          type="file"
          accept="image/*"
          p={1}
          onChange={(e) => setPicture(e.target.files[0])}
        />
      </FormControl>
      <Button type="submit" colorScheme="blue" w="100%" onClick={handleSubmit}>
        Signup
      </Button>
    </VStack>
  )
}

export default Signup