import { BallTriangle } from 'react-loader-spinner';
import { Box } from '@chakra-ui/react';

const Loader = () => {
  return (
    <Box display="flex" justifyContent="center">
      <BallTriangle
        height={150}
        width={150}
        radius={5}
        color="#F56565"
        ariaLabel="ball-triangle-loading"
        visible={true}
      />
    </Box>
  );
};

export default Loader;
