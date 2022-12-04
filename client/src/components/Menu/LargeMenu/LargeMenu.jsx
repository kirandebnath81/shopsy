import { FaUserCircle } from "react-icons/fa";

//styles
import { Container, Box, MenuItems } from "./LargeMenu.styles";

//custom-hook
import { useClickOutside } from "../../../custom-hook";
import { useAuth, useProducts, useProfile } from "../../../contexts";

//router
import { useNavigate, NavLink } from "react-router-dom";

//firebase
import { auth } from "../../../config/firebaseConfig";
import { signOut } from "firebase/auth";
import { ButtonOutline } from "../../../styles/Main.styles";

const LargeMenu = ({ handleLargeMenu, viewMenu }) => {
  const navigate = useNavigate();

  const { user, userName, setUserName } = useAuth();
  const { setAddresses } = useProfile();
  const { setWishlist, setCartItems } = useProducts();

  const menuItems = ["Home", "Explore", "Account", "Addresses", "Orders"];

  //hiding the munu in small screen on outside click
  const largeMenuRef = useClickOutside(() => {
    handleLargeMenu();
  });

  //sign out
  const signoutHandler = () => {
    handleLargeMenu();
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.log(err.message));

    setAddresses([]);
    setWishlist([]);
    setCartItems([]);
    setUserName(null);
    window.scroll(0, 0);
  };

  //navigate to sign in
  const signinHandler = () => {
    navigate("/signin");
    handleLargeMenu();
  };

  //navigate to relevent path
  const handleItems = () => {
    handleLargeMenu();
  };

  return (
    <Container menu={viewMenu ? "view" : "hide"}>
      <Box ref={largeMenuRef} menu={viewMenu ? "view" : "hide"}>
        {user ? (
          <div className="menu__user">
            <FaUserCircle />
            <span>Hello {userName?.name.split(" ")[0]}</span>
          </div>
        ) : (
          <div className="menu__signin">
            <div className="menu__signin-title">Welcome</div>
            <div className="menu__signin-sub-title">
              To access Wishlist or Cart
            </div>
            <ButtonOutline className="menu__signin-btn" onClick={signinHandler}>
              Sign in
            </ButtonOutline>
          </div>
        )}

        <MenuItems>
          {menuItems.map((item, i) => (
            <li key={i} onClick={handleItems}>
              <NavLink
                to={`${item !== "Home" ? "/" + item.toLowerCase() : "/"}`}
                className={({ isActive }) =>
                  isActive ? "menu__item-active" : undefined
                }
              >
                {item}
              </NavLink>
            </li>
          ))}

          {user && (
            <li className="menu__item-signout" onClick={signoutHandler}>
              Sign out
            </li>
          )}
        </MenuItems>
      </Box>
    </Container>
  );
};

export default LargeMenu;
