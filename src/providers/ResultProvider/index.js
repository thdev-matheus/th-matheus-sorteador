import { createContext, useState } from "react";

export const ResultContext = createContext({});

export const ResultProvider = ({ children }) => {
  const [result, setResult] = useState(0);

  return (
    <ResultContext.Provider value={{ result, setResult }}>
      {children}
    </ResultContext.Provider>
  );
};
