import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Home from "./pages/homepage";
import About from "./pages/aboutus"
import Giving from "./pages/givingback"
import Contact from "./pages/contact"
import Input from './pages/forminput'
import Route from './pages/route'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Route path="/">
      <Home />
    </Route>
    <Route path="/home">
      <Home />
    </Route>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/giving_back">
      <Giving />
    </Route>
    <Route path="/contact">
      <Contact />
    </Route>
  </StrictMode>
);
