import { Col, Container, Row } from "react-bootstrap";

const JobsSideDetails = (props) => {
  const jobs = props.jobs;
  const id = props.id;

  const singleJob = jobs.find((job) => job._id === id);

  const testoSenzaBreakLines = singleJob.description;

  return (
    <Container>
      <Row>
        <Col>
          <Row>
            <Col>
              <Row>
                <Col xs={10}>
                  <h4 className="mt-3 mb-0">{singleJob.title}</h4>
                </Col>

                <Col></Col>
              </Row>
              <div className="d-flex">
                <a className="Link-default text-secondary mt-0 me-1 "> {singleJob.company_name} &bull; </a>
                <p className="text-secondary ">{singleJob.candidate_required_location}</p>
              </div>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col className="d-flex align-items-center">
              <i class="bi bi-briefcase-fill me-2 fs-4 text-secondary "></i>
              <p className="bg-light-green me-1 px-2 py-0 text-secondary mb-0">In sede</p>
              <p className="me-1 mb-0">&bull;</p>
              <p className="bg-light-green px-2 py-0 text-secondary mb-0">{singleJob.job_type}</p>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col className="d-flex align-items-center  ">
              <i class="bi bi-building me-2 fs-4 text-secondary"></i>
              <p className="mb-0">500 dipendenti</p>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex align-items-center ">
              <i class="bi bi-radar fs-4 me-2 text-success "></i>
              <p className="subText mb-0">Selezione attiva </p>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex align-items-center ">
              <i class="bi bi-check2-circle fs-4 me-2 "></i>
              <p className="subText mb-0 me-2">Candidature esaminato entro 3 giorni </p>
              <a href="#" className="subText text-secondary">
                Per saperne di più
              </a>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col className="d-flex align-items-center  ">
              <button className="btn btn-primary rounded-pill fw-bold me-2  ">
                <i class="bi bi-linkedin me-2"></i>Candidatura semplice
              </button>
              <button className="outlineButtons rounded-pill fw-bold px-3  ">Salva</button>
            </Col>
          </Row>
          <Row className="mt-5">
            <Row>
              <h5>Informazioni sull’offerta di lavoro</h5>
            </Row>
            <Col className="d-flex align-items-center  ">
              <Row dangerouslySetInnerHTML={{ __html: testoSenzaBreakLines }} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default JobsSideDetails;
