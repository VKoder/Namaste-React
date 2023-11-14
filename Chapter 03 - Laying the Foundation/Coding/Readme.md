## Namaste React Course by Akshay Saini
# Chapter 03 - Laying the Foundation Coding Assignment


## Q: Create a `Nested header Element` using `React.createElement`(h1,h2,h3 inside a div with class "title")
```
    const h1 = React.createElement('h1', {} ,"I am H1" )
    const h2 = React.createElement('h2', {} ,"I am H2" )
    const h3 = React.createElement('h3', {} ,"I am H3" )
    const title = React.createElement("div", {className:"title"},[h1,h2,h3]);

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(title)

```


## Q: Create the `same element using JSX`
```
const jsxTitle = (
    <div className="title">
       <h1>I am H1 by using JSX</h1>
       <h2>I am H2 by using JSX</h2>
       <h3>I am H3 by using JSX</h3>
    </div>
    );
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(jsxTitle)
```


## Q: Create a `functional component of the same with JSX`
```
    const Title = () => (
        <div className="title">
            <h1>I am H1 by using Functional Component</h1>
            <h2>I am H2 by using Functional Component</h2>
            <h3>I am H3 by using Functional Component</h3>
        </div>
    )
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<Title/>)
```


## Q: Pass `attribute into the tag in JSX`
```
const Title2 = () => (
    <div className="title" id="titlee">
        <h1>I am H1 by using Functional Component</h1>
        <h2>I am H2 by using Functional Component</h2>
        <h3>I am H3 by using Functional Component</h3>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Title2/>)
```


## Q: `Composition of Component` (Add a component inside another)
```
const AnotherComp = () => (
        <h1>I am Another Component</h1>
    )
    const Comp = () => (
        <div id="com">
            {AnotherComp()}
            <AnotherComp/>
            <AnotherComp></AnotherComp>
            <h2>I am second com</h2>
        </div>
    )
root.render(<Comp/>)
```

## Q: Create a `Header Component from scratch` using `Functional Component with JSX`
- Add a Logo on Left
- Add a search bar in middle
- Add User icon on right
- Add CSS to make it look nice

```
    const Header = () => (
        <div id="head">
            <img id="img1" src={logo}></img>
            <input id="text" type="text" placeholder="Search.."></input>
            <img id="img2" src={user}></img>
        </div>
    )
    const root = ReactDOM.createRoot(document.getElementById("root"))
    root.render(<Header/>)
```

<!-- ## [Create a Header Component from scratch using Functional Component with JSX 🚀 Live Project App Link 😍] -->