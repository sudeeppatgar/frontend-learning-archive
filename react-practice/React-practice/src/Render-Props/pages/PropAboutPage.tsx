import PropwithThemeProvider from "../PropwithThemeProvider";

const PropwithAboutPage = () => {
  return (
    <>
      <PropwithThemeProvider
        render={({ theme, toggleTheme }) => (
          <div
            style={{
              background: theme === "light" ? "#fff" : "#000",
              color: theme === "light" ? "#000" : "#fff",
              padding: "20px",
            }}
          >
            <h1>ℹ️ About Page — Theme: {theme}</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
          </div>
        )}
      />
      <h2>helo</h2>
    </>
  );
};

export default PropwithAboutPage;
