import { useEffect } from "react";

const withLogger = (WrappedComponent) => {
  return (props) => {
    useEffect(() => {
      console.log(`✅ ${WrappedComponent.name} mounted`);
      return () => console.log(`❌ ${WrappedComponent.name} unmounted`);
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withLogger;
