import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createMedia } from "@artsy/fresnel";
import Home from "./pages/homepage";
import {About, AboutMobile} from "./pages/aboutus"
import Giving from "./pages/givingback"
import Route from './pages/route'
import Mission from './pages/mission'

const ExampleAppMedia = createMedia({
  breakpoints: {
    sm: 0,
    md: 768,
    lg: 1024,
    xl: 1192,
  },
});

const { Media, MediaContextProvider } = ExampleAppMedia;
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <MediaContextProvider>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/about">
        <Media at="sm">
          <AboutMobile />
        </Media>
        <Media greaterThan="sm">
          <About />
        </Media>
      </Route>
      <Route path="/giving_back">
        <Giving />
      </Route>
      <Route path="/mission">
        <Mission />
      </Route>
    </MediaContextProvider>
  </StrictMode>
);
