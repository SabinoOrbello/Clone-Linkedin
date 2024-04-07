import { Col, Row, Container } from "react-bootstrap";
import sendPost from "../redux/action/sendPost";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { CaretDownFill, ownFill, Clock } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";

const AddPost = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [localPost, setLocalPost] = useState({
    text: "",
  });

  const handlePost = (event) => {
    event.preventDefault();
    sendPost(localPost);
    handleClose();
  };

  return (
    <>
      <Container className="bg-white rounded-3 pt-3 mb-3 ">
        <Container>
          <Row>
            <Col xs={1} className="me-2 ps">
              <img
                src="https://media.gqitalia.it/photos/642e9d8bfc2b9ece8567af56/1:1/w_1079,h_1079,c_limit/therock.jpg"
                alt="profileImage"
                className=" rounded rounded-circle postImage"
              />
            </Col>
            <Col>
              <button
                style={{ borderColor: "#666666" }}
                className="btn btn-light text-start  text-opacity-50 fw-medium  rounded-pill w-100 h-100 opacity-75"
                onClick={handleShow}
              >
                Avvia un post
              </button>
              {/* -------------------------MODAL---------------------- */}
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className="border-0">
                  <Modal.Title>
                    <img
                      src="https://media.gqitalia.it/photos/642e9d8bfc2b9ece8567af56/1:1/w_1079,h_1079,c_limit/therock.jpg"
                      alt="profileImage"
                      className=" rounded rounded-circle postImage me-2"
                    />
                    Oleksandr Larionov
                    <CaretDownFill className="ms-2 text-secondary fs-5" />
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Control
                        value={localPost.text}
                        as="textarea"
                        rows={7}
                        placeholder="Di cosa vorresti parlare?"
                        className="border-0 "
                        onChange={(event) => setLocalPost({ text: event.target.value })}
                      />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer className="p-1">
                  <Clock className="me-2 fs-5" />
                  <Button variant="outline-secondary" className="rounded-pill py-1 px-3" onClick={handlePost}>
                    Pubblica
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* ---------------------------------------------------------- */}
            </Col>
          </Row>
        </Container>
        <Container className="my-2 ">
          <Row>
            <Col className="col-5">
              {" "}
              <button className="btn btn-light text-start  text-opacity-50 fw-medium  rounded-1  opacity-75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  className="me-2"
                  fill="#6586e4"
                  viewBox="0 0 512 512"
                >
                  <path d="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
                </svg>
                <span>Contenuti multimediali</span>
              </button>
            </Col>
            <Col>
              {" "}
              <button className="btn btn-light text-start tect-center text-opacity-50 fw-medium  rounded-1 w-10 h-10 opacity-75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  className="me-2"
                  fill="#b0822e"
                  viewBox="0 0 448 512"
                >
                  <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
                </svg>
                Evento
              </button>
            </Col>
            <Col className="col-4">
              {" "}
              <button className="btn btn-light text-start  text-opacity-50 fw-medium  rounded-1  w-10 h-10 opacity-75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  className="me-2"
                  fill="#c46d4f"
                  viewBox="0 0 512 512"
                >
                  {" "}
                  <path d="M96 96c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H80c-44.2 0-80-35.8-80-80V128c0-17.7 14.3-32 32-32s32 14.3 32 32V400c0 8.8 7.2 16 16 16s16-7.2 16-16V96zm64 24v80c0 13.3 10.7 24 24 24H296c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24H184c-13.3 0-24 10.7-24 24zm208-8c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zM160 304c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z" />
                </svg>
                Scrivi un articolo
              </button>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default AddPost;
