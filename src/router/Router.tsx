import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { homeRoutes } from "./HomeRoutes";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";

export const Router: VFC = memo(() => {
  return (
    // 3- <Switch> = ルーティングの分岐
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>

      {/* 3- /Home 配下のルーティングを設定 */}
      <Route
        path="/home"
        render={({ match: { url } }) => (
          <Switch>
            {homeRoutes.map((route) => (
              // 3- mapなのでkeyを設定
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {/* 4- /home配下の全てのページにheaderを設定 */}
                <HeaderLayout>{route.children}</HeaderLayout>
              </Route>
            ))}
          </Switch>
        )}
      />

      {/* Page404 */}
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
});
