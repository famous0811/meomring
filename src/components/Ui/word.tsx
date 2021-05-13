import React from "react";

interface WordProps {
  word: string;
  meaning: string;
  tip: string;
  detail?: boolean;
  src?: string;
}
function word({ word, meaning, tip, detail }: WordProps) {
  if (detail) {
    return <div></div>;
  }

  return (
    <div className="word itembox">
      <h2>{word}</h2>
      <p>{meaning}</p>
      <p>{tip}</p>
    </div>
  );
}

export default word;
