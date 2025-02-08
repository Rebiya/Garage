import logo from "../../../assets/images/custom/logo.png";
import icon from "../../../assets/images/icons/icon-bar.png";
import logoo from "../../../assets/images/logo-two.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      {/* Main Header */}
      <header className="main-header header-style-one">
        {/* Header Top */}
        <div className="header-top">
          <div className="auto-container">
            <div className="inner-container">
              <div className="left-column">
                <div className="text">Enjoy the Beso while we fix your car</div>
                <div className="office-hour">
                  Monday - Saturday 7:00AM - 6:00PM
                </div>
              </div>
              <div className="right-column">
                <div className="phone-number">
                  Schedule Your Appointment Today :{" "}
                  <strong>1800 456 7890</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Header Upper */}
        <div className="header-upper">
          <div className="auto-container">
            <div className="inner-container">
              {/* Logo */}
              <div className="logo-box">
                <div className="logo">
                  <Link to="/">
                    <img src={logo} alt="" />
                  </Link>
                </div>
              </div>
              <div className="right-column">
                {/* Nav Box */}
                <div className="nav-outer">
                  {/* Mobile Navigation Toggler */}
                  <div className="mobile-nav-toggler">
                    <img src={icon} alt="" />
                  </div>

                  {/* Main Menu */}
                  <nav className="main-menu navbar-expand-md navbar-light">
                    <div
                      className="collapse navbar-collapse show clearfix"
                      id="navbarSupportedContent"
                    >
                      <ul className="navigation">
                        <li className="dropdown">
                          <Link to="/">Home</Link>
                        </li>
                        <li className="dropdown">
                          <Link to="/about">About Us</Link>
                        </li>
                        <li className="dropdown">
                          <Link to="/services">Services</Link>
                        </li>
                        <li className="dropdown">
                          <Link to="/contact">Contact us</Link>
                        </li>
                        <li className="dropdown">
                          <Link to="/dashboard">Admin</Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="search-btn"></div>
                <div className="link-btn">
                  <Link to="/login" className="theme-btn btn-style-one">
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Header Upper */}

        {/* Sticky Header */}
        <div className="sticky-header">
          {/* Header Upper */}
          <div className="header-upper">
            <div className="auto-container">
              <div className="inner-container">
                {/* Logo */}
                <div className="logo-box">
                  <div className="logo">
                    <Link to="index.html">
                      <img src={logo} alt="" />
                    </Link>
                  </div>
                </div>
                <div className="right-column">
                  {/* Nav Box */}
                  <div className="nav-outer">
                    {/* Mobile Navigation Toggler */}
                    <div className="mobile-nav-toggler">
                      <img src={icon} alt="" />
                    </div>

                    {/* Main Menu */}
                    <nav className="main-menu navbar-expand-md navbar-light"></nav>
                  </div>
                  <div className="search-btn"></div>
                  <div className="link-btn">
                    <Link to="#" className="theme-btn btn-style-one">
                      Log in
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Header Upper */}
        </div>
        {/* End Sticky Menu */}

        {/* Mobile Menu */}
        <div className="mobile-menu">
          <div className="menu-backdrop"></div>
          <div className="close-btn">
            <span className="icon flaticon-remove"></span>
          </div>

          <nav className="menu-box">
            <div className="nav-logo">
              <Link to="index.html">
                <img src={logoo} alt="" title="" />
              </Link>
            </div>
            <div className="menu-outer">
              {/* Here Menu Will Come Automatically Via Javascript / Same Menu as in Header */}
            </div>
          </nav>
        </div>
        {/* End Mobile Menu */}

        <div className="nav-overlay">
          <div className="cursor"></div>
          <div className="cursor-follower"></div>
        </div>
      </header>
      {/* End Main Header */}

    
    </>
  );
};

export default Header;
