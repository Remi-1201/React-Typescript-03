// 関数コンポネントなので VFC で型定義, memoで不必要な再レンダリングを防ぐ
import { memo, VFC } from "react";

// propsはないので空にしておく
export const Setting: VFC = memo(() => {
  return <p>SETTING PAGE</p>;
});
