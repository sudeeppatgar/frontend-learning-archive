import { BrowserRouter, Routes, Route } from "react-router-dom";
import withLogger from "./HocwithLogger";
import HocHomePage from "./Pages/HocHomePage";
import HocAboutPage from "./Pages/HocAboutPage";
import HocProfilePage from "./Pages/HocProfilePage";
import withTheme from "./HocwithTheme";
import withAuth from "./HocwithAuth";

const Home = withLogger(HocHomePage);
const About = withLogger(withAuth(withTheme(HocAboutPage)));
const Profile = withLogger(withAuth(HocProfilePage));

function HocComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default HocComponent;
