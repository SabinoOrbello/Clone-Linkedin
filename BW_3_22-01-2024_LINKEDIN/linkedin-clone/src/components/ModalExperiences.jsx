import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Pencil } from "react-bootstrap-icons";
import { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";

const ModalExperiences = (props) => {
  const [formValues, setFormValues] = useState({
    company: props.company || "",
    area: props.area || "",
    role: props.role || "",
    description: props.description || "",
    _id: props._id || "",
    user: props.user,
  });

  const handleInputChange = (fieldName, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));
  };

  const changeExperiencePut = async () => {
    console.log("ciao");
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${formValues.user}/experiences/${formValues._id}`,
        {
          method: "PUT",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxYzlhYzBkOGEyMDAwMThhNDhhM2MiLCJpYXQiOjE3MDU5MTA4OTIsImV4cCI6MTcwNzEyMDQ5Mn0.IZoYbIHodDlNFoeqZShFFPImBDRUWCouOhcleq0eqGE",
            // "Content-Type": "application/json",
          },
          body: JSON.stringify(formValues),
        }
      );

      if (response.ok) {
        await response.json();

        console.log("Change Experience Fetch chiamata" + JSON.stringify(formValues));
      } else {
        throw new Error("Fetch PUT EXPERIENCES Fallita");
      }
    } catch (error) {
      console.error("Errore durante la richiesta PUT:", error);
    }
  };

  const changeExperienceDelete = async () => {
    console.log("ciao");
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${formValues.user}/experiences/${formValues._id}`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxYzlhYzBkOGEyMDAwMThhNDhhM2MiLCJpYXQiOjE3MDU5MTA4OTIsImV4cCI6MTcwNzEyMDQ5Mn0.IZoYbIHodDlNFoeqZShFFPImBDRUWCouOhcleq0eqGE",
            // "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        console.log(response + "sono qui DELETE");
      } else {
        throw new Error("Fetch DELETE EXPERIENCES Fallita");
      }
    } catch (error) {
      console.error("Errore durante la richiesta DELETE:", error);
    }
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const currentYear = new Date().getFullYear();

  return (
    <div className="modal show" style={{ display: "block", position: "initial" }}>
      <button className=" d-flex justify-content-center align-items-center p-3 border-0 cursor outlineButtonsProfileGrey rounded-circle fs-4">
        <Pencil className="" onClick={handleShow}></Pencil>
      </button>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="text-dark">Modifica Esperienza</Modal.Title>
        </Modal.Header>
        <Modal.Body className="pt-1">
          <p className="fs-6 mt-0 ">*Indica che è obbligatorio</p>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              changeExperiencePut();
            }}
          >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="colorGray">Qualifica*</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                className="border border-dark"
                value={formValues.role}
                onChange={(e) => handleInputChange("role", e.target.value)}
                autoFocus
                required
              />
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
              <Form.Control
                type="text"
                placeholder=""
                className="border border-dark "
                value={formValues.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="colorGray">Località</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                className="border border-dark"
                value={formValues.area}
                onChange={(e) => handleInputChange("area", e.target.value)}
              />
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
                <Form.Select className="border border-dark">
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
                <Form.Select className="border border-dark">
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
                <Form.Select className="border border-dark">
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
                <Form.Select className="border border-dark">
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
              <Form.Control
                as="textarea"
                rows={3}
                value={formValues.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
              />
            </Form.Group>
            <Modal.Footer>
              <Button
                onClick={() => handleClose(changeExperienceDelete)}
                className="rounded-pill px-3 "
                variant="danger"
              >
                Elimina
              </Button>
              <Button
                style={{ backgroundColor: "#0a66c2" }}
                onClick={() => handleClose(changeExperiencePut)}
                className="rounded-pill px-3"
                type="submit"
              >
                Salva
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalExperiences;
