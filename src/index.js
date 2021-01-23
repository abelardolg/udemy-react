import React from 'react';
import ReactDOM from 'react-dom';

import "./index.css";

import {CounterApp } from "./CounterApp";

export const INITIAL_VALUE = 100;
const divRoot = document.querySelector("#root");

ReactDOM.render(<CounterApp value={ INITIAL_VALUE } />, divRoot);
