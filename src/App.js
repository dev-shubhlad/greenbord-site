import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import About from "./views/About/About";
import Career from "./views/Career/Career";
import HomePage from "./views/HomePage/HomePage";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about-us" exact component={About} />
          <Route path="/career" exact component={Career} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
