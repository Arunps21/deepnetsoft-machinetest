import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import context from "./ComponentProvider";
import axios from "axios";
import "../index.css";
import juice1 from "/itemjuice1.png";
import juice2 from "/itemjuice2.png";

function ItemPage() {
  const { component } = useContext(context);
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [menuName, setMenuName] = useState("");

  const getItems = async () => {
    try {
      const { data } = await axios.get(`http://localhost:9000/item/getItems`);
      setItems(data);
    } catch (error) {
      console.error("Error fetching items:", error.message);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  useEffect(() => {
    if (component) {
      const filtered = items.filter((item) => item.menu._id === component);
      setFilteredItems(filtered);

      if (filtered.length > 0) {
        setMenuName(filtered[0].menu.description);
      } else {
        setMenuName("");
      }
    } else {
      setFilteredItems(items);
      setMenuName("");
    }
  }, [component, items]);
  return (
    <div className="itemContainer">
      <img src={juice1} alt="" className="top-left-image" />
      <img src={juice2} alt="" className="bottom-right-image" />
      <div className="itemDiv">
        <Container className="border p-5" align="center">
          <Row>
            {menuName && (
              <h1 className="itemFont text-white fw-bold">{menuName}</h1>
            )}

            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <Col key={index} lg={6} sm={12} className="mb-3 mt-5">
                  <span className="text-white fs-5">{item.name}</span>
                  <span className="text-white">
                    .............................................
                  </span>
                  <span className="text-white fs-5">$</span>
                  <span className="text-white fs-5">{item.price}</span>
                  <div className="w-75">
                    <p className="text-secondary">{item.description}</p>
                  </div>{" "}
                </Col>
              ))
            ) : (
              <Col className="text-center" lg={12}>
                <span className="text-white">No items available.</span>
              </Col>
            )}
          </Row>
        </Container>
      </div>{" "}
    </div>
  );
}

export default ItemPage;
