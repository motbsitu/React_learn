import React from 'react'
import './App.css'
import Draggable from 'react-draggable'


var Note = React.createClass({
  getInitialState(){
    return {editing: false}
  },
  componentWillMount(){
    //add style to post notes randomly on screen
    this.style = {
      right: this.randomBetween(0, window.innerWidth - 150, 'px'),
      top: this.randomBetween(0, window.innerHeight - 150, 'px')
    }
  },

  componentDidUpdate(){
    if (this.state.editing){
      this.refs.newText.focus()
      this.refs.newText.select()
    }
  },

  //takes in new props/new state and if changes
  //will re-render and if not will not re-render
  shouldComponentUpdate(nextProps, nextState){
    return this.props.children !== nextProps.children || this.state !== nextState
  },

//use case for key - generate random number
  randomBetween(x, y, s){
    return (x + Math.ceil(Math.random() * (y-x))) + s
  },
  edit(){
    // alert("Editing Note")
    this.setState({editing: true})
  },
  save(){
    // var val = this.refs.newText.value;
    // alert("later will be new value: " + val)
    // this.setState({editing: false})
    this.props.onChange(this.refs.newText.value, this.props.id)
    this.setState({editing: false})
  },
  remove(){
    // alert("Removing Note")
    this.props.onRemove(this.props.id)
  },

//render form
  renderForm(){
    return(
      <div className="note"
          style={this.style}>
        <textarea ref="newText"
                  defaultValue={this.props.children}></textarea>
        <button onClick={this.save}>Save</button>
      </div>
    )
  },

//render note
  renderDisplay(){
    return (
      <div className="note"
            style={this.style}>
        <p>{this.props.children}</p>
        <span>
          <button onClick={this.edit}>EDIT</button>
          <button onClick={this.remove}>X</button>
        </span>
      </div>
    )
  },
//logic to display form or note
  render(){
    //if this true      then   do this   else the next line
    return <Draggable>
      {((this.state.editing) ? this.renderForm()
                      : this.renderDisplay())}
            </Draggable>
  }
  })

  export default Note
