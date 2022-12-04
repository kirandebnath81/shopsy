import { lazy, Suspense, useEffect } from "react";

import "./App.css";

//toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//router
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

//firebase
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebaseConfig";

//utils
import { readData } from "./utils";

//context
import { useAuth, useProducts, useProfile } from "./contexts";

//component
import { Navbar, Footer } from "./layout";
import { Spinner } from "./components";

//importing the components lazily
const Home = lazy(() => import("./pages/Home/Home"));
const Products = lazy(() => import("./pages/Products/Products"));
const SingleProduct = lazy(() => import("./pages/SingleProduct/SingleProduct"));
const Wishlist = lazy(() => import("./pages/Wishlist/Wishlist"));
const Cart = lazy(() => import("./pages/Cart/Cart"));
const Signin = lazy(() => import("./pages/Auth/Signin"));
const Signup = lazy(() => import("./pages/Auth/Signup"));
const Account = lazy(() => import("./pages/Profile/Account"));
const Orders = lazy(() => import("./pages/Profile/Orders"));
const Addresses = lazy(() => import("./pages/Profile/Addresses"));
const Search = lazy(() => import("./pages/Search/Search"));
const ErrorsPage = lazy(() => import("./pages/ErrorsPage/ErrorsPage"));

const App = () => {
  const { user, setUser, setUserName } = useAuth();
  const { setAddresses, setSelectedAddress, setOrders } = useProfile();
  const { setWishlist, setCartItems } = useProducts();

  //collecting the user data
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({ email: user.email, uid: user.uid });
      } else {
        setUser(null);
      }
    });
  }, [setUser]);

  //Reading data from firebase db
  useEffect(() => {
    if (user) {
      readData(user, "profile", setUserName, null);
      readData(user, "addresses", setAddresses, []);
      readData(user, "orders", setOrders, []);
      readData(user, "selectedAddress", setSelectedAddress, "");
      readData(user, "wishlist", setWishlist, []);
      readData(user, "cartItems", setCartItems, []);
    }
  }, [
    user,
    setUserName,
    setAddresses,
    setOrders,
    setSelectedAddress,
    setWishlist,
    setCartItems,
  ]);

  return (
    <div className="App">
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        pauseOnHover
        theme="light"
      />
      <Router>
        <Navbar />
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Products />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route
              path="/wishlist"
              element={
                user ? <Wishlist /> : <Navigate to={"/signin"} replace />
              }
            />
            <Route
              path="/cart"
              element={user ? <Cart /> : <Navigate to={"/signin"} replace />}
            />
            <Route path="/search/:searchedItem" element={<Search />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/account"
              element={user ? <Account /> : <Navigate to={"/signin"} replace />}
            />
            <Route
              path="/orders"
              element={user ? <Orders /> : <Navigate to={"/signin"} replace />}
            />
            <Route
              path="/addresses"
              element={
                user ? <Addresses /> : <Navigate to={"/signin"} replace />
              }
            />
            <Route path="/404" element={<ErrorsPage />} />
            <Route path="/*" element={<Navigate to={"/404"} />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
