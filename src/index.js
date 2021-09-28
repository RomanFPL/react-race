import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import "./index.css";
import App from "./app"
import { bindActionCreators, createStore } from 'redux';
import rootReducer, * as actions from "./store/counter"

const store = new createStore(rootReducer);
console.log("$$$$", "store", store.getState());
store.subscribe(() => console.log("$##$$", store.getState()))
const {plusAction, minusAction} = bindActionCreators(actions, store.dispatch);

plusAction(5)
plusAction(3)
plusAction(7)
plusAction(3)
minusAction(1)

ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.querySelector("#root"))