import { Container } from "./SmallMenu.styles";

import { useNavigate } from "react-router-dom";

//firebase
import { signOut } from "firebase/auth";
import { auth } from "../../../config/firebaseConfig";

//context
import { useAuth, useProducts, useProfile } from "../../../contexts";

const SmallMenu = ({ handleMenu }) => {
  const navigate = useNavigate();

  //central state
  const { userName, setUserName } = useAuth();
  const { setAddresses } = useProfile();
  const { setWishlist, setCartItems } = useProducts();

  //menu items
  const menuItems = ["Account", "Addresses", "Orders", "Sign out"];

  //menu item click handler
  const clickHandler = (item) => {
    handleMenu();

    const newItem = item.toLowerCase();

    if (item !== "Sign out") {
      navigate(`/${newItem}`);
    } else {
      //sign out
      signOut(auth)
        .then(() => {
          console.log("Success");
          navigate("/");
        })
        .catch((err) => console.log(err.message));

      setAddresses([]);
      setWishlist([]);
      setCartItems([]);
      setUserName(null);
    }
  };

  return (
    <Container>
      <div className="menu__header">Hello {userName?.name.split(" ")[0]}</div>

      <div className="menu__items">
        {menuItems.map((item, i) => (
          <div key={i} onClick={() => clickHandler(item)}>
            {item}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default SmallMenu;
