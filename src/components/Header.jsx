import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import { useState } from "react";

function Header() {
  const [user, setUser] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const handleLogin = () => {
    setUser(true);
    setShowLoginModal(true);
  };

  const handleSignup = () => {
    setShowSignupModal(true);
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Link href="/" className="navbar-brand">
            Note App
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link href="/blogs" className="nav-link">
                Blogs
              </Link>
            </Nav>
            <Button className="mx-3" onClick={handleSignup}>
              Sign up
            </Button>
            <Button onClick={handleLogin}>Log in</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <LoginModal
        showLoginModal={showLoginModal}
        setShowLoginModal={setShowLoginModal}
      />
      <SignupModal
        showSignupModal={showSignupModal}
        setShowSignupModal={setShowSignupModal}
      />
    </>
  );
}

export default Header;
