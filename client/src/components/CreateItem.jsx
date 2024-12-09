import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

function CreateItem() {
  const [menus, setMenus] = useState([]);
  const [item, setItem] = useState({
    name: "",
    description: "",
    price: "",
    menuId: "",
  });

  const createItem = (event) => {
    setItem({ ...item, [event.target.name]: event.target.value });
  };

  const handleItem = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:9000/item/createItem",
        item
      );
      if (data.status === 200) {
        setItem({ name: "", description: "", price: "", menuId: "" });
        alert(data.msg);
      } else {
        alert(data.msg);
      }
    } catch (err) {
      console.log("In Error:", err);
    }
  };

  const getMenu = async () => {
    try {
      const { data } = await axios.get("http://localhost:9000/menu/getMenu");
      if (data) {
        setMenus(data);
      } else {
        console.log("Error in fetching");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Row className="w-100">
        <Col md={6} lg={4} className="mx-auto">
          <h2 className="text-center mb-4">Add New Item</h2>
          <Form onSubmit={handleItem}>
            <Form.Group controlId="itemName">
              <Form.Label>Item Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter item name"
                name="name"
                value={item.name}
                onChange={createItem}
              />
            </Form.Group>
            <Form.Group controlId="itemDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter item description"
                name="description"
                value={item.description}
                onChange={createItem}
              />
            </Form.Group>
            <Form.Group controlId="itemPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter price"
                name="price"
                value={item.price}
                onChange={createItem}
              />
            </Form.Group>
            <Form.Group controlId="menuSelect" className="mt-3">
              <Form.Label>Menu</Form.Label>
              <Form.Select
                name="menuId"
                value={item.menuId}
                onChange={createItem}
              >
                <option value="">Select a Menu</option>
                {menus.map((menu) => (
                  <option key={menu._id} value={menu._id}>
                    {menu.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Add Item
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default CreateItem;
