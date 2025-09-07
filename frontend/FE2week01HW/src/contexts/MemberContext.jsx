import React, { createContext, useCallback, useContext, useState } from "react";

const MemberContext = createContext();

export const MemberProvider = ({ children }) => {
  const [part, setPart] = useState("");

  const selectPart = useCallback((nextPart) => {
    setPart(nextPart);
  }, []);
  return (
    <div>
      <MemberContext.Provider value={{ part, selectPart }}>
        {children}
      </MemberContext.Provider>
    </div>
  );
};

export default MemberContext;
export const usePart = () => useContext(MemberContext);
