import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

//пропсы show отвечает за то виден компонент или нет, а onHide это функция которая скрывает модальное окно
const CreateBase = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новую базу
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form >
          <Form.Control className="mt-2" placeholder="Введите название базы" />
          <Form.Control className="mt-2" placeholder="Введите мощность двигателя" />
          <Form.Control className="mt-2" placeholder="Введите грузоподъемность" />
          <Form.Control className="mt-2" placeholder="Введите скорость" />
          <Form.Control className="mt-2" placeholder="Введите расход двигателя" />
          <Form.Control className="mt-2" placeholder="Введите массу" />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={onHide}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateBase;
