import { Col, Container, Row, Spinner } from "react-bootstrap";
import Profile from "./Profile";
import Analisi from "./Analisi";
import Aside from "./Aside";
import Attività from "./Attività";
import Info from "./Info";
import Experiences from "./Experience";
import ProfileFooter from "./ProfileFooter";
import { useSelector } from "react-redux";

const Main = () => {
  const isLoading = useSelector((state) => state.isLoading);

  return (
    <>
      <>
        <Container>
          <Row>
            <Col xs={12} md={8}>
              <Profile />
              <Analisi />
              <Info />
              <Attività />
              <Experiences />
            </Col>
            <Col md={3} className="d-sm-none d-lg-inline-block">
              <Aside />
            </Col>
          </Row>
        </Container>
        <ProfileFooter />
      </>
    </>
  );
};

export default Main;
