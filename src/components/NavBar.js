import React from "react";
import { useContext } from "react";
import { Context } from "../index";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { SHOP_ROUTE } from "../utils/consts";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink
          to={SHOP_ROUTE}
          style={{
            textDecoration: "none",
            color: "white",
            fontSize: 20,
          }}
        >
          MusicShop
        </NavLink>
        {user.isAuth ? (
          <Nav className="ms-auto" style={{ color: "white" }}>
            <Button variant="outline-light">Админ Панель</Button>
            <Button variant="outline-light" className="ms-2">
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className="ms-auto" style={{ color: "white" }}>
            <Button
              variant="outline-light"
              onClick={() => user.setIsAuth(true)}
            >
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
