import Api from "../client";

import { SgininProps, SginupProps } from "./interface";

export async function Sginin({ id, pwd }: SgininProps) {
  return await Api.post("/account/signin", { id: id, pwd: pwd })
    .then((res) => {
      return res.data.token;
    })
    .catch((err) => {
      console.error(err);
      throw new Error(err.response);
    });
}

export async function SginUp({ id, pwd, name, age }: SginupProps) {
  return await Api.post("/account/signup", {
    id: id,
    pw: pwd,
    name: name,
    age: age,
  })
    .then((res) => {
      console.log("sginup : " + res.data.result);
    })
    .catch((err) => {
      throw new Error(err.response);
    });
}

export async function Token(token: string) {
  return await Api.post("/account/token", { token: token })
    .then((res) => {
      if (!res.data.state) {
        return null;
      }
      return res.data.result;
    })
    .catch((err) => {
      throw new Error(err.response);
    });
}
