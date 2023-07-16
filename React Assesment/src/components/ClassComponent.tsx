import React from 'react'

interface ComponentProps {
    name: string;
}

class ClassComponent extends React.Component<ComponentProps> {
  render() {
    return (
      <div>
        <h2>Class component example</h2>
        <h4>Hi, {this.props.name}</h4>
      </div>
    )
  }
}

export default ClassComponent