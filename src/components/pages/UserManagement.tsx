// 関数コンポネントなので VFC で型定義, memoで不必要な再レンダリングを防ぐ
import { Box, Stack, Wrap, WrapItem, Image, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { UserCard } from "../organisms/user/UserCard";

// propsはないので空にしておく
export const UserManagement: VFC = memo(() => {
  return (
    <Wrap p={{ base: 4, md: 10 }}>
      <WrapItem>
        <UserCard
          imageUrl={"https://source.unsplash.com/random"}
          userName={"Harry"}
          fullName={"Harry Potter"}
        />
      </WrapItem>
    </Wrap>
  );
});
