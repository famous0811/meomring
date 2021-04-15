import { MakeVocaProp, FixedVocaProp } from "./interface";
import Api from "../client";

export async function MakeVoca({ title, user, words, subtitle }: MakeVocaProp) {
  return await Api.post("/voca/makevoca", {
    title,
    user,
    words,
    subtitle,
  })
    .then((res) => {
      if (res.status === 201) {
        console.error(res.status);
        return null;
      }
      console.log(res.data.status);
    })
    .catch((err) => {
      throw new Error(err.response);
    });
}

export async function FixedVoca({ _id, title, words }: FixedVocaProp) {
  return await Api.post("/voca/fixedvoca", {
    _id: _id,
    title: title,
    words: words,
  })
    .then((res) => {
      console.log(res.status);
    })
    .catch((err) => {
      throw new Error(err.response);
    });
}

export async function getsomeVoca(title: string) {
  return await Api.post("/voca/getsomevoca", { title: title })
    .then((res) => {
      if (res.status === 201) {
        console.error(res.status);
        return null;
      }
      return res.status;
    })
    .catch((err) => {
      throw new Error(err.response);
    });
}

export async function getallVoca() {
  return await Api.post("/voca/getallvoca")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw new Error(err.response);
    });
}

export async function getMyVoca(id: string) {
  return await Api.post("/voca/getmyvoca", { id })
    .then((res) => {
      console.log(res.data.result);
      if (res.data.state) {
        return res.data.data;
      }
      return null;
    })
    .catch((err) => {
      throw new Error(err.response);
    });
}
