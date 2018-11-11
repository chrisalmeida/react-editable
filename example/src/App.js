import React, { Component } from 'react'
import './App.css'
import { Editable } from './editable'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Editable
          render={(editable, setEditing) => {
            return (
              <input
                className={!editable ? 'not-editing' : ''}
                onFocus={e => setEditing(e)}
                defaultValue="Focus on me!"
              />
            )
          }}
        />
      </div>
    )
  }
}

export default App
