// 2- グローバル・スタイルに必要なchakra-uiのextendThemeを導入
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    // 2- グロバールなスタイル
    global: {
      body: {
        // 2- https://chakra-ui.com/docs/styled-system/theme を参照
        backgroundColor: "gray.100", // <-背景色
        color: "gray.800" // <-文字の色
      }
    }
  }
});
// 2- 他のところからimportできるようにexportする
export default theme;
