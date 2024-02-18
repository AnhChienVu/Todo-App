import { Modal, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { mutate } from "swr";
import { toast } from "react-toastify";

function DeleteModal({ showDeleteModal, setShowDeleteModal, blog, setBlog }) {
  const handleSubmit = () => {
    fetch(`http://localhost:8000/blogs/${blog?.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          mutate(`http://localhost:8000/blogs`);
          handleCloseModal();
          toast.success("Delete successfully");
        } else {
          toast.error("Delete unsuccessfully");
        }
      });
  };

  const handleCloseModal = () => {
    setShowDeleteModal(false);
  };

  return (
    <>
      <Modal
        show={showDeleteModal}
        onHide={() => {
          setShowDeleteModal(false);
        }}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Do you want to delete this blog with id: {blog?.id}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleCloseModal()}>
            Close
          </Button>
          <Button variant="danger" onClick={() => handleSubmit()}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;
