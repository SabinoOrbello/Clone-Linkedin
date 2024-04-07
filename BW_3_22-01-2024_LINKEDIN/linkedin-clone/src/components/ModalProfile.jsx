import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Pencil, InfoSquareFill, Plus } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../redux/action/profile";

const ModalProfile = (props) => {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className=" d-flex justify-content-center align-items-center p-3 border-0 cursor outlineButtonsProfileGrey rounded-circle fs-4">
        <Pencil className="" onClick={handleShow}></Pencil>
      </button>

      <Modal show={show} onHide={handleClose} className="text-secondary" centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-dark">Modifica presentazione</Modal.Title>
        </Modal.Header>
        <Modal.Body className="pt-1" style={{ overflowY: "auto", maxHeight: "calc(100vh - 200px)" }}>
          <p className="fs-6 mt-0 ">*Indica che è obbligatorio</p>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="">Nome*</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                className="border border-dark"
                autoFocus
                required
                value={props.localProfile.name}
                onChange={(event) => props.setLocalProfile({ ...props.localProfile, name: event.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="">Cognome*</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                className="border border-dark"
                required
                value={props.localProfile.surname || profile.surname}
                onChange={(event) => props.setLocalProfile({ ...props.localProfile, surname: event.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
              <Form.Label className="">Nome aggiuntivo</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                className="border border-dark"
                value={props.localProfile.username || profile.username}
                onChange={(event) => props.setLocalProfile({ ...props.localProfile, username: event.target.value })}
              />
            </Form.Group>
            <p className="pt-2 mb-2 ">Pronuncia del nome</p>
            <p style={{ color: "#56687a" }}>
              <InfoSquareFill /> Può essere aggiunta solo usando la nostra app per dispositivi mobili
            </p>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="">Inserisci pronomi personalizzati</Form.Label>
              <Form.Control type="text" placeholder="" className="border border-dark" />
            </Form.Group>
            <p className="">Indica i pronomi di genere che vuoi che gli altri usino per riferirsi a te.</p>
            <p className="">
              Scopri di più sui{" "}
              <a href="" style={{ textDecoration: "none", fontWeight: "bold", color: "#0a66c2" }}>
                pronomi di genere.
              </a>
            </p>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="">Sommario*</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                className="border border-dark"
                required
                value={props.localProfile.bio || profile.bio}
                onChange={(event) => props.setLocalProfile({ ...props.localProfile, bio: event.target.value })}
              />
            </Form.Group>
            <h4 className="text-dark">Posizione attuale</h4>
            <Form.Group controlId="exampleForm.SelectCustom" className="mb-3">
              <Form.Label className="">Posizione lavorativa*</Form.Label>
              <Form.Select custom required className="border border-dark">
                <option>Elemento 1</option>
                <option>Elemento 2</option>
                <option>Elemento 3</option>
              </Form.Select>
            </Form.Group>
            <div className="mb-4" style={{ fontWeight: "bold" }}>
              <a href="" style={{ textDecoration: "none", color: "#0a66c2" }}>
                <Plus />
                Aggiungi una nuova posizione lavorativa
              </a>
            </div>
            <Form.Check type="checkbox" id="custom-checkbox" label="Mostra l'azienda attuale nella mia presentazione" />
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="">Settore*</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                className="border border-dark"
                required
                value={props.localProfile.title || profile.title}
                onChange={(event) => props.setLocalProfile({ ...props.localProfile, title: event.target.value })}
              />
            </Form.Group>
            <p className="">
              Scopri di più sulle{" "}
              <a href="" style={{ textDecoration: "none", fontWeight: "bold", color: "#0a66c2" }}>
                opzioni relative al settore
              </a>
            </p>
          </Form>
          <h4 className="text-dark">Formazione</h4>
          <Form.Group controlId="exampleForm.SelectCustom" className="mb-3">
            <Form.Label className="">Formazione*</Form.Label>
            <Form.Select className="border border-dark" custom>
              <option>Elemento 1</option>
              <option>Elemento 2</option>
              <option>Elemento 3</option>
            </Form.Select>
          </Form.Group>
          <div className="mb-4" style={{ fontWeight: "bold" }}>
            <a href="" style={{ textDecoration: "none", color: "#0a66c2" }}>
              <Plus />
              Aggiungi un nuovo grado di formazione
            </a>
          </div>
          <Form.Check type="checkbox" id="custom-checkbox" label="Mostra la formazione nella mia presentazione" />
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="">Settore</Form.Label>
            <Form.Control type="text" placeholder="" className="border border-dark" />
          </Form.Group>
          <h4 className="text-dark">Località</h4>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="">Paese/Area geografica*</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              className="border border-dark"
              required
              value={props.localProfile.area || profile.area}
              onChange={(event) => props.setLocalProfile({ ...props.localProfile, area: event.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="">CAP</Form.Label>
            <Form.Control type="text" placeholder="" className="border border-dark" />
          </Form.Group>
          <Form.Group controlId="exampleForm.SelectCustom" className="mb-4">
            <Form.Label className="">Città*</Form.Label>
            <Form.Select className="border border-dark" custom required>
              <option>Elemento 1</option>
              <option>Elemento 2</option>
              <option>Elemento 3</option>
            </Form.Select>
          </Form.Group>
          <p className="fs-5 text-dark">Informazioni di contatto</p>
          <p className="">Aggiungi o modifica il tuo profilo URL, indirizzo email e altro</p>
          <div style={{ fontWeight: "bold" }}>
            <a href="" style={{ textDecoration: "none", color: "#0a66c2" }}>
              Modifica le informazioni di contatto
            </a>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{ backgroundColor: "#0a66c2" }}
            className="rounded-pill px-3"
            onClick={() => props.handleUpdateProfile()}
          >
            Salva
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalProfile;
