import Banner from "./banner/Banner";
import Navbar from "./navbar/Navbar";

const Header = () => {
  return (
    <header className="relative">
      <nav aria-label="Top">
        <Banner />
        <Navbar />
      </nav>
    </header>
  );
};

export default Header;
