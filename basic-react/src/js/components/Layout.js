import React from "react";
import Header from "./Header";
import Footer from "./Footer";


export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {name: "alex", title: "hello"};
  }

  changeTitle(title) {
    this.setState({title: title});
  }

  render() {
    setTimeout(() => {
      this.setState({name: "molly"});
    }, 2000);
    return (
          <div>
            <Header changeTitle={this.changeTitle.bind(this)} title = {this.state.title}/>
            <Footer name = {this.state.name}/>
          </div>
      );

  };
}


