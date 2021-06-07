/*// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
// normalize CSS across browsers
import "./src/normalize.css"
// custom CSS styles
import "./src/style.css"

// Highlighting for code blocks
import "prismjs/themes/prism.css"*/
import "./src/css/normalize.css"

import "./src/css/main.css"
import "./src/css/prismjs.css"
import "./src/css/navbar.css"

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@popperjs/core/dist/umd/popper.min.js";
import "prismjs/themes/prism-solarizedlight.css";

import GlobalContextProvider from "./src/context/GlobalContextProvider"

export const wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>
}