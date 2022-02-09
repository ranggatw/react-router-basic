import { Routes, Route } from "react-router-dom";
import About from "./component/About";
import { Home } from "./component/Home";
import Navbar from "./component/Navbar";
import { OrderSummary } from "./component/OrderSummary";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="order-summary" element={<OrderSummary />}></Route>
      </Routes>
    </>
  );
}

export default App;
