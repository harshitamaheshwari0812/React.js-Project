import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';
// const element =<div><h1>New Main Component <p>fdfd</p></h1><p>para</p></div> //JSX


/*const element =React.createElement("div",{className:"abc"},<h1>Hello</h1>,<p>para</p>)*/ //without JSX

// function Element(){ //functional component
//   return <h1>hello</h1>
// }
// ReactDOM.render(element,document.getElementById("root"))

// ReactDOM.render(
//   <React.StrictMode>
//     <App></App>
//       {/* <Element/> */}
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <BrowserRouter><App/></BrowserRouter>
  ,document.getElementById('root')
  );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
