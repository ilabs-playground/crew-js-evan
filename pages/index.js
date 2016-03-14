import React, { Component } from 'react';

export default class extends Component {

  render() {
    //return (
    //  <div>
    //    <h1>Home Page</h1>
    //    <p>Coming soon.</p>
    //  </div>
    //);


    return <h1>Hello {this.props.name}</h1>;
  }

}
