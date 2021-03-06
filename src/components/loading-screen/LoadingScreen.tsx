import React from "react";
import { Flex, CircularProgress } from "@chakra-ui/core";

function LoadingScreen() {
  return (
    <Flex
      height="100%"
      width="100%"
      alignItems="center"
      justifyContent="center"
    >
      <CircularProgress isIndeterminate={true} />
    </Flex>
  );
}

export default LoadingScreen;
