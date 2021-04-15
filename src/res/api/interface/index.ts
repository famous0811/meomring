export interface SgininProps {
  id: string;
  pwd: string;
}
export interface SginupProps {
  id: string;
  pwd: string;
  name: string;
  icon?: string;
  age: number;
}
interface Word {
  text: string;
  mean: string;
}

export interface MakeTipProps {
  word: Word;
  img?: string;
  text: string;
  user: string;
}

export interface FixedTipProp {
  _id: string;
  text: string;
}
export interface MakeVocaProp {
  title: string;
  user: string;
  subtitle: string;
  words: Word[];
}

export interface FixedVocaProp {
  _id: string;
  title: string;
  words: Word[]; //일부분 수정하고 수정 완료를 클릭시 보내기
}

export interface SetPointsProp {
  _id: string;
  addpoints: number;
}
