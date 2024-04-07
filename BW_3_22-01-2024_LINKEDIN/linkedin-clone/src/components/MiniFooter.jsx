import { Col, Row } from "react-bootstrap";

const MiniFooter = () => {
  return (
    <Row>
      <Col>
        <div className="mb-2 py-2">
          <div className="d-flex mx-4 justify-content-center">
            <a href="#" className="me-2 text-decoration-none  text-secondary font-home-destra">
              Informazioni
            </a>
            <a href="#" className="me-2 text-decoration-none  text-secondary font-home-destra">
              Accessibilità
            </a>
          </div>
          <div className="d-flex mx-4 justify-content-center my-2">
            <a href="#" className="me-2 text-decoration-none  text-secondary font-home-destra">
              Centro Assistenza
            </a>
            <a href="#" className="me-2  text-decoration-none  text-secondary font-home-destra">
              Privacy e condizioni
            </a>
          </div>
          <div className="d-flex mx-4 justify-content-center">
            <a href="#" className="me-2 text-decoration-none  text-secondary font-home-destra">
              Opzioni per gli annunci pubblicitari
            </a>
          </div>
          <div className="d-flex mx-4 my-2 justify-content-center">
            <a href="#" className="me-2 text-decoration-none  text-secondary font-home-destra">
              Pubblicità
            </a>
            <a href="#" className="me-2 text-decoration-none  text-secondary font-home-destra">
              Servizi alle aziende
            </a>
          </div>
          <div className="d-flex mx-4 justify-content-center">
            <a href="#" className="me-2 text-decoration-none  text-secondary font-home-destra">
              Scarica l'app LinkedIn
            </a>
            <a href="#" className="me-2 text-decoration-none  text-secondary font-home-destra">
              Altro
            </a>
          </div>
          <div className="d-flex mx-4 justify-content-center mt-3">
            <img
              src="https://static.licdn.com/aero-v1/sc/h/aahlc8ivbnmk0t3eyz8as5gvr"
              x="0"
              y="0"
              width="56"
              height="14"
            />
            <p className="font-home-destra ms-1">LinkedIn Corporation © 2024</p>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default MiniFooter;
