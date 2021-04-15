import React from "react";
interface MypageProps {
  user:
    | {
        id: string | null;
        points: number | null;
        maketips: number | null;
      }
    | undefined;
}
const index = ({ user }: MypageProps) => {
  return <div></div>;
};

export default index;
