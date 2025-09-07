import React, { createContext, useCallback, useContext, useState } from "react";

const MemberContext = createContext();

export const MemberProvider = ({ children }) => {
  const [part, setPart] = useState("");

  const changePart = useCallback((nextPart) => {
    setPart(nextPart);
  }, []);
  return (
    <div>
      <MemberContext.Provider value={{ part, changePart }}>
        {children}
      </MemberContext.Provider>
    </div>
  );
};

export default MemberContext;
export const usePart = () => useContext(MemberContext);
