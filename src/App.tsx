// 1- ChakraProviderとその他のコンポネントを導入
import { ChakraProvider } from "@chakra-ui/react";
// 3- BrowserRouterを導入
import { BrowserRouter } from "react-router-dom";
// 2- Globalスタイルのthemeを導入
import theme from "./theme/theme";
// 3- Routerコンポネントを導入
import { Router } from "./router/Router";

export default function App() {
  return (
    // 1- return の中身を <ChakraProvider> で囲む
    // 2- Globalスタイルのthemeを適用
    <ChakraProvider theme={theme}>
      {/* 3- React-router関連設定 / <BrowserRouter>でChakraProviderの中身を囲む */}
      <BrowserRouter>
        {/* 3- Routerコンポネントを導入 */}
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}
