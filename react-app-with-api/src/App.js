// packages
import { BrowserRouter, Route, Routes } from "react-router-dom";

// components
import AddArticle from "./pages/addArticle/AddArticle";
import Article from "./pages/article/Article";
import EditArticle from "./pages/editArticle/EditArticle";
import Articles from "./pages/articles/Articles";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Courses from "./pages/courses/Courses";

// style

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/add-article" element={<AddArticle />} />
          <Route path="/article/:articleId" element={<Article />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/edit-article/:articleId" element={<EditArticle />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
