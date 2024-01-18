import React from 'react'
import Counterr from './Counterr'
import Errorboundary from './Errorboundary'
import Karan from './Karan'
// import Karan from './Karan'

export default function App() {
  return (
    <div>
      <Errorboundary>
        <Counterr/>
      </Errorboundary>
      <Karan/>
    </div>
  )
}
