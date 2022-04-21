import React, { Component } from 'react'

type Props = {
  error:string|null
}

type State = {}

export default class Alert extends Component<Props, State> {
  render() {
    return (
    this.props.error &&
    <div className="alert alert-danger" role={'alert'}>
      {this.props.error}
    </div>
    )
  }
}