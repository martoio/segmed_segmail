import * as React from "react";
import * as ReactDOM from "react-dom";
import Record from "./models/record";
import App from "./components";

const data: {records: Array<Record>} = require('../data/data.json');

const rootElement = document.getElementById("root");
ReactDOM.render(<App records={data.records}/>, rootElement);

/**
 * Utility class for use if importing as a JS lib;
 */
export default class Main {
    static render() {
        ReactDOM.render(<App />, rootElement);
    }
}
