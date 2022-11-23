import { Container } from '@chakra-ui/react';

const Wrapper = ({ children }) => {
  return (
    <Container maxW="container.lg" h="100vh" mt="20">
      {children}
    </Container>
  );
};

export default Wrapper;
