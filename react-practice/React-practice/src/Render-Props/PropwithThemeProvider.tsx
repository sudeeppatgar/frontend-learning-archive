import { useState } from "react";

const PropwithThemeProvider = ({ render }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return render({ theme, toggleTheme });
};

export default PropwithThemeProvider;
