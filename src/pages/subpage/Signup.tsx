import React, { useState, useCallback } from "react";
import SignUppage from "../../components/sign/SignUp";
import { SginUp } from "../../res/api/account";
const SignUp = () => {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [rpwd, setRpwd] = useState("");
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");

  const onChange = useCallback(
    (what: string, value: any) => {
      switch (what) {
        case "id":
          setId(value);
          break;
        case "pwd":
          setPwd(value);
          break;
        case "rpwd":
          setRpwd(value);
          break;
        case "name":
          setName(value);
          break;
        case "icon":
          setIcon(value);
          break;
        case "age":
          setAge(value);
          break;
      }
    },
    [id, pwd, name, icon, rpwd, age]
  );
  const Sgin = useCallback(() => {
    SginUp({ id, pwd, name, icon, age: parseInt(age) });
  }, [id, pwd, name, icon, rpwd, age]);

  return <SignUppage onChange={onChange} Sgin={Sgin} />;
};

export default SignUp;
