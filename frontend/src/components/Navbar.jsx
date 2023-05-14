import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.css';
import logo from '../assets/images/discountoGh.png';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import Login from './Login';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import Register from './Register';
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Badge,
  Button,
} from 'react-bootstrap';

const NavBar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };

  const showLogin = () => {
    setShowLoginModal(true);
    setShowRegisterModal(false);
  };

  const showRegister = () => {
    setShowLoginModal(false);
    setShowRegisterModal(true);
  };

  const closeModal = () => {
    setShowLoginModal(false);
    setShowRegisterModal(false);
  };

  return (
    <>
      <Navbar className="navbar navbar-expand-lg">
        <Container>
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" height={50} width={100} />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto mb-2 mb-lg-0">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/daily-offers">
                Daily Offers
              </Link>
              <Link className="nav-link" to="/categories">
                Categories
              </Link>
              <Link className="nav-link" to="/announcements">
                Announcements
              </Link>
              <Link className="nav-link" to="/about-us">
                About Us
              </Link>
            </Nav>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav
                className="ms-auto"
                style={{ fontSize: '20px', color: 'black' }}
              >
                {/* <SearchBox /> */}
                <LinkContainer to="/cart">
                  <Nav.Link style={{ color: 'black' }}>
                    <FaShoppingCart /> Cart
                    {cartItems.length > 0 && (
                      <Badge pill bg="success" style={{ marginLeft: '5px' }}>
                        {cartItems.reduce((a, c) => a + c.qty, 0)}
                      </Badge>
                    )}
                  </Nav.Link>
                </LinkContainer>
                {userInfo ? (
                  <>
                    <NavDropdown title={userInfo.name} id="username">
                      <LinkContainer to="/profile">
                        <NavDropdown.Item>Profile</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Item onClick={logoutHandler}>
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  </>
                ) : (
                  <Button className="nav-link btn btn-link" onClick={showLogin}>
                    <FaUser /> Sign In
                  </Button>
                )}

                {/* Admin Links */}
                {userInfo && userInfo.isAdmin && (
                  <NavDropdown title="Admin" id="adminmenu">
                    <LinkContainer to="/admin/productlist">
                      <NavDropdown.Item>Products</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/orderlist">
                      <NavDropdown.Item>Orders</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/userlist">
                      <NavDropdown.Item>Users</NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>
                )}
              </Nav>
            </Navbar.Collapse>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Login
        show={showLoginModal}
        onHide={closeModal}
        showOtherModal={showRegister}
      />
      <Register
        show={showRegisterModal}
        onHide={closeModal}
        showOtherModal={showLogin}
      />
    </>
  );
};

export default NavBar;
