import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Men from "./pages/Men";
import kids from "./pages/Kids";
import Women from "./pages/Women"
import Accessories from "./pages/Accessories";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/men" exact component={Men} />
          <Route path="/Kids" exact component={kids} />
          <Route path="/Women" exact component={Women} />
          <Route path="/Accessories" exact component={Accessories} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
