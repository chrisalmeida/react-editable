# React Editable

Making use of React hooks for editing components in place.

### Installation

```
npm install --save chrisalmeida/react-editable#master
```

### Prerequisites

React >= v16.7.0-alpha is needed in order to use hooks.

### Example

```jsx
<Editable
  render={(editable, setEditing) => {
    return (
      <input
        className={!editable ? 'not-editing' : ''}
        onFocus={e => setEditing(e)}
      />
    )
  }}
/>
```

A [create-react-app](https://github.com/facebook/create-react-app) example is included in example/
