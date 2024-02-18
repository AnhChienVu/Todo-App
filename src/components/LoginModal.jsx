import { Modal, Form, Button } from "react-bootstrap";
import { useState } from "react";

function LoginModal({ showLoginModal, setShowLoginModal }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Modal
        show={showLoginModal}
        onHide={() => {
          setShowLoginModal(false);
        }}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>User Name:</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="User name..."
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => handleSubmit()}>
            Sign in
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginModal;
