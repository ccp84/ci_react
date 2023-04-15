# CI React Intro
## Install commands and file setup:

`npx create-react-app my-app --use-npm`

```
npm run build
Bundles the app into static files for production.

npm test
Starts the test runner.

npm run eject
Removes this tool and copies build dependencies, configuration files
and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

cd my-app
npm start

Happy hacking!
```

- Installed ESLint and Prettier

```
npm install -D eslint
npm install -D prettier@2.7.1
npm install -D eslint@8.24.0 eslint-config-prettier@8.5.0
npm install -D eslint-plugin-import@2.26.0 eslint-plugin-jsx-a11y@6.6.1 eslint-plugin-react@7.31.8
npm install -D eslint-plugin-react-hooks@4.6.0
```

- .eslintrc.json file

```
{
"extends": [
"eslint:recommended",
"plugin:import/errors",
"plugin:react/recommended",
"plugin:react-hooks/recommended",
"plugin:jsx-a11y/recommended",
"prettier"
],
"rules": {
"react/prop-types": 0,
"react/react-in-jsx-scope": 0
},
"plugins": ["react", "import", "jsx-a11y"],
"parserOptions": {
"ecmaVersion": 2022,
"sourceType": "module",
"ecmaFeatures": {
"jsx": true
}
},
"env": {
"es6": true,
"browser": true,
"node": true
},
"settings": {
"react": {
"version": "detect"
},
"import/resolver": {
"node": {
"extensions": [".js", ".jsx"]
}
}
}
}
```

- .prettierrc file

```
{
"useTabs": true,
"tabWidth": 4
}

```

- .gitignore

```
.env
coverage/
.vscode/
```

## Using class state
* Set the constructor
```javascript
constructor(props) {
super(props);
this.state = {
//whatever you want to set the initial state to be
};
}
```
* Use setState to update state:
```javascript
handleClick() {
this.setState(
{
//new state
//will merge with variables not updated
},
() => {
// use arrow function here to do anything that needs to happen AFTER state has changed
}
);
//this will happen WHILE state is changing and use OLD state variables
}

```
* Update state using prevState
```javascript
increment() {
this.setState((prevState, prevProps) => { //pass in arrow function to setState
return { //return a state object
counter: prevState.counter + 1, // use previous value of state then mutate that value 
};
});
}
```

## ES7 Snippets 

* [Link to reference on snippets here](https://docs.google.com/document/d/1QtCwh_CcgXwbrHcGP4hlpOi37vylxurn-x4BznhbkBA/edit)


## Conditional Rendering

```javascript
{this.state.isLoggedIn} ? (will render if isLoggedin is true) : ( will render is isLoggedin is false)
```

## Lists

* Lists must include a unique key when rendering
```javascript
return (
<div>
{booklist.map((book) => {
return <Book key={book.Title} book={book} />;
})}
</div>
);
```

## Template API cycle

```javascript
    getData = () => {
    	setTimeout(() => {
    		this.setState({
    			data: "Data Loaded", // this would be your API call method
    		});
    	}, 3000);
    };

    componentDidMount() {
    	this.getData(); // once page loaded, then fetch API data to reduce page load lag
    }

    render() {
    	return (
    		<div>
    			<h1>{this.state.data}</h1>
    		</div>
    	);
    }

}
```

## Install Axios to make HTTP requests
* `npm install axios`
* post to api via axios:
```javascript
postToApi = () => {
axios.post("url", {});
};
```