// 5.1- src/organisms/layout/Header.tsxにあるIconButtonをコンポネント化する
import { memo, VFC } from "react";
// 5.3- それぞれのコンポネントを導入
import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

type Props = {
  // neither args nor return
  onOpen: () => void;
}

export const MenuIconButton: VFC<Props> = memo((props) => {
  const { onOpen } = props;
  return (
    // 5.2- Header.tsxから切り取ってきた
    // 4- モバイルサイズの時はアイコンとしてメニューを表示    
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
  );
});
