## Namaste React Course by Akshay Saini
# _Chapter 03 - Laying the Foundation_

# _Assignment 03

## Topics
- `JSX`
- `React.createElement` vs `JSX`
- `Benefits of JSX`
- `Behind the Scenes of JSX`
- `Babel` & `parcel` role in JSX
- `Components`
- `Functional Components`
- `Composing Components` 


## Theory Assignment:

## Q. What is `JSX`?
A: JSX or `Javascript XML` is HTML or XML like syntax which is used to create HTML DOM elements in more expressive way, making it easier to understand.(It is HTML + JS)
    ```eg:  const jsxHeading = <h1>Hey I am Jsx Heading</h1>```




##  Q. Superpowers of `JSX`.

A: `Readability and Expressiveness`: HTML and XML like syntax making JSX easy to read.
    `Embedding JavaScript Expressions`: JSX allows embedding JavaScript expressions within curly braces `{}`
    `Components`: JSX supports the use of React components. Components can be used within JSX.
    `React Element Creation`:JSX gets transformed into React.createElement calls during the build process.(`Babel is the Monster`)
    `Inline Styles`: JSX supports the use of inline styles using the style attribute. 





##  Q. Role of `type` attribute  in script tag? What `options can I use` there?

A: The `type` attribute in the HTML `<script>` tag specifies the scripting language. Common values are `"text/javascript"` (default) and `"module"`.






##  Q. `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.

A: In JSX, {TitleComponent}, {<TitleComponent/>}, and {<TitleComponent></TitleComponent>} are three different ways to render a React component. 




##  Q. `Components`:

A: A component is a reusable building block for building user interfaces.






## Q. `React.createElement` vs `JSX`.

A: Both are the different ways to create react elements. As JSX provides more easy way to create and later it `transpilied` into react element through Babel.






##  Q.`Behind the Scenes of JSX`

A: JSX is HTML like syntax which is very easy to understand. But Our Browser don't understand JSX, then how it is giving us the output? So behind the scence Before going to browser Babel `converts/transpilies` JSX code to React Element. So that after rendering it this React Element/JS Object get converted into HTML DOM so that our browser can understand.





##  Q.`Babel` & `parcel` role in JSX:

A: Parcel is a bundler which is a package we installed to `optimize` our app and to build our app production ready.
But Parcel can't able to do it single handedly therefore parcel also installed so many other dependencies at the of intsallation. Babel is one of them. What Babel do is it `transpilies` JSX code to React Element so that after rendering it it converts to HTML DOM.






##  Q.`Functional Components`

A: Functional component is nothing but a normal js function which  `returns some piece of JSX code/ react element`.





## Q.`Composing Components` 

A: When we want to use component `inside other component` then it is called as component composition.