import { useState } from "react";

const withTheme = (WrappedComponent) => {
  return (props) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () =>
      setTheme((prev) => (prev === "light" ? "dark" : "light"));

    return (
      <div
        className={
          theme === "light" ? "bg-white text-black" : "bg-black text-white"
        }
      >
        <button
          onClick={toggleTheme}
          style={{ margin: "10px", padding: "5px 10px" }}
        >
          Toggle Theme
        </button>
        <WrappedComponent {...props} theme={theme} />
      </div>
    );
  };
};

export default withTheme;
