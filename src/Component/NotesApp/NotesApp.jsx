import React, { Component } from 'react'
import AddNote from './AddNote/Addnote';

class NotesApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      noteArray: [
        { id: 1, post: 'newPost1', display: true },
        { id: 2, post: 'newPost2', display: true },
        { id: 3, post: 'newPost3', display: true },
      ],
    }
  }

  render() {
    const { noteArray } = this.state;
    return (
      <div>
        <h2>Write Notes </h2>
        {noteArray.map(item => (
          item.display &&
          <AddNote key={item.id} post={item.post} />
        ))}
      </div>
    )
  }
}


export default NotesApp;