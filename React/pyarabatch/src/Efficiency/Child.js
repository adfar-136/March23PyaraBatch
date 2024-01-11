import React from 'react'

function Child() {
    console.log("child called")
  return (
    <div>Childshdghjgfhdsggd</div>
  )
}
export default React.memo(Child)