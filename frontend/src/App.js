import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import { useContext, useEffect, useState } from "react";
import { Store } from "./Store";
import Badge from "react-bootstrap/esm/Badge";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartScreen from "./screens/CartScreen";
import SigninScreen from "./screens/SigninScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import SignUpScreen from "./screens/SignupScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import OrderHistoryScreen from "./screens/OrderHistoryScreen";
import ProfileScreen from "./screens/ProfileScreen";
import Footer from "./components/Footer";
import Button from "react-bootstrap/esm/Button";
import { getError } from "./utils";
import axios from "axios";
import SearchBox from "./components/SearchBox";
import SearchScreen from "./screens/SearchScreen";
import ProtectedRoute from "./components/ProtectedRoute";
import DashBoardScreen from "./screens/DashBoardScreen";
import AdminRoute from "./components/AdminRoute";
import ProductListScreen from "./screens/ProductListScreen";
import { Toggle } from "./components/compon/Toggle";
import { useDarkMode } from "./components/styles/useDarkMode";
import { ThemeProvider } from "styled-components";
import {
  lightTheme,
  darkTheme,
  GlobalStyles,
} from "./components/styles/GlobalStyles";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";


function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;
  console.log(cart.cartItems);
  const signoutHandler = () => {
    ctxDispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");
    localStorage.removeItem("shippingAddress");
    localStorage.removeItem("paymentMethod");
    window.location.href = "/signin";
  };
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get("/api/products/categories");
        console.log(data);
        setCategories(data);
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchCategories();
  }, []);
  console.log(categories);
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  return (
    <BrowserRouter>
      <ThemeProvider theme={themeMode}>
        <div
          className={
            sidebarIsOpen
              ? "d-flex flex-column site-container active-cont"
              : "d-flex flex-column site-container"
          }
        >
          <GlobalStyles />
          <ToastContainer position="bottom-center" limit={1} />
          <header>
            <Navbar bg="dark" variant="dark" expand="lg">
              <Container>
                <Button
                  variant="dark"
                  onClick={() => {
                    setSidebarIsOpen(!sidebarIsOpen);
                  }}
                >
                  <i className="fas fa-bars"></i>
                </Button>
                <LinkContainer to="/">
                  <Navbar.Brand>amazona</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <SearchBox />
                  <Toggle theme={theme} toggleTheme={toggleTheme} />
                  <Nav className="me-auto w-100 justify-content-end">
                    <Link to="/cart" className="nav-link">
                      cart
                      {cart.cartItems.length > 0 && (
                        <Badge pill bg="danger">
                          {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                        </Badge>
                      )}
                    </Link>
                    {userInfo ? (
                      <NavDropdown
                        title={userInfo.name}
                        id="basic-nav-dropdown"
                      >
                        <LinkContainer to="/profile">
                          <NavDropdown.Item>User Profile</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/orderhistory">
                          <NavDropdown.Item>Order History</NavDropdown.Item>
                        </LinkContainer>
                        <NavDropdown.Divider />
                        <Link
                          className="dropdown-item"
                          to="#signout"
                          onClick={signoutHandler}
                        >
                          Sign Out
                        </Link>
                      </NavDropdown>
                    ) : (
                      <Link className="nav-link" to="/signin">
                        Sign In
                      </Link>
                    )}
                    {userInfo && userInfo.isAdmin && (
                      <NavDropdown title="Admin" id="admin-nav-dropdown">
                        <LinkContainer to="/admin/dashboard">
                          <NavDropdown.Item>Dashboard</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/admin/products">
                          <NavDropdown.Item>Products</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/admin/orders">
                          <NavDropdown.Item>Orders</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/admin/users">
                          <NavDropdown.Item>Users</NavDropdown.Item>
                        </LinkContainer>
                      </NavDropdown>
                    )}
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </header>
          <div
            className={
              sidebarIsOpen
                ? "active-nav side-navbar d-flex align-items-centerflex-wrap flex-column"
                : "side-navbar d-flex align-items-center flex-wrap flex-column"
            }
          >
            <Nav className="flex-column text-white w-100 p-2">
              <Nav.Item>
                <strong>Categories</strong>
              </Nav.Item>
              {categories.map((category) => (
                <Nav.Item key={category}>
                  <LinkContainer
                    to={`/search?category=${category}`}
                    onClick={() => setSidebarIsOpen(false)}
                  >
                    <Nav.Link>{category}</Nav.Link>
                  </LinkContainer>
                </Nav.Item>
              ))}
            </Nav>
          </div>
          <main>
            <Container className="mt-3">
              <Routes>
                <Route path="/product/:slug" element={<ProductScreen />} />
                <Route path="/cart" element={<CartScreen />} />
                <Route path="/signin" element={<SigninScreen />} />
                <Route path="/signup" element={<SignUpScreen />} />
                <Route path="/shipping" element={<ShippingAddressScreen />} />
                <Route path="/payment" element={<PaymentScreen />} />
                <Route path="/placeorder" element={<PlaceOrderScreen />} />
                <Route
                  path="/admin/dashboard"
                  element={
                    <AdminRoute>
                      <DashBoardScreen />
                    </AdminRoute>
                  }
                />
                <Route
                  path="/admin/products"
                  element={
                    <AdminRoute>
                      <ProductListScreen />
                    </AdminRoute>
                  }
                />
                <Route
                  path="/orderhistory"
                  element={
                    <ProtectedRoute>
                      <OrderHistoryScreen />
                    </ProtectedRoute>
                  }
                />
                <Route path="/search" element={<SearchScreen />} />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <ProfileScreen />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/order/:id"
                  element={
                    <ProtectedRoute>
                      <OrderScreen />
                    </ProtectedRoute>
                  }
                />
                <Route path={`/`} element={<HomeScreen />} />
              </Routes>
            </Container>
          </main>
          {/* <footer className="text-center">all reight reserved</footer> */}
          <Footer className="mt-5" />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
