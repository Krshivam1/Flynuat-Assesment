import React from 'react'

interface ComponentProps {
    greetingText: string
}

const ChildComponent = ({greetingText}: ComponentProps) => {
  return (
    <div>
        <h4>{greetingText}</h4>
    </div>
  )
}

export default ChildComponent