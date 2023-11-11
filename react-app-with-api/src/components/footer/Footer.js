import { Col, Container, Row } from "react-bootstrap";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { VscGithub } from "react-icons/vsc";

function MyFooter() {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#eee"
          d="M0 64l34.3 21.3C68.6 107 137 149 206 176c68.3 27 137 37 205 26.7 69-10.7 138-42.7 206-48 68.7-5.7 137 16.3 206 42.6C891.4 224 960 256 1029 240c68.1-16 137-80 205-117.3 68.9-37.7 137-47.7 172-53.4l34-5.3v256H0z"
        ></path>
      </svg>
      <footer>
        <Container
          fluid
          style={{
            backgroundColor: "#eee",
            marginTop: "50px; !import",
            paddingTop: "10px",
            paddingBottom: "30px",
            // position: "fixed",
            // bottom: "0",
          }}
        >
          <Row className="d-flex justify-conten-between align-items-center">
            <Col>
              <i>نمونه کار با React</i>
              <i> و Api</i>
            </Col>
            <Col style={{ textAlign: "center" }}>
              <Link to={`https://github.com/Serajian`}>
                <VscGithub size="50px" color="black" />
              </Link>
            </Col>
            <Col style={{ textAlign: "left" }}>
              <p>
                <b style={{ fontFamily: "Cascadia Code" }}>
                  serajian.mohsen@gmail.com
                </b>
                <MdEmail />
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
export default MyFooter;
