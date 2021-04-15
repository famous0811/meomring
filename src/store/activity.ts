import { action, observable } from "mobx";

interface UserProps {
  points: number | null;
  maketips: number | null;
  id: string | null;
  token: string | null;
}

export default class UserStore {
  @observable User: UserProps = {
    points: null,
    maketips: null,
    id: null,
    token: null,
  };
  constructor() {
    this.User.token = window.localStorage.getItem("token");
  }
  @action login({ id, token }: { id: string; token: string }) {
    this.User.id = id;
    this.User.token = token;
  }
  @action logout() {
    window.localStorage.setItem("token", "");
    this.User = {
      points: null,
      maketips: null,
      id: null,
      token: null,
    };
    window.localStorage.clear();
  }
  @action userid() {
    if (this.User.id != null) return this.User.id;
    else return "";
  }
  @action isLogin() {
    return this.User.token !== null;
  }
  @action getActive({
    points,
    maketips,
  }: {
    points: number;
    maketips: number;
  }) {
    this.User.points = points;
    this.User.maketips = maketips;
  }
  @action userActivity() {
    return {
      id: this.User.id,
      points: this.User.points,
      maketips: this.User.maketips,
    };
  }
}
