const PropwithAuthProvider = ({ render }) => {
  const isAuthenticated = localStorage.getItem("token");

  if (!isAuthenticated) {
    return render({ isAuthenticated: false });
  }

  return render({ isAuthenticated: true, user: { name: "Sudeep" } });
};

export default PropwithAuthProvider;
