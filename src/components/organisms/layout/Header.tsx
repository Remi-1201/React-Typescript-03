// 4- LOGIN画面のみHeaderを表示しない
import { memo, VFC } from "react";
import {
  Box,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Link,
  Drawer,
  DrawerContent,
  DrawerBody,
  Button,
  useDisclosure
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

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

        {/* 4- モバイルサイズの時はアイコンとしてメニューを表示 */}
        <IconButton
          aria-label="Menu"
          icon={<HamburgerIcon />}
          size="sm"
          variant="unstyled"
          // 4- mdサイズの場合はリンク表示に切り替わるので"none"に設定
          display={{ base: "block", md: "none" }}
          // 4- IconをclickするとDrawerが開く
          onClick={onOpen}
        />
      </Flex>
      {/* 4- Drawerタグ = サイドメニュー */}
      <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            {/* 4- p=padding, w=width */}
            <DrawerBody p={0} bg="gray.100">
              <Button w="100%">Top</Button>
              <Button w="100%">Users</Button>
              <Button w="100%">Settings</Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
});
