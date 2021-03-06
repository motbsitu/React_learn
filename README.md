# React.js
- User interface library
- Developed at Facebook
- Single page applications
- High-speed virtual DOM
- Part of the functional programming movement
  - follow the principles of immutable data - create copies of objects & replace, instead of mutating
- React is fast - DOM Rendering Speed, on interacts with virtual DOM (a JavaScript object) - only pushes necessary changes to DOM
- Display dynamic content and reuse components
- Collection of components - small user interact elements that display data as it changes over time
- Create components using React.createClass, or with ES6 class
- Create component using a stateless functional Component
- Properties - similar to adding attributes in HTML
  - add with text property(this.props.text), or close tag and add content (this.props.children).
- Events
- State - calls render and re-renders change in state
- Refs to access input value to save
- Prop types
- Parent and child components
- Keys are important for Component Lifecycle methods
- Component Lifecycle
  - mounting (getInitialState, componentWillMount, render, componentDidMount )
  - updating (componentWillReceiveProps, shouldComponentUpdate, componentWillUpdate, render, componentDidUpdate)
  - componentWillUnmount
  - React libraries :
    - fetch - to work with api
    - draggable - wrap component in another component

## Create React App
- sudo npm install -g create-react-app
- change to directory want to create in
- create-react-app name-project
- npm start

## Production build
- npm run build
