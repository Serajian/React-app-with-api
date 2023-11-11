// packages
import { useEffect, useState } from "react";
import axios from "axios";
import { Accordion, Alert, Col, Container, Form, Row } from "react-bootstrap";
import { FaSort, FaFilter } from "react-icons/fa";
import { MdCategory } from "react-icons/md";

// components
import MyFooter from "../../components/footer/Footer";
import CourseItem from "../../components/course/CourseItem";
import MyNavbar from "../../components/navbar/MyNavbar";

// style
import "./Courses.css";

function Courses() {
  // states
  const [courses, setCourses] = useState([]);
  const [sortType, setSortType] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [category, setCategory] = useState("");
  const [courseState, setCourseState] = useState("");

  // useEffect for sort
  useEffect(() => {
    switch (sortType) {
      case "earliest":
        getCoursesByOrder("desc", "id");
        break;
      case "latest":
        getCoursesByOrder("asc", "id");
        break;
      case "expensivest":
        getCoursesByOrder("desc", "mainPrice");
        break;
      case "cheapest":
        getCoursesByOrder("asc", "mainPrice");
        break;
      default:
        getCoursesByOrder("desc", "id");
    }
  }, [sortType]);

  //  useEffect for category
  useEffect(() => {
    if (category === "frontend") {
      getCoursesByCategory("فرانت اند");
    } else if (category === "backend") {
      getCoursesByCategory("بک اند");
    }
  }, [category]);

  // useEffect for courseState
  useEffect(() => {
    if (courseState === "completed") {
      getCourseByState("completed");
    } else if (courseState === "presell") {
      getCourseByState("presell");
    } else if (courseState === "recording") {
      getCourseByState("recording");
    }
  }, [courseState]);

  const getCoursesByOrder = (order, column) => {
    axios
      .get(
        `http://localhost/react/api/courses/?order=${order}&column=${column}`
      )
      .then((response) => setCourses(response.data.data));
  };
  const getCoursesByCategory = (category) => {
    axios
      .get(`http://localhost/react/api/courses/?category=${category}`)
      .then((response) => setCourses(response.data.data));
  };
  const getCourseByState = (State) => {
    axios
      .get(`http://localhost/react/api/courses/?state=${State}`)
      .then((response) => setCourses(response.data.data));
  };
  // handlers
  const sortHandler = (e) => {
    setSortType(e.target.id);
  };

  const searchInputHandler = (e) => {
    setSearchKey(e.target.value);
  };

  const searchBtnHandler = () => {
    axios
      .get(
        `http://localhost/react/api/courses/?search=${searchKey}&column=title`
      )
      .then((response) => setCourses(response.data.data));
  };

  const categoryHandler = (e) => {
    setCategory(e.target.value);
  };

  const courseStateHandler = (e) => {
    setCourseState(e.target.value);
  };

  return (
    <>
      <MyNavbar />
      <Container>
        <div className="searchSection">
          <h1>لیست دوره ها</h1>
          <div className="searchBoxContainer">
            <input
              type="text"
              className="searchInput"
              placeholder="نام دوره مورد نظر"
              onChange={searchInputHandler}
            />
            <button className="searchButton" onClick={searchBtnHandler}>
              جستجو
            </button>
          </div>
        </div>
        <Row>
          <Col className="col-12 col-lg-3">
            <Accordion alwaysOpen className="py-3">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <FaSort size={"20px"} />
                  <b>مرتب سازی</b>
                </Accordion.Header>
                <Accordion.Body>
                  <Form>
                    <Form.Check
                      type="radio"
                      id="earliest"
                      name="sort"
                      label="جدیدترین"
                      onChange={sortHandler}
                    />
                    <Form.Check
                      type="radio"
                      id="latest"
                      name="sort"
                      label="قدیمی ترین"
                      onChange={sortHandler}
                    />
                    <Form.Check
                      type="radio"
                      id="expensivest"
                      name="sort"
                      label="گران ترین"
                      onChange={sortHandler}
                    />
                    <Form.Check
                      type="radio"
                      id="cheapest"
                      name="sort"
                      label="ارزان ترین"
                      onChange={sortHandler}
                    />
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <div className="filterWrapper">
              <div className="filterIcon">
                <MdCategory />
                <b>دسته بندی</b>
              </div>
              <Form>
                <Form.Check
                  type="checkbox"
                  value={"frontend"}
                  label="فرانت اند"
                  checked={category === "frontend" ? true : false}
                  onChange={categoryHandler}
                />
                <Form.Check
                  type="checkbox"
                  value={"backend"}
                  label="بک اند"
                  checked={category === "backend" ? true : false}
                  onChange={categoryHandler}
                />
              </Form>
            </div>
            <div className="filterWrapper">
              <div className="filterIcon">
                <FaFilter />
                <b>وضعیت دوره </b>
              </div>
              <Form>
                <Form.Check
                  type="switch"
                  label="تکمیل شده"
                  value={"completed"}
                  checked={courseState === "completed" ? true : false}
                  onChange={courseStateHandler}
                />
                <Form.Check
                  type="switch"
                  label="پیش فروش "
                  value={"presell"}
                  checked={courseState === "presell" ? true : false}
                  onChange={courseStateHandler}
                />
                <Form.Check
                  type="switch"
                  label="در حال ضبط"
                  value={"recording"}
                  checked={courseState === "recording" ? true : false}
                  onChange={courseStateHandler}
                />
              </Form>
            </div>
          </Col>
          <Col className="col-12 col-lg-9">
            <Row className="row-cols-1 row-cols-md-2 row-cols-xl-3 gy-4 py-3">
              {courses.map((course) => (
                <Col key={course.id}>
                  <CourseItem {...course} />
                </Col>
              ))}
            </Row>
            {courses.length === 0 && (
              <Alert variant={"warning"} className="py-3 gy-4 mt-5">
                چنین نویسنده ای یافت نشد!
              </Alert>
            )}
          </Col>
        </Row>
      </Container>
      <MyFooter />
    </>
  );
}

export default Courses;
