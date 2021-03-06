import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AOS from "aos";
import EventDetails from "./components/event-details/EventDetails";
import OnlineDetails from "./components/online-details/OnlineDetails";
import CulturalDetails from "./components/cultural-details/CulturalDetails";
import TechnicalEvents from "./components/technical-events/TechnicalEvents";
import CulturalEvents from "./components/cultural-events/CulturalEvents";
import OnlineEvents from "./components/online-events/OnlineEvents";
import AboutUs from "./components/about-us/AboutUs";
import Testimonials from "./components/testimonials/Testimonials";
import Events from "./components/event2/Events";

import Home from "./components/home/home";

import Faq from "./components/faqs/main";
import Gallery from "./components/gallery/gallery";
import Query from "./components/faqs/query/query";
import Sponsers from "./components/sponsers/sponsers";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Workshop from "./components/workshop/Workshop";
import "aos/dist/aos.css";

import Navbar from "./components/navbar/navbar";

AOS.init();

const slides = [
  {
    city: "Thaikkudam",

    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRlvRIUAGlUr3j8XRAW0eJ47cpUEf4DmFgISTWo5uLmj_Q0CPn9"
  },
  {
    city: "Masala Coffee",

    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgtRkv7aBCLM69U6R6nZtBjVbCz40XibhDKDuAFCpp2lCKRjXh"
  },
  {
    city: "Progressive Brothers",

    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQde1e2gBhUSAompRc-w5O6B86KAEUaWHpLHeeOlp6iFqxKHido"
  },
  {
    city: "Lagori",

    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSo6vbJFtXyxG3tEhEmELivySa8Gat5-jZOHHSdAGlnjpAQeDq"
  },
  {
    city: "Axonn",

    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQUsWCuuC5QXQwhGkVYtltUXKqN8OFtq9wxKfR5nWDbbebGFms"
  }
];

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/events/technical" component={TechnicalEvents} />
          <Route exact path="/events/cultural" component={CulturalEvents} />
          <Route exact path="/events/online" component={OnlineEvents} />
          <Route exact path="/events/technical/:id" component={EventDetails} />
          <Route exact path="/events/online/:id" component={OnlineDetails} />
          <Route
            exact
            path="/events/cultural/:id"
            component={CulturalDetails}
          />
          <Route exact path="/workshop" component={Workshop} />

          <Route
            exact
            path="/testimonials"
            render={props => <Testimonials {...props} slides={slides} />}
          />
          <Route exact path="/faq" component={Faq} />
          <Route exact path="/query" component={Query} />
          <Route exact path="/sponsers" component={Sponsers} />
          <Route exact path="/gallery" component={Gallery} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
