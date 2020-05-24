import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import { capitalize } from "lodash";
import Navigo from "navigo";

const router = new Navigo(window.location.origin);

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
    ${Header(st)}
    ${Nav(state.Links)}
    ${Main(st)}
    ${Footer()}
  `;
}

router
  .on({
    "/": () => render(state.Home),
    ":page": params => render(state[capitalize(params.page)])
  })
  .resolve();

router.updatePage();
