import React, { Component } from "react";
import { Row } from "antd";

import Todo from "./Todo";

class Todos extends Component {
  componentDidMount() {
    this.props.all();
  }

  render() {
    var taskList = this.props.todos.map(item => (
      <Todo
        task={item.content}
        complete={item.status}
        key={item.id}
        id={item.id}
        // delete={this.props.delete}
      />
    ));
    if (taskList.length != 0) {
      return <Row>{taskList}</Row>;
    } else {
      return (
        <div>
          <br />
          <br />
          <br />
          <h2 align="center">去添加事情吧!12313</h2>
        </div>
      );
    }
  }
}

export default Todos;
