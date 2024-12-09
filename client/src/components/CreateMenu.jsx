import React, { useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import axios from "axios";

function CreateMenu() {
  const [menu, setMenu] = useState({ name: "", description: "" });

  const createMenu = (event) => {
    setMenu({ ...menu, [event.target.name]: event.target.value });
  };

  const handleMenu = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:9000/menu/createMenu",
        menu
      );
      console.log(data);

      if (data.status === 200) {
        localStorage.setItem("menu", data.menu._id);
        setMenu({ name: "", description: "" });
        alert(data.msg);
      } else {
        alert(data.msg);
      }
    } catch (err) {
      console.log("In Error:", err);
    }
  };

  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Row className="w-100">
        <Col md={6} lg={4} className="mx-auto">
          <h2 className="text-center mb-4">Create New Menu</h2>
          <Form onSubmit={handleMenu}>
            <Form.Group controlId="menuName">
              <Form.Label>Menu Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter menu name"
                name="name"
                value={menu.name}
                onChange={createMenu}
              />
            </Form.Group>
            <Form.Group controlId="menuDescription" className="mt-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter menu description"
                name="description"
                value={menu.description}
                onChange={createMenu}
              />
            </Form.Group>
            <a href="/createItem">Create Menu Items</a>
            <br />

            <Button variant="primary" type="submit" className="mt-3 ">
              Create Menu
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default CreateMenu;
