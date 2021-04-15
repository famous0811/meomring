import React, { useState, useCallback } from "react";
import Loginpage from "../../components/sign/login";
import { Sginin } from "../../res/api/account";
import useStores from "../../store";
const Login = () => {
  const { userActivitystore } = useStores();
  const [button, setbutton] = useState("one");
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  const slider = useCallback((i: string) => {
    setbutton(i);
  }, []);

  const sgin = useCallback(() => {
    Sginin({ id, pwd }).then((res: string) => {
      userActivitystore.login({ id, token: res });
    });
  }, [id, pwd, userActivitystore]);

  const setid = useCallback((e: any) => {
    setId(e.target.value);
  }, []);
  const setpassword = useCallback((e: any) => {
    setPwd(e.target.value);
  }, []);

  return (
    <Loginpage
      slider={slider}
      button={button}
      sgin={sgin}
      setid={setid}
      setpassword={setpassword}
    />
  );
};

export default Login;
