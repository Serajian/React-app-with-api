// packages
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

// components
import MyNavbar from "../../components/navbar/MyNavbar";

// style

function EditArticle() {
  const articleId = useParams().articleId;
  const [articleData, setArticleData] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost/react/api/articles/?id=${articleId}`)
      .then((response) => setArticleData(response.data.data[0]));
  }, []);

  const editArticleHandler = () => {
    axios.put(`http://localhost/react/api/articles/?id=${articleId}`, articleData);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "ویرایش با موفقیت انجام شد",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  const formHandler = (e) => {
    setArticleData({ ...articleData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <MyNavbar />
      <div className="formContainer">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>عنوان مقاله</Form.Label>
            <Form.Control
              value={articleData.title}
              name="title"
              onChange={formHandler}
              type="text"
              placeholder="عنوان مقاله را وارد کنید"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>توضیح کوتاه</Form.Label>
            <Form.Control
              value={articleData.description}
              name="description"
              onChange={formHandler}
              type="text"
              placeholder="یه توضیح کوتاه در مورد مقاله بنویسید"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>نویسنده مقاله</Form.Label>
            <Form.Control
              value={articleData.writter}
              name="writter"
              onChange={formHandler}
              type="text"
              placeholder="نام نویسنده مقاله را وارد کنید"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>موضوع مقاله</Form.Label>
            <Form.Control
              value={articleData.category}
              name="category"
              onChange={formHandler}
              type="text"
              placeholder="موضوع مقاله را وارد کنید"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>عکس مقاله</Form.Label>
            <Form.Control
              value={articleData.image}
              name="image"
              onChange={formHandler}
              type="text"
              placeholder="آدرس عکس مقاله را وارد کنید"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>مدت زمان خواندن مقاله</Form.Label>
            <Form.Control
              value={articleData.readingTime}
              name="readingTime"
              onChange={formHandler}
              type="number"
            />
          </Form.Group>
          <Button onClick={editArticleHandler} variant="primary" type="button">
            ویرایش مقاله
          </Button>
        </Form>
      </div>
    </>
  );
}
export default EditArticle;
