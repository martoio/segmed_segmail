import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./components";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

/**
 * Utility class for use if importing as a JS lib;
 */
export default class Main {
    static render() {
        ReactDOM.render(<App />, rootElement);
    }
}
