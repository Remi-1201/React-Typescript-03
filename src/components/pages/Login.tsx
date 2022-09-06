// 関数コンポネントなので VFC で型定義, memoで不必要な再レンダリングを防ぐ
import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { memo, VFC } from "react";

import { PrimaryButton } from "../atoms/button/PrimaryButton";

// propsはないので空にしておく
export const Login: VFC = memo(() => {
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          User Control Application
        </Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input placeholder="User ID" />
          {/* 8- PrimaryButton = parent component
          - "Login" = children*/}
          <PrimaryButton>Login</PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
