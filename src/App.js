import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./About";
import Contact from "./Contact";
import Contactus from "./Contactus";
import Product from "./Product";
import ScrollToTop from "./ScrollToTop";
import "animate.css/animate.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/product" component={Product} />
            <Route path="/contact" component={Contact} />
            <Route path="/contactus" component={Contactus} />
            <Route component={Home} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
