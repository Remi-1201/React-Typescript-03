// 4- LOGIN画面のみHeaderを表示しない
import { memo, VFC } from "react";
import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header: VFC = memo(() => {
  // 4- useDisclosure=Drawerの表示を設定するフック
  // - useDisclosureを使うとisOpen, onOpen, onCloseをそれぞれ関数定義しなくても良くなる
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {/* 4- as=レンダリングのタグは"nav" */}
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        // 4- "base: 3" =0.75rem
        padding={{ base: 3, md: 5 }}
      >
        {/* 4- mr = margin-right */}
        <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }}>
          {/* 4- Headingタグの中にアプリ名を表記 
      - base, md = chakra-uiのbreakpoints
      - baseサイズ画面の場合、fontSizeは"md"　
      - mdサイズ以上の画面の場合、fontSizeは"lg" */}
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            User Control Application
          </Heading>
        </Flex>

        {/* 4- Headerのメニュー/　flexGrow=padding-left/ base=モバイルサイズ*/}
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          {/* 4- pr=padding-right */}
          <Box pr={4}>
            <Link>Users</Link>
          </Box>
          <Link>Settings</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer onClose={onClose} isOpen={isOpen} />
    </>
  );
});
