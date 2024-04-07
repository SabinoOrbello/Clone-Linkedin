import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { PlusLg } from "react-bootstrap-icons";
import { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";

const ModalExperiencesAdd = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const currentYear = new Date().getFullYear();

  return (
    <div className="modal show" style={{ display: "block", position: "initial" }}>
      <Button variant="white" onClick={handleShow}>
        <PlusLg className="plus " />
      </Button>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="text-dark">Aggiungi Esperienza</Modal.Title>
        </Modal.Header>
        <Modal.Body className="pt-1">
          <p className="fs-6 mt-0 ">*Indica che è obbligatorio</p>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="colorGray">Qualifica*</Form.Label>
              <Form.Control type="text" placeholder="" className="border border-dark" autoFocus required />
            </Form.Group>
            <Form.Label className="colorGray">Tipo di impiego*</Form.Label>
            <Form.Select aria-label="Default select example" className="border border-dark">
              <option>Seleziona</option>
              <option value="1">A tempo pieno</option>
              <option value="2">Part-time</option>
              <option value="1">Autonomo</option>
              <option value="2">Freelance</option>
              <option value="3">A contratto</option>
              <option value="1">Stage</option>
              <option value="2">Apprendistato</option>
              <option value="3">Stagionale</option>
            </Form.Select>
            <Form.Label className="pb-3">
              Scopri di più sui <a href="">tipi di impiego</a>
            </Form.Label>

            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
              <Form.Label className="colorGray">Nome azienda*</Form.Label>
              <Form.Control type="text" placeholder="" className="border border-dark" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="colorGray">Località</Form.Label>
              <Form.Control type="text" placeholder="" className="border border-dark" />
            </Form.Group>
            <Form.Label className="colorGray">Tipo di impiego*</Form.Label>
            <Form.Select aria-label="Default select example" className="border border-dark">
              <option>Tipo di località</option>
              <option value="1">In sede</option>
              <option value="2">Ibrida</option>
              <option value="1">Da remoto</option>
            </Form.Select>
            <Form.Label className="colorGray"> Scegli un tipo di località es. da remoto</Form.Label>
            <Form.Check type="checkbox" id="custom-checkbox" label="Attualmente ricopro questo ruolo" />

            <Row className="pt-4">
              <Col xs={12} md={6}>
                <Form.Label className="colorGray">Data di inizio*</Form.Label>
                <Form.Select className="border border-dark" custom required>
                  <option>Mese</option>
                  <option value="1">Gennaio</option>
                  <option value="2">Febbraio</option>
                  <option value="3">Marzo</option>
                  <option value="4">Aprile</option>
                  <option value="5">Maggio</option>
                  <option value="6">Giugno</option>
                  <option value="7">Luglio</option>
                  <option value="8">Agosto</option>
                  <option value="9">Settembre</option>
                  <option value="10">Ottobre</option>
                  <option value="11">Novembre</option>
                  <option value="12">Divembre</option>
                </Form.Select>
              </Col>
              <Col xs={12} md={6}>
                {" "}
                <Form.Label className="colorGray">Data di inizio*</Form.Label>
                <Form.Select className="border border-dark" custom required>
                  <option>Anno</option>
                  {[...Array(101)].map((_, index) => {
                    const year = currentYear - index;
                    return <option key={year} value={year.toString()}></option>;
                  })}
                </Form.Select>
              </Col>
            </Row>
            <Row className="pt-4">
              <Col xs={12} md={6}>
                <Form.Label className="colorGray">Data di fine*</Form.Label>
                <Form.Select className="border border-dark" custom required>
                  <option>Mese</option>
                  <option>Mese</option>
                  <option value="1">Gennaio</option>
                  <option value="2">Febbraio</option>
                  <option value="3">Marzo</option>
                  <option value="4">Aprile</option>
                  <option value="5">Maggio</option>
                  <option value="6">Giugno</option>
                  <option value="7">Luglio</option>
                  <option value="8">Agosto</option>
                  <option value="9">Settembre</option>
                  <option value="10">Ottobre</option>
                  <option value="11">Novembre</option>
                  <option value="12">Divembre</option>
                </Form.Select>
              </Col>
              <Col xs={12} md={6}>
                {" "}
                <Form.Label className="colorGray">Data di fine*</Form.Label>
                <Form.Select className="border border-dark" custom required>
                  <option>Anno</option>
                  {[...Array(101)].map((_, index) => {
                    const year = currentYear - index;
                    return (
                      <option key={year} value={year.toString()}>
                        {year}
                      </option>
                    );
                  })}
                </Form.Select>
              </Col>
            </Row>
            <Form.Label className="colorGray mt-3">Decrizione</Form.Label>
            <Form.Group className="border border-dark rounded-2" controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{ backgroundColor: "#0a66c2" }} onClick={handleClose} className="rounded-pill px-3">
            Aggiungi
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalExperiencesAdd;
