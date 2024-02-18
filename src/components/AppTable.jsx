import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useState } from "react";
import CreateModal from "./CreateModal";
import UpdateModal from "./UpdateModal";
import Link from "next/link";
import DeleteModal from "./DeleteModal";

function AppTable({ blogs }) {
  const [blog, setBlog] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className="mb-3"
      >
        <h1>Table Blogs</h1>
        <Button onClick={() => setShowCreateModal(true)}>Add new</Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Author</th>
            {/* <th>Content</th> */}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {blogs?.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.author}</td>
              {/* <td>{item.content}</td> */}
              <td>
                <Link className="btn btn-primary" href={`/blogs/${item.id}`}>
                  View
                </Link>
                <Button
                  variant="warning"
                  className="mx-3"
                  onClick={() => {
                    setBlog(item);
                    setShowUpdateModal(true);
                  }}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => {
                    setBlog(item);
                    setShowDeleteModal(true);
                  }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <CreateModal
        showCreateModal={showCreateModal}
        setShowCreateModal={setShowCreateModal}
      />

      <UpdateModal
        showUpdateModal={showUpdateModal}
        setShowUpdateModal={setShowUpdateModal}
        blog={blog}
        setBlog={setBlog}
      />

      <DeleteModal
        showDeleteModal={showDeleteModal}
        setShowDeleteModal={setShowDeleteModal}
        blog={blog}
        setBlog={setBlog}
      />
    </>
  );
}

export default AppTable;
