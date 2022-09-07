import { useCallback, useState } from "react";
import axios from "axios";
import { User } from "../types/api/user";
import { useHistory } from "react-router-dom";

export const useAuth = () => {
  const history = useHistory();
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
          if (res.data) {
            history.push("/home");
          } else {
            alert("Wrong UserId!");
          }
        })
        .catch(() => alert("The login attempt failed"))
        // to enable finally, write "es2018" in tsconfig.json
        .finally(() => setLoading(false));
    },
    [history]
  );
  // login, loading = useAuth's props
  return { login, loading };
};
