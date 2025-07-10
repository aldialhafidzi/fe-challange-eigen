import { BrowserRouter, Route, Routes } from "react-router";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/home/HomePage";
import NewsPage from "./pages/news/NewsPage";
import NewsDetailPage from "./pages/news/NewsDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="news">
            <Route index element={<NewsPage />} />
            <Route path=":slug" element={<NewsDetailPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
