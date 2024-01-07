
import { Route, Router, Routes } from "react-router-dom";
import Layout from "./global/layout";
import Index from "./pages/home";
import TitlePage from "./pages/title";
import AuthorContact from "./pages/features/authorContact";
import SinglePost from "./pages/singlePost";
import CreateBlogPost from "./pages/createBlog";


function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" exact element={<Index />} />
          <Route path="/blogs" exact element={<TitlePage />} />
          <Route path="/author" exact element={<AuthorContact />} />
          <Route path="/blog_post/:id" exact element={<SinglePost />} />
          <Route path="/create_blog_post" exact element={<CreateBlogPost />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
