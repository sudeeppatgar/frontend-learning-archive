import { useEffect } from "react";

const PropwithLogger = ({ name, children }) => {
  useEffect(() => {
    console.log(`✅ ${name} mounted`);
    return () => console.log(`❌ ${name} unmounted`);
  }, [name]);

  return children;
};

export default PropwithLogger;
