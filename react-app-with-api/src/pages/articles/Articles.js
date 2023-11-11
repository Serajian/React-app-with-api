// packages
import axios from "axios";
import { Accordion, Alert, Col, Container, Form, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { FaSort } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
// components
import MyNavbar from "../../components/navbar/MyNavbar";
import ArticleItem from "../../components/article/ArticleItem";
import MyFooter from "../../components/footer/Footer";

// style
import "./Articles.css";

function Articles() {
  // states
  const [articles, setArticles] = useState([]);
  const [sortType, setSortType] = useState("");
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    switch (sortType) {
      case "earliest":
        getArticlesByOrder("desc", "id");
        break;
      case "latest":
        getArticlesByOrder("asc", "id");
        break;
      case "longest":
        getArticlesByOrder("desc", "readingTime");
        break;
      case "shortest":
        getArticlesByOrder("asc", "readingTime");
        break;
      default:
        getArticlesByOrder("desc", "id");
    }
  }, [sortType]);

  const getArticlesByOrder = (order, column) => {
    axios
      .get(
        `http://localhost/react/api/articles/?order=${order}&column=${column}`
      )
      .then((response) => setArticles(response.data.data));
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
        `http://localhost/react/api/articles/?search=${searchKey}&column=writter`
      )
      .then((response) => setArticles(response.data.data));
  };

  return (
    <>
      <MyNavbar />
      <Container>
        <div className="searchSection">
          <h1>لیست مقالات</h1>
          <div className="searchBoxContainer">
            <input
              type="text"
              className="searchInput"
              placeholder="نام نویسنده مورد نظر"
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
                      id="longest"
                      name="sort"
                      label="طولانی ترین"
                      onChange={sortHandler}
                    />
                    <Form.Check
                      type="radio"
                      id="shortest"
                      name="sort"
                      label="کوتاه ترین"
                      onChange={sortHandler}
                    />
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <MdCategory size={"20px"} />
                  <b>دسته بندی</b>
                </Accordion.Header>
                <Accordion.Body>دسته بندی مقالات</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col className="col-12 col-lg-9">
            <Row className="row-cols-1 row-cols-md-2 row-cols-xl-3 gy-4 py-3">
              {articles.map((article) => (
                <Col key={article.id}>
                  <ArticleItem {...article} />
                </Col>
              ))}
            </Row>
            {articles.length === 0 && (
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

export default Articles;
