import { Col, Container, Row } from "react-bootstrap";
import Profile from "./Profile";
import Analisi from "./Analisi";
import Aside from "./Aside";
import Attività from "./Attività";
import Info from "./Info";
import Experiences from "./Experience";
import ProfileFooter from "./ProfileFooter";
import { useParams } from "react-router";

const OtherProfile = () => {
  const { userId } = useParams();

  return (
    <>
      <Container>
        <Row>
          <Col xs={10} md={8}>
            <Profile userId={userId} />
            <Analisi />
            <Info />
            <Attività />
            <Experiences userId={userId} />
          </Col>
          <Col className="d-sm-none d-lg-inline-block">
            <Aside />
          </Col>
        </Row>
      </Container>
      <ProfileFooter />
    </>
  );
};

export default OtherProfile;
