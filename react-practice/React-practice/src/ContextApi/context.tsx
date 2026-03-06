import { createContext, useContext } from "react";

export const Biocontext = createContext("");

export const BioProvider = ({ children }) => {
  const name = "sudeep";
  const age = 21;
  return (
    <Biocontext.Provider value={{ name, age }}>{children}</Biocontext.Provider>
  );
};

export const useBio = () => {
  const context = useContext(Biocontext);
  if (!context) {
    throw new Error("Must be covered in BioProvider");
  }
  return context;
};
