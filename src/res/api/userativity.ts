import { SetPointsProp } from "./interface";
import Api from "../client";

export function GetPoints(_id: string) {
  return Api.post("/getpoint", { _id: _id })
    .then((res) => {
      console.log(res.data.result);
      return res.data.data;
    })
    .catch((err) => {
      throw new Error(err.response);
    });
}

export function SetPoints({ _id, addpoints }: SetPointsProp) {
  return Api.post("/setpoint", { _id: _id, addpoint: addpoints })
    .then((res) => {
      if (res.status === 201) {
        console.error(res.data.result);
      }
      console.log(res.data.result);
    })
    .catch((err) => {
      throw new Error(err.response);
    });
}
