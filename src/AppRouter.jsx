import { Route, Routes } from "react-router-dom";

import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import CategoryPage from "./Pages/CategoryPage";

export const AppRouter = () => {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
      </Routes>
    </>
  );
};
