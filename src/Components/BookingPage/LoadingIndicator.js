import { Spinner } from '@chakra-ui/react';

const LoadingIndicator = () => {

  return (
    <div style={{ textAlign: "center", width: "200px" }}>
      <Spinner thickness={3} size="lg" color="#F4CE14" />
    </div>
  );
};

export default LoadingIndicator;
