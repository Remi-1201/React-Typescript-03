// 1- ChakraProviderとその他のコンポネントを導入
import { Button, ChakraProvider } from "@chakra-ui/react";
import "./styles.css";

export default function App() {
  return (
    // 1- return の中身を <ChakraProvider> で囲む
    <ChakraProvider>
      {/* 1- colorSchemeなどのオプションでコンポネントをカストマイズできる */}
      <Button colorScheme="teal">Button</Button>
    </ChakraProvider>
  );
}
