import React from "react";
import Employees from "./pages/Employees";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Brands from "./pages/Brands";
import Models from "./pages/Models";
import Categories from "./pages/Categories"
import Menu from "./components/Menu";
function App() {
  return (
    <>

      <Router>
      <Menu />
      <h1 className="text-2xl font-bold underline text-center">ByteShop</h1>

        <Routes>
          <Route path="/" element={<Models />} />
          <Route path="/Brands" element={<Brands />} />
          <Route path="/Employees" element={<Employees />}></Route>
          <Route path="/Categories" element={<Categories />}></Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;
