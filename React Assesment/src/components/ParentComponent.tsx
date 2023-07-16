import React from 'react'
import ChildComponent from './ChildComponent'

interface ComponentProps {
    greetingText: string
}

const ParentComponent = ({greetingText}: ComponentProps) => {
  return (
    <div>
        <h2>Passing data from one component to another component</h2>
        <ChildComponent greetingText={greetingText} />
    </div>
  )
}

export default ParentComponent