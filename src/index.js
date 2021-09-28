import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import "./index.css";
import App from "./app"
import { createStore } from 'redux';
import rootReducer from "./store/counter"

const store = new createStore(rootReducer);
console.log("$$$$", "store", store.getState())

ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.querySelector("#root"))