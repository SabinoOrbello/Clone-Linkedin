import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const JobElement = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <Row className="mt-2">
        <Col xs={12}>
          <Container className=" border-bottom border-bottom cursor p-0 pb-2">
            <Row>
              <Col xs={10}>
                <Row onClick={() => navigate("/jobsdetails/" + props.job._id)}>
                  <Col xs={3} className="me-2">
                    <img
                      className="sizeIconEx"
                      src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
                      alt="icona_lavoro"
                    />
                  </Col>
                  <Col xs={8}>
                    <Link className="ps-0 links mb-0">
                      <h6 className="mb-0 mt-1">{props.job.title}</h6>
                    </Link>
                    <p className="mb-0 mt-0">{props.job.company_name}</p>
                    <p className="colorGray mb-1">{props.job.candidate_required_location}</p>
                    <div className="d-flex align-items-center">
                      <i class="bi bi-radar fs-4 me-2 text-success "></i>
                      <p className="subText mb-0">Selezione attiva </p>
                    </div>
                  </Col>
                </Row>
              </Col>

              <Col className="d-flex justify-content-end">
                <i class="bi bi-x-lg fs-5 fontBold cursor"></i>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default JobElement;
