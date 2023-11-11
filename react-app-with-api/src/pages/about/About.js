import { Link } from "react-router-dom";
import MyFooter from "../../components/footer/Footer";
import MyNavbar from "../../components/navbar/MyNavbar";
import "./About.css";
import { VscGithub } from "react-icons/vsc";

function About() {
  return (
    <>
      <MyNavbar />
      <h2>درباره ما</h2>
      <hr />
      <br />
      <div className="aboutContainer">
        <p>
          این سایت یک نمونه کار است که با <b>React</b> و <b>Api</b> واقعی ساخته
          شده.
        </p>
        <p>
          برای مشاهده نمونه های بیشتر میتوانید به لینک گیت هاب بنده مراجعه کنین.
        </p>
        <Link to={`https://github.com/Serajian`}>
          <VscGithub size="50px" color="black" />
        </Link>
        <p className="aboutFooter">
          ارادت.
          <br />
          <b>محسن سراجیان</b>
        </p>
      </div>
      <MyFooter />
    </>
  );
}
export default About;
