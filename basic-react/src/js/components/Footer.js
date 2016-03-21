import React from "react";

import Title from "./Header/Title";

export default class Footer extends React.Component {
  render() {
    return (<footer> Byebye, {this.props.name} </footer>);
  }
}
