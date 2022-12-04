import { useState } from "react";

//icons
import { CgProfile } from "react-icons/cg";
import { BiArrowBack, BiMenu } from "react-icons/bi";
import { VscHeart } from "react-icons/vsc";
import { IoSearchOutline } from "react-icons/io5";
import { BsBagCheck } from "react-icons/bs";

//badge from mui
import Badge from "@mui/material/Badge";
import { createTheme, ThemeProvider } from "@mui/material/styles";

//styles
import {
  StyledNav,
  Box,
  StyledLogo,
  NavItems,
  LoginButton,
  BackIcon,
} from "./Navbar.styles";

//utils
import { getTotalItems } from "../../utils";

//custom-hook
import { useClickOutside, useResize } from "../../custom-hook";

//context
import { useAuth, useProducts } from "../../contexts";

//router
import { useNavigate, useLocation, Link, NavLink } from "react-router-dom";

//components
import { SearchInput, LargeMenu, SmallMenu } from "../../components";

//mui theme for custom badge color
const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(247, 39, 49)",
    },
  },
});

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  //central state
  const { user } = useAuth();
  const { cartItems, wishlist } = useProducts();

  //local state
  const [isSearch, setIsSearch] = useState(false);
  const [isSmallMenu, setIsSmallMenu] = useState(false);
  const [isLargeMenu, setIsLargeMenu] = useState(false);

  const navlinks = ["Home", "Explore"];

  // Custom-hooks
  // closing search box on outside click on small screen
  const searchRef = useClickOutside(() => {
    setIsSearch(false);
  });

  //hiding the munu in large screen on outside click
  const smallMenuRef = useClickOutside(() => {
    setIsSmallMenu(false);
  });

  //setting search state false in the large screen
  useResize(() => setIsSearch(false));

  //small menu
  const smallMenuHandler = () => {
    setIsSmallMenu((prev) => !prev);
  };

  //large menu
  const largeMenuHandler = () => {
    setIsLargeMenu(false);
  };

  //no navbar in error page
  if (pathname === "/404") {
    return;
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledNav ref={searchRef}>
        <Box>
          {!isSearch ? (
            <>
              {/* Navbar */}
              <div className="navbar__large-menu">
                <BiMenu onClick={() => setIsLargeMenu(true)} />

                <LargeMenu
                  handleLargeMenu={largeMenuHandler}
                  viewMenu={isLargeMenu}
                />
              </div>
              <StyledLogo>
                <Link to={"/"}>
                  <span>S</span>hopsy
                </Link>
              </StyledLogo>
              <div className="navbar__search">
                <SearchInput />
              </div>

              <NavItems>
                {navlinks.map((item, i) => (
                  <li key={i} className="navbar__item">
                    <NavLink
                      to={`${item === "Home" ? "/" : "/explore"}`}
                      className={({ isActive }) =>
                        isActive ? "navbar__item-active" : undefined
                      }
                    >
                      {item}
                    </NavLink>
                  </li>
                ))}

                <li
                  data-info="Search"
                  className="navbar__search-icon"
                  onClick={() => setIsSearch(true)}
                >
                  <IoSearchOutline />
                </li>

                <li>
                  <Link to={"/wishlist"}>
                    <Badge
                      color="primary"
                      badgeContent={wishlist ? getTotalItems(wishlist) : 0}
                    >
                      <VscHeart />
                    </Badge>
                  </Link>
                </li>
                <li>
                  <Link to={"/cart"}>
                    <Badge
                      badgeContent={cartItems ? getTotalItems(cartItems) : 0}
                      color="primary"
                    >
                      <BsBagCheck />
                    </Badge>
                  </Link>
                </li>

                {/* login */}
                {user ? (
                  <div className="navbar__small-menu" ref={smallMenuRef}>
                    <CgProfile onClick={smallMenuHandler} />
                    {isSmallMenu && <SmallMenu handleMenu={smallMenuHandler} />}
                  </div>
                ) : (
                  <LoginButton onClick={() => navigate("/signin")}>
                    Sign in
                  </LoginButton>
                )}
              </NavItems>
            </>
          ) : (
            <>
              {/* navbar search Input in small screen */}
              <BackIcon
                className="navbar__back-icon"
                onClick={() => setIsSearch(false)}
                data-info="Back"
              >
                <BiArrowBack />
              </BackIcon>
              <SearchInput />
            </>
          )}
        </Box>
      </StyledNav>
    </ThemeProvider>
  );
};

export default Navbar;
