import PropwithAuthProvider from "../PropwithAuthProvider";

const PropProfilePage = () => {
  return (
    <PropwithAuthProvider
      render={({ isAuthenticated, user }) =>
        isAuthenticated ? (
          <h1>👤 Welcome, {user.name}</h1>
        ) : (
          <h1>🔒 Please log in first</h1>
        )
      }
    />
  );
};

export default PropProfilePage;
