import { useCallback, useState } from "react";
import axios from "axios";
import { User } from "../types/api/user";
import { useHistory } from "react-router-dom";
import { useMessage } from "./useMessage";

export const useAuth = () => {
  const history = useHistory();

  const { showMessage } = useMessage();

  // useCallback = prevent needless rendering
  // Use id to login
  const [loading, setLoading] = useState(false);

  const login = useCallback(
    (id: string) => {
      // when fetching data
      setLoading(true);

      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          // when logged in successfully
          if (res.data) {
            showMessage({
              title: "You have successfully logged in",
              status: "success"
            });
            history.push("/home");
            // when failed
          } else {
            showMessage({
              title: "Couldn't find that userId",
              status: "error"
            });
            alert("Wrong UserId!");
          }
        })
        .catch(() =>
          showMessage({ title: "Couldn't find that userId", status: "error" })
        )
        // to enable finally, write "es2018" in tsconfig.json
        .finally(() => setLoading(false));
    },
    [history, showMessage]
  );
  // login, loading = useAuth's props
  return { login, loading };
};
