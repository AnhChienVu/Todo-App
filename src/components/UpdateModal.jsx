import { Modal, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { mutate } from "swr";
import { toast } from "react-toastify";

function UpdateModal({ showUpdateModal, setShowUpdateModal, blog, setBlog }) {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (blog && blog.id) {
      setId(blog.id);
      setTitle(blog.title);
      setAuthor(blog.author);
      setContent(blog.content);
    }
  }, [blog]);

  const handleCloseModal = () => {
    setTitle("");
    setAuthor("");
    setContent("");
    // setBlog(null);
    setShowUpdateModal(false);
  };

  const handleSubmit = () => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, author, content }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          mutate(`http://localhost:8000/blogs`);

          toast.success("Update successfully");
        } else {
          toast.error("Update unsuccessfully");
        }
      });

    handleCloseModal();
  };

  return (
    <>
      <Modal
        show={showUpdateModal}
        onHide={() => {
          setShowUpdateModal(false);
        }}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Update blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Author</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Author..."
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Content</Form.Label>
              <Form.Control
                required
                as="textarea"
                placeholder="Content..."
                row={3}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleCloseModal()}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmit()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateModal;
