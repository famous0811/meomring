import { MakeTipProps, FixedTipProp } from "./interface";
import Api from "../client";

export async function MakeTip({ word, text, user, img }: MakeTipProps) {
  return await Api.post("/tip/maketip", {
    word,
    text,
    user,
    img,
  })
    .then((res) => {
      if (res.status === 201) {
        console.log(res.data.result);
        console.log("Tip save error");
      } else {
        console.log("Tip save");
      }
    })
    .catch((err) => {
      throw new Error(err.response);
    });
}

//word text
export async function getsomeTip(text: string) {
  return await Api.post("/getsometip", { text: text })
    .then((res) => {
      if (res.status === 201) {
        console.log("Tip not found");
        return null;
      }
      return res.status;
    })
    .catch((err) => {
      throw new Error(err.response);
    });
}

export async function getallTip(text: string) {
  return await Api.post("/getalltip", { text: text })
    .then((res) => {
      return res.status;
    })
    .catch((err) => {
      throw new Error(err.response);
    });
}

//sudo
export async function fixedtip({ _id, text }: FixedTipProp) {
  return await Api.post("/fixedtip", { _id: _id, text: text })
    .then((res) => {
      return res.status;
    })
    .catch((err) => {
      throw new Error(err.response);
    });
}

export async function getMyTip(id: string) {
  return await Api.post("/tip/getmytip", { id })
    .then((res) => {
      console.log(
        res.data.result
      ); /*
      success {my tips}
      fail {no tips}
      */
      if (res.data.status) return res.data.data;
      return null;
    })
    .catch((err) => {
      throw new Error(err.response);
    });
}
