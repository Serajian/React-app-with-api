// packeages
import axios from "axios";
import { Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// components
import MyNavbar from "../../components/navbar/MyNavbar";
import ArticleItem from "../../components/article/ArticleItem";
import MyFooter from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";

// style
import "./Home.css";
import "swiper/css";
import SwiperButtons from "../../components/swiperButtons/SwiperButtons";
import CourseItem from "../../components/course/CourseItem";

function Home() {
  const [articles, setArticles] = useState([]);
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost/react/api/articles/?page=1&limit=6")
      .then((response) => setArticles(response.data.data));
    axios
      .get("http://localhost/react/api/courses/?page=1&limit=6")
      .then((response) => setCourses(response.data.data));
  }, []);

  return (
    <>
      <MyNavbar />
      <Hero />
      <Container>
        <Row className="py-3">
          <Swiper
            className="customeSwiperStyle"
            spaceBetween={30}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              1200: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              },
              500: {
                slidesPerView: 1,
              },
            }}
          >
            <div className="swiperTopSection">
              <h2 className="sectionTitle">آخرین دوره ها</h2>
              <SwiperButtons />
            </div>
            {courses.map((course) => (
              <SwiperSlide>
                <CourseItem key={course.id} {...course} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Row>
        <Row className="py-3">
          <Swiper
            className="customeSwiperStyle"
            spaceBetween={30}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              1200: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              },
              500: {
                slidesPerView: 1,
              },
            }}
          >
            <div className="swiperTopSection">
              <h2 className="sectionTitle">آخرین مقالات</h2>
              <SwiperButtons />
            </div>
            {articles.map((article) => (
              <SwiperSlide>
                <ArticleItem key={article.id} {...article} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Row>
      </Container>
      <MyFooter />
    </>
  );
}

export default Home;
