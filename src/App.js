
import { Route, Router, Routes } from "react-router-dom";
import Layout from "./global/layout";
import Index from "./pages/home";
import TitlePage from "./pages/title";
import AuthorContact from "./pages/features/authorContact";
import SinglePost from "./pages/singlePost";

function App() {
  return (

    // <ThemeProvider>
      <div>
        <Layout>
          <Routes>
            <Route path="/" exact element={<Index />} />
            <Route path="/blogs" exact element={<TitlePage />} />
            <Route path="/author" exact element={<AuthorContact />} />
            <Route path="/single_post" exact element={<SinglePost />} />
          </Routes>


        </Layout>
      </div>
    // </ThemeProvider>

  );
}

export default App;
