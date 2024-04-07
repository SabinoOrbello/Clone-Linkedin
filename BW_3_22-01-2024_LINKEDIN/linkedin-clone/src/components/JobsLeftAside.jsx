import { BookmarkFill, ListUl, Clipboard2Check, PlayBtnFill, GearFill, PencilSquare } from "react-bootstrap-icons";
import { ListGroup, Button } from "react-bootstrap";

const JobsLeftAside = () => {
  return (
    <div className="d-flex flex-column">
      <ListGroup className="border rounded-3 rounded bg-white ps-3 pb-4 mb-3" style={{ color: "#404040" }}>
        <ListGroup.Item className="border-0">
          <BookmarkFill className="me-2" /> Le mie offerte di lavoro
        </ListGroup.Item>
        <ListGroup.Item className="border-0">
          <ListUl className="me-2" /> Preferenze
        </ListGroup.Item>
        <ListGroup.Item className="border-0">
          <Clipboard2Check className="me-2" /> Valutazioni delle competenze
        </ListGroup.Item>
        <ListGroup.Item className="border-0">
          <PlayBtnFill className="me-2" /> Indicazioni per chi cerca lavoro
        </ListGroup.Item>
        <ListGroup.Item className="border-0">
          <GearFill className="me-2" /> Impostazioni candidatura
        </ListGroup.Item>
      </ListGroup>
      <Button variant="outline-primary rounded-pill py-3">
        <PencilSquare className="fs-5 me-3" /> <span>Pubblica offerta gratuita</span>
      </Button>
    </div>
  );
};

export default JobsLeftAside;
