// packages
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Swal from "sweetalert2";

// components
import MyNavbar from "../../components/navbar/MyNavbar";

// style
import "./AddArticle.css";

function AddArticle() {
  const [formData, setFormData] = useState({});

  const resetFormData = () => {
    setFormData({
      title: "",
      description: "",
      writter: "",
      category: "",
      image: "",
      readingTime: "",
    });
  };
  const addArticleHandler = () => {
    axios
      .post("http://localhost/react/api/articles/", formData)
      .then((response) => {
        if (response.status === 200) {
          Swal.fire({
            title: "مقاله جدید با موفقیت ساخته شد",
            timer: 2000,
            icon: "success",
            timerProgressBar: true,
            showConfirmButton: false,
          });
          resetFormData();
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "مقاله جدید  ساخته نشد",
          timer: 2000,
          icon: "error",
          timerProgressBar: true,
          showConfirmButton: false,
        });
      });
  };

  const formHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <MyNavbar />
      <div className="formContainer">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>عنوان مقاله</Form.Label>
            <Form.Control
              value={formData.title}
              name="title"
              onChange={formHandler}
              type="text"
              placeholder="عنوان مقاله را وارد کنید"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>توضیح کوتاه</Form.Label>
            <Form.Control
              value={formData.description}
              name="description"
              onChange={formHandler}
              type="text"
              placeholder="یه توضیح کوتاه در مورد مقاله بنویسید"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>نویسنده مقاله</Form.Label>
            <Form.Control
              value={formData.writter}
              name="writter"
              onChange={formHandler}
              type="text"
              placeholder="نام نویسنده مقاله را وارد کنید"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>موضوع مقاله</Form.Label>
            <Form.Control
              value={formData.category}
              name="category"
              onChange={formHandler}
              type="text"
              placeholder="موضوع مقاله را وارد کنید"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>عکس مقاله</Form.Label>
            <Form.Control
              value={formData.image}
              name="image"
              onChange={formHandler}
              type="text"
              placeholder="آدرس عکس مقاله را وارد کنید"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>مدت زمان خواندن مقاله</Form.Label>
            <Form.Control
              value={formData.readingTime}
              name="readingTime"
              onChange={formHandler}
              type="number"
            />
          </Form.Group>
          <Button onClick={addArticleHandler} variant="primary" type="button">
            ساخت مقاله
          </Button>
        </Form>
      </div>
    </>
  );
}
export default AddArticle;
