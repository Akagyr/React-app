import "./App.css";
import Posts from './components/Posts/Posts';
import { Routes, Route } from "react-router-dom";
import Users from "./components/Users/Users";
import Header from "./components/Header/Header";
import ErrorPage from "./common/ErrorPage/ErrorPage";

function App() {
  return (
    <div>
      <Header />
      <div className="container-wrapper">
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/users" element={<Users />} />
          {/* <Route path="/test" element={<ContentPreloader />} /> */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
