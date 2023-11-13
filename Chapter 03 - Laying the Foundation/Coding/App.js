import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";

// 1) Using React Element
// const head = React.createElement('h1', {}, "Namaste React Element")
const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(head)










// 2) Element using JSX---
//  Babel transpiles it to reactElem => JsObj => HTMLElem(Object)-------Babel is the MONSTER
const jsxheading = <h1>Namaste React from JSX</h1>;
root.render(jsxheading);














// Functional Component - It is just an arrow function who returns some piece of JSX or react elememt.
// Ways of writing :-



//  1)
const Header = () => {
  return <h1>Hey I am Functional Component with {} and return</h1>;
};



//  2)
const Header2 = () => <h1>Hey I am Functional Component without {} and return</h1>



//  3)
const Header3 = () => (
  <h1>
    Hey I am Functional Component with () which is mandatory to write multiple
    lines in JSX
  </h1>
);

root.render(<Header/>);             //Functional compos rendered like this </>
root.render(<Header2/>); 
root.render(<Header3/>); 











//  Component Composition :- When we want to use a componeent inside a component is called CC.

const Title = () =>(
    <h2>Hey I am Title And I am going Inside Container</h2>
)

const HeaderComponent = () => (
    <div id="container">
        <Title/>
        <h1>Hey I am HeaderComponent and title is inserted above me using angular bracs </h1>
    </div>
)

root.render(<HeaderComponent/>)