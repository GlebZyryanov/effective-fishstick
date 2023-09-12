import React from "react";
import { Button, Card, Container, Form} from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
  const location = useLocation(); //хук ползволяет получить маршрут в строке запроса
  const isLogin = location.pathname === LOGIN_ROUTE;
  console.log(location);
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control className="mt-3" placeholder="Введите ваш email..." />
          <Form.Control className="mt-3" placeholder="Введите ваш пароль..." />
          <Button className="mt-3 align-self-center " variant="outline-success">
            {isLogin ? "Войти" : "Регистрация"}
          </Button>
          {isLogin ? (
            <div className="align-self-center ">
              Нет аккаунта?
              <NavLink
                to={REGISTRATION_ROUTE}
                style={{ textDecoration: "none", marginLeft: 3 }}
              >
                Регистрация!
              </NavLink>
            </div>
          ) : (
            <div className="align-self-center ">
              Есть аккаунт?
              <NavLink
                to={LOGIN_ROUTE}
                style={{ textDecoration: "none", marginLeft: 3 }}
              >
                Войти!
              </NavLink>
            </div>
          )}
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
