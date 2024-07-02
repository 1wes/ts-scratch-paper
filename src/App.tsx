import { Fragment } from 'react'

import './App.css'

function App() {
  
  const message: string = 'This is just an intro to Typescript. Dig in, this could be fun';

  return (
    <Fragment>
      <div>
        <h2>
          {message}
          </h2>
      </div>
    </Fragment>
  )
}

export default App
