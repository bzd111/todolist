import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout, Button } from "antd";
import { Link } from "react-router-dom";

import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import getAll from "./action";
import "./style.css";
import { del, update } from "./action";

const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
  async update(value) {
    await this.props.onPut(value.content, value.id);
  }

  async delete(id) {
    await this.props.onDel(id);
  }

  componentDidMount() {
    this.props.onChange();
  }

  render() {
    return (
      <div className="todo">
        <h1 align="center">todos</h1>
        <div>
          <section>
            <NewTodo all={this.props.onChange} />
          </section>
          <section>
            <Todos
              all={this.props.onChange}
              todos={this.props.todos}
              update={this.update.bind(this)}
              delete={this.delete.bind(this)}
            />
          </section>
          {/* <Link to="/contact">Click Here</Link> to contact us!
          <Link to="/all">Click Here</Link> to contact us! */}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

const mapDispatchToProps = dispatch => ({
  onChange: () => dispatch(getAll()),
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
