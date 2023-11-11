// packages
import { Col, Container, Row } from "react-bootstrap";
import { FaUserAlt, FaCode } from "react-icons/fa";
import { MdArticle } from "react-icons/md";
import { ImBooks } from "react-icons/im";
import { BsFillSkipStartFill } from "react-icons/bs";
import AOS from "aos";
import { useEffect } from "react";

// components
import HeroBox from "../heroBox/HeroBox";

// assets
import heroImage from "../../assets/images/hero-img.svg";

// style
import "./Hero.css";
import "aos/dist/aos.css";

function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="heroContainer">
        <Container>
          <Row className="align-items-center">
            <Col className="col-12 col-md-6" data-aos="fade-up-left">
              <img
                src={heroImage}
                alt="heroImage"
                className="heroImg img-fluid"
              />
            </Col>
            <Col className="col-12 col-md-6" data-aos="fade-up-right">
              <h2 className="heroTitle">آمارها باعث افتخار ما هستند</h2>
              <Row className="justify-content-center row-cols-1 row-cols-xl-2 gy-4">
                <Col>
                  <HeroBox title={"تعداد دانشجو"} count={"3600"}>
                    <FaUserAlt size={"40px"} />
                  </HeroBox>
                </Col>
                <Col>
                  <HeroBox title={"تعداد مقاله"} count={"960"}>
                    <MdArticle size={"40px"} />
                  </HeroBox>
                </Col>
                <Col>
                  <HeroBox title={"تعداد دوره"} count={"19"}>
                    <ImBooks size={"40px"} />
                  </HeroBox>
                </Col>
                <Col>
                  <HeroBox title={"پروژه موفق"} count={"15"}>
                    <FaCode size={"40px"} />
                  </HeroBox>
                </Col>
              </Row>
              <p className="startLearning">
                <b>شروع آموزش</b>
                <BsFillSkipStartFill size={"40px"} />
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#eee"
          d="M0 64l34.3 21.3C68.6 107 137 149 206 176c68.3 27 137 37 205 26.7 69-10.7 138-42.7 206-48 68.7-5.7 137 16.3 206 42.6C891.4 224 960 256 1029 240c68.1-16 137-80 205-117.3 68.9-37.7 137-47.7 172-53.4l34-5.3V0H0z"
        ></path>
      </svg>
    </>
  );
}

export default Hero;
