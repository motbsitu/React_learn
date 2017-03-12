import React from 'react'
import './App.css'
import Note from './Note'

//standard template
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }


var Board = React.createClass({
    propTypes: {
      count: function(props, propName){
        if(typeof props[propName] !== "number"){
          return new Error("The count must be a number")
      }
        if(props[propName] > 100) {
          return new Error('Creating ' + props[propName] + ' notes is too many')
        }
    }
  },
  getInitialState(){
    return {
      notes: []
    }
  },

  componentWillMount(){
    if (this.props.count){
      var url = `http://baconipsum.com/api/?type=all-meat&sentences=${this.props.count}`
      fetch(url)
          .then(results => results.json())
          .then(array => array[0])
          .then(text => text.split('. '))
          .then(array => array.forEach(sentence => this.add(sentence)))
          .catch(function(err){
            console.log("didn't connect to API", err)
          })
    }
  },

  nextID(){
    this.uniqueID = this.uniqueID || 0
    return this.uniqueID++
  },
  add(text){
    var notes = [
      ...this.state.notes,
      {
        id: this.nextID(),
        note: text
      }
    ]
    this.setState({notes})
  },
  //Update Notes
  // arrow function take in notes - if id of note being edited
  // is not the note then return note
  // Otherwise return a new object - using the spread operator to push current text
  // Then set the new text to note
  update(newText, id){
    var notes = this.state.notes.map(
      note => (note.id !== id) ?
        note :
        {
          ...note,
          note: newText
        }
      )
    this.setState({notes})
  },
  //Remove notes
  remove(id){
    // filter copy of notes array, only return items when logical test passes
    var notes = this.state.notes.filter(note => note.id !== id)
    this.setState({notes})
  },
  eachNote(note){
    return (<Note key={note.id}
                  id={note.id}
                  onChange={this.update}
                  onRemove={this.remove}>
                  {note.note}
            </Note>)
  },

  //display notes dynamically base on # of notes in state
    render(){
      return(<div className='board'>
                {this.state.notes.map(this.eachNote)}
                <button onClick={()=>this.add('New Note')}>+Add Note+</button>
            </div>)
    }
})
export default Board;
