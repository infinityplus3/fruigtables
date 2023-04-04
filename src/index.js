import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createMedia } from "@artsy/fresnel";
import { Home, HomeMobile } from "./pages/homepage";
import { About, AboutMobile } from "./pages/aboutus"
import { Giving, GivingMobile } from "./pages/givingback"
import Route from './pages/route'
import { Mission, MissionMobile } from './pages/mission'

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
        <Media at="sm">
          <HomeMobile />
        </Media>
        <Media greaterThan="sm">
          <Home />
        </Media>
      </Route>
      <Route path="/home">
        <Media at="sm">
          <HomeMobile />
        </Media>
        <Media greaterThan="sm">
          <Home />
        </Media>
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
        <Media at="sm">
          <GivingMobile />
        </Media>
        <Media greaterThan="sm">
          <Giving />
        </Media>
      </Route>
      <Route path="/mission">
        <Media at="sm">
          <MissionMobile />
        </Media>
        <Media greaterThan="sm">
          <Mission />
        </Media>
      </Route>
    </MediaContextProvider>
  </StrictMode>
);
