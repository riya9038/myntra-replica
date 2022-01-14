import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { connect } from "react-redux";
import ProductDetail from "./ProductDetail";
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route exact path="/productDetails" element={<ProductDetail />}/>
          <Route exact path="/" element={<Home />}/>          
        </Routes>
        </Router>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    state,
  };
}


export default connect(mapStateToProps)(App)