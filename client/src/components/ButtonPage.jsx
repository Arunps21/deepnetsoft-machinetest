import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import buttonImg from "/buttonimg.png";
import "../index.css";
import Button from "react-bootstrap/Button";
import context from "./ComponentProvider";

function ButtonPage() {
  const [menus, setMenus] = useState([]);
  const { setComponent } = useContext(context);

  const getMenu = async () => {
    try {
      const { data } = await axios.get("http://localhost:9000/menu/getMenu");
      setMenus(data);
    } catch (error) {
      console.error("Error fetching menus:", error.message);
    }
  };

  useEffect(() => {
    getMenu();
  }, []);

  const handleButtonClick = (id) => {
    setComponent(id);
  };

  return (
    <div className="buttonOpacity">
      <img className="buttonImg" src={buttonImg} alt="Button Background" />
      <div className="buttons">
        {menus.map((menu) => (
          <Button
            key={menu._id}
            variant="dark"
            onClick={() => handleButtonClick(menu._id)}
          >
            {menu.name}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default ButtonPage;
