import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ModalProfile from "./ModalProfile";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileFetch, experiencesFetch, updateProfile } from "../redux/action/profile";
import Carosello from "./Carosello";

const Profile = (props) => {
  const profile = useSelector((state) => state.profile);
  console.log(profile);
  const id = "6551e7bbc55e7e0018f83bfb";
  const dispatch = useDispatch();
  const [loadingProfile, setLoadingProfile] = useState(true);

  // -----------MAIL

  const mailTo = `mailto:${profile.email}`;

  // --------- Just Update profile

  const [localProfile, setLocalProfile] = useState({
    name: "",
    surname: "",
    email: "",
    username: "",
    bio: "",
    title: "",
    area: "",
    image: "", // SERVER GENERATED, modificabile
    createdAt: "", // SERVER GENERATED
    updatedAt: "", // SERVER GENERATED
    __v: "", // SERVER GENERATED
    _id: "", // SERVER GENERATED
  });

  const handleUpdateProfile = () => {
    dispatch(updateProfile(localProfile));
  };

  // ---------------------------------

  // -------IMAGE

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    const fReader = new FileReader();
    fReader.readAsDataURL(file);

    fReader.onload = () => {
      const filePath = fReader.result;
      setLocalProfile({ ...localProfile, image: filePath });
    };

    console.log("Cambio immagine", localProfile);
  };

  // -------------------------

  useEffect(() => {
    if (props.userId == null) {
      dispatch(profileFetch(id)).then(() => {
        setLoadingProfile(false);
      });
      dispatch(experiencesFetch(id));
    } else {
      dispatch(profileFetch(props.userId)).then(() => {
        setLoadingProfile(false);
      });
      dispatch(experiencesFetch(props.userId));
    }
  }, [dispatch, id, props.userId]);

  useEffect(() => {
    if (!loadingProfile) {
      setLocalProfile(profile);
      console.log("Questo è profile:", profile);
      console.log("Questo è localProfile:", localProfile);
    }
  }, [profile, loadingProfile]);

  return (
    <>
      <Row className="profileContainer">
        <Col>
          <Row className="">
            <div className="position-relative p-0 cursor">
              <input type="file" id="bgImage" hidden />
              <img
                className="bgProfile"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu0lWaaWP-WmtxAAWkwJGAZFMyER0nyOUdsjF2d0aCap0mS1rO"
                alt="profileBg"
              />
              {props.userId != null ? (
                <>
                  <img className="photoProfileOthers cursor" src={localProfile.image} alt="profilePicture" />
                </>
              ) : (
                <>
                  <label htmlFor="bgImage" className=" cursor ">
                    <i className="bi bi-camera-fill photoBgIcon outlineButtonsProfile "></i>
                  </label>
                  <div className="">
                    <input type="file" id="profileImage" hidden onChange={handleImageChange} />
                    <label htmlFor="profileImage">
                      <img className="photoProfile cursor" src={localProfile.image} alt="profilePicture" />
                    </label>
                  </div>
                </>
              )}
            </div>
          </Row>

          <Row className="">
            <Col>
              {props.userId != null ? (
                <>
                  <Row className=" justify-content-end  mb-5 "></Row>
                </>
              ) : (
                <Row className=" justify-content-end  ">
                  <Col xs={1}>
                    <ModalProfile
                      localProfile={localProfile}
                      handleUpdateProfile={handleUpdateProfile}
                      setLocalProfile={setLocalProfile}
                    />
                  </Col>
                </Row>
              )}
            </Col>
          </Row>
          <Container className="px-3">
            <Row>
              <Col xs={12} md={8}>
                <Row className="mt-4 text-start">
                  <Col className="d-md-flex ">
                    <h2 className="me-2">{`${profile.name} ${profile.surname}`}</h2>
                    {props.userId != null ? (
                      <></>
                    ) : (
                      <button className="d-flex align-items-center outlineButtons px-2  rounded-5  fw-bold fw-bolder py-0  ">
                        <i class="bi bi-shield-check me-1"></i>
                        <p className="Verify mb-0 p-0  ">Inizia la verifica</p>
                      </button>
                    )}
                  </Col>
                </Row>
                <Row className=" text-start">
                  <Col xs={10}>
                    <p className="mb-2">{profile.title}</p>
                  </Col>
                </Row>

                <Row className="d-sm-inline-block d-md-none text-start text-secondary mt-0 ">
                  {/* <Col>
                    <p className="mb-2">Job &bull; Study</p>
                  </Col> */}
                </Row>
                <Row className=" text-start text-secondary mt-0 ">
                  <Col className="d-flex">
                    <p className="mb-2">{profile.area} &bull;</p>{" "}
                    <a href={mailTo} className="ms-2 link-primary links   ">
                      {profile.email}
                    </a>
                  </Col>
                </Row>
                <Row className=" text-start text-secondary mt-0 ">
                  <Col>
                    <Link className="link-primary links   ">50 contatti</Link>
                  </Col>
                </Row>
              </Col>
            </Row>
            {props.userId != null ? (
              <></>
            ) : (
              <Row className="text-secondary mt-2 justify-content-start  ">
                <Col xs={4} md={3} className="p-0 text-start me-1 ">
                  <button style={{ backgroundColor: "#2465BC" }} className="btn text-light rounded-4 fw-bold w-100">
                    Disponibile per
                  </button>
                </Col>
                <Col xs={5} md={4} className="p-0  text-center me-1">
                  <button className="outlineButtons rounded-4 fw-bold w-100 m-auto  ">
                    Aggiungi sezione del profilo
                  </button>
                </Col>
                <Col xs={2} md={1} className=" p-0 text-start">
                  <button className="d-inline-block d-md-none btn btn-outline-secondary  rounded-5 fw-bold ">
                    <i class="bi bi-three-dots"></i>
                  </button>
                  <button className=" d-none d-md-inline-block btn btn-outline-secondary  rounded-4 fw-bold w-100">
                    Altro
                  </button>
                </Col>
              </Row>
            )}
            <Row>
              <Carosello />
            </Row>
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default Profile;
