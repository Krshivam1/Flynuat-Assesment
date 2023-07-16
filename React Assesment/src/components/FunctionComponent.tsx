import React from 'react'

interface ComponentProps {
    name: string,
    subText: string

}

//question 1. function component, using interface for props

const FunctionComponent = (props: ComponentProps) => {
  return (
    <div>
      <h2>Function component example</h2>
        <h4>Hi, {props.name}</h4>
        <h5>{props.subText}</h5>
    </div>
  )
}

export default FunctionComponent;