import "./App.css";
import Navigation from "./component/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Product from "./component/page/product";
import Member from "./component/page/Member";
import Home from "./component/page/home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" Component={Home} exaxt />
          <Route path="/product" Component={Product} />
          <Route path="/member" Component={Member} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
