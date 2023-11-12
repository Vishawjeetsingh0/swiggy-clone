import Header from "../Header";
import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import store from "../../utils/store";
import { StaticRouter} from "react-router-dom/server";

test("Logo should load on rendering header", () => {
   
    // Load header
    const header = render(
        <StaticRouter>
    <Provider store={store}>
        <Header/>
        </Provider>
        </StaticRouter>)

console.log(header);

// Check if logo is loaded

const logo = header.getByTestId("logo");
console.log(logo);

expect(logo.src).toBe("http://localhost/dummy.png");



});