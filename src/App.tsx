// 1- ChakraProviderとその他のコンポネントを導入
import { Button, ChakraProvider } from "@chakra-ui/react";
// 2- Globalスタイルのthemeを導入
import theme from "./theme/theme";

export default function App() {
  return (
    // 1- return の中身を <ChakraProvider> で囲む
    // 2- Globalスタイルのthemeを適用
    <ChakraProvider theme={theme}>
      {/* 1- colorSchemeなどのオプションでコンポネントをカストマイズできる */}
      <Button colorScheme="teal">Button</Button>

      {/* 2- Globalスタイルを適用したので、文字の色も灰色に変わった */}
      <p>Globalスタイルを導入してみました</p>
    </ChakraProvider>
  );
}
