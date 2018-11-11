import { useState, useEffect } from 'react'

const Editable = ({ render, eventType }) => {
  // Set initial state
  const [editing, setEditing] = useState(false)
  const [componentClicked, setComponentClicked] = useState(null)

  // Make component uneditable when event occurs outside of this component
  const handleEvent = ({ target }) => {
    if (componentClicked) if (!componentClicked.contains(target)) setEditing(false)
  }

  // Add or remove event listeners
  const updateListeners = attr => {
    const type = eventType ? eventType : 'click'
    document[attr](type, handleEvent, false)
  }

  useEffect(() => {
    // Set event listeners
    updateListeners('addEventListener')

    return () => {
      // Remove event listeners
      updateListeners('removeEventListener')
    }
  })

  // Make component editable and capture target
  // for comparison in handleEvent
  const userSetEditing = ({ target }) => {
    setEditing(true)
    setComponentClicked(target)
  }

  return render(editing, userSetEditing)
}

export { Editable }
