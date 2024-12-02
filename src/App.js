import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/footer/Footer";
import routes from "./routes";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {routes.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
