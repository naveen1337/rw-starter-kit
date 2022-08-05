import React, { useState } from "react";

export const HomeContext = React.createContext<any>(null);

export function useHomeLocalState() {
  const [keyword, setkeyWord] = useState("");
  return {
    keyword,
    setkeyWord,
  };
}
