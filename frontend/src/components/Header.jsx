import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
// import SearchBox from './SearchBox';
import logo from '../assets/discountoGh.png';

import '../assets/styles/Nav.css'

const Header = () => {
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

  return (
    <header>
      <Navbar variant="dark" expand="lg" style={{backgroundColor:'#00EEC1'}} collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img src={logo} alt="DiscountoGH" />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="justify-content-center" variant='dark' activeKey="/home">
            <Nav.Item style={{textSizeAdjust: 'auto'}}>
              <Nav.Link style={{ fontSize: '20px', color: 'black' }} href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={{ fontSize: '20px', color: 'black' }} href="/daily-offers">Daily Offers</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={{ fontSize: '20px', color: 'black' }} href='/categories'>Categories</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={{ fontSize: '20px', color: 'black' }} href='/announcements'>
                Announcements
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" style={{ fontSize: '20px', color: 'black' }} >
              {/* <SearchBox /> */}
              <LinkContainer to="/cart">
                <Nav.Link style={{color:'black' }} >
                  <FaShoppingCart /> Cart
                  {cartItems.length > 0 && (
                    <Badge pill bg="success" style={{ marginLeft: '5px'}}>
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
                <LinkContainer to="/login">
                  <Nav.Link style={{color: 'black'}}>
                    <FaUser /> Sign In
                  </Nav.Link>
                </LinkContainer>
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
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
