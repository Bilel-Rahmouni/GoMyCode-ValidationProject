import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Main from "./components/main";
import Events from "./components/Events";
import Groups from "./components/Groups";
import Footer from "./components/footer";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import Login from "./components/Login";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/events" component={Events} />
            <Route path="/groups" component={Groups} />
            <Route path="/shop" component={Shop} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
