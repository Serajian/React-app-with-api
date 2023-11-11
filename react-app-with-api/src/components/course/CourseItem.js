// packages
import { FaUsers } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { AiFillDollarCircle } from "react-icons/ai";

// style
import "./CourseItem.css";

function CourseItem(props) {
  return (
    <div className="courseCardWrapper">
      <div className="courseCardImage">
        <img src={props.image} alt="courseImg" className="courseImage" />
        <p>
          <FaUsers size={"20px"} />
          <span>{props.studentCount}</span>
        </p>
      </div>
      <div className="courseCardContent">
        <h5 className="courseName">{props.title}</h5>
        <p className="courseDescription">{props.description}</p>
      </div>
      <div className="courseCardTeacher">
        <p>
          <GiTeacher size={"25px"} />
          مدرس: {props.teacher}
        </p>
      </div>
      <div className="courseCardFooter">
        <p>
          <button>
            <b>ثبت نام دوره</b>
          </button>
        </p>
        <p>
          <AiFillDollarCircle size={"25px"} />
          <b>{props.mainPrice}</b>
        </p>
      </div>
    </div>
  );
}

export default CourseItem;
