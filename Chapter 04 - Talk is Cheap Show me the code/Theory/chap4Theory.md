## Namaste React Course by Akshay Saini
# Chapter 04 - Talk is Cheap, show me the code

## Q: Is `JSX` mandatory for React?
A: `JSX` is a syntax extension that simplifies the combination of HTML and JavaScript in React. It allows for the creation of React elements, making React code more readable and maintainable. While `not mandatory`, using JSX results in cleaner code compared to the alternative of writing the equivalent with `React.createElement`. It enhances the developer's experience in building user interfaces with React.
#### Example of `JSX`
```
const sample = <h2>Namaste JSX</h2>;
```


## Q: Is `ES6` mandatory for React?
A: `ES6` is not mandatory for `React` but is highly recommendable. The latest projects created on React rely a lot on ES6. React uses ES6, and you should be familiar with some of the new features like: Classes, Arrow Functions, Variables(let, const).
ES6 stands for ECMAScript 6. ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015.


## Q: `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.
A: The Difference is stated below:
- `{TitleComponent}`: This value describes the `TitleComponent` as a javascript expression or a variable or React element. 
The `{}` can embed a javascript expression or a variable or React element inside it.
- `<TitleComponent/>` : This value represents a Component that is basically returning Some JSX value. In simple terms `TitleComponent` a function that is returning a JSX value. If component is written inside the `{<  />}` expression.
- `<TitleComponent></TitleComponent>` :  `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when `< TitleComponent />` has no child components. The opening and closing tags are created to include the child components.
#### Example
```
<TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
</TitleComponent>
```


## Q: How can I write `comments` in JSX?
A: JSX comments are written as follows:
- `{/*  */}` - for single or multiline comments
#### Example
```
{/* A JSX comment */}
{/* 
  JSX
  comment
*/}  
```

## Q: What is `<React.Fragment></React.Fragment>` and `<></>`?
A: `<React.Fragment></React.Fragment>` is a feature in React that allows you to grouped the nodes `without` even adding `extra nodes` to DOM
`<></>` is the shorthand tag for `React.Fragment`. The only difference between them is that the shorthand version does not support the key attribute.
#### Example
```
return (
        <React.Fragment>
            <Header />
            <Navigation />
            <Main />
            <Footer />
        </React.Fragment>
    );

return (
        <>
            <Header />
            <Navigation />
            <Main />
            <Footer />
        </>
    );
```


## Q: What is `Reconciliation` in React?
A: 


## Q: What is `React Fiber`?
A: 


## Q: Why do we need `keys` in React?
A: In React, `keys`are special attributes that provide a way to `uniquely identify ` and track elements in a list during the process of rendering. They help React efficiently update the user interface by determining which items have changed, been added, or been removed.
Keys should be given to the elements within the array to give the elements a stable identity.

```
IN SIMPLE WORDS- A key is a unique identifier assigned to each element in a React list.
It helps React keep track of the state and identity of each element in the list.
```
#### Example
```
<li key={0}>1</li>
<li key={1}>2</li>
<li key={2}>3</li>
```


## Q: Can we use `index as keys` in React?
A: Yes, we can use the `index as keys`, but it is not considered as a good practice to use them because if the order of items may change. This can negatively impact performance and may cause issues with component state.
Keys are taken from each object which is being rendered. There might be a possibility that if we modify the incoming data react may render them in unusual order.


## Q: What is `props in React`? Ways to.
A: props in raect means `properties` it's like an arguments to pass a functional components.A way to pass data from a parent component to a child component
#### Example
```
function App() {
  return (
    <div className="App">
      <Tool name="Vivek" tool="vscode"/> // name and tool are props
    </div>
  )
}
```

## Q: What is `Config Driven UI`?
A: `Config Driven UI` means controlling or changing the UI by using backend Data is known as Config Driven UI 


## Q: Difference between `Virtual DOM` and `Real DOM`?
<!-- A: DOM stands for `Document Object Model`, which represents your application UI and whenever the changes are made in the application, this DOM gets updated and the user is able to visualize the changes. DOM is an interface that allows scripts to update the content, style, and structure of the document.
- `Virtual DOM`
    - The Virtual DOM is a light-weight abstraction of the DOM. You can think of it as a copy of the DOM, that can be updated without affecting the actual DOM. It has all the same properties as the real DOM object, but doesn’t have the ability to write to the screen like the real DOM.
    - Virtual DOM is just like a blueprint of a machine, can do the changes in the blueprint but those changes will not directly apply to the machine.
    - Reconciliation is a process to compare and keep in sync the two files (Real and Virtual DOM). Diffing algorithm is a technique of reconciliation which is used by React.
- `Real DOM`
    - The DOM represents the web page often called a document with a logical tree and each  branch of the tree ends in a node and each node contains object programmers can modify the content of the document using a scripting language like javascript and the changes and updates to the dom are fast because of its tree-like structure but after changes, the updated element and its children have to be re-rendered to update the application UI so the  re-rendering of the UI which make the dom slow all the UI components you need to be rendered for every dom update so real dom would render the entire list and not only those item that receives the update .

|   `Real DOM`    |   `Virtual DOM` |
|-------------|-----------------|
| DOM manipulation is very expensive  | DOM manipulation is very easy  | 
| There is too much memory wastage  | No memory wastage  |
| It updates Slow | It updates fast |
| It can directly update HTML | It can’t update HTML directly  |
|  Creates a new DOM if the element updates. | Update the JSX if the element update |
| It allows us to directly target any specific node (HTML element) | It can produce about 200,000 Virtual DOM Nodes / Second. |
| It represents the UI of your application | It is only a virtual representation of the DOM | -->