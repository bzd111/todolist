import React, { Component } from "react";
import { Input, Tooltip, Icon } from "antd";
import { connect } from "react-redux";

import { add } from "../action.js";
import "../style.css";

class NewTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  render() {
    return (
      <div>
        <Input
          placeholder="What needs to be done?"
          size="large"
          allowClear={true}
          value={this.state.value}
          onChange={e => {
            this.setState({ value: e.target.value });
          }}
          onPressEnter={e => {
            if (this.state.value.trim()) {
              const data = { content: this.state.value };
              this.props.add(data);
              this.setState({ value: "" });
            }
          }}
          prefix={<Icon type="right" style={{ color: "rgba(0,0,0,.25)" }} />}
        />
      </div>
    );
  }
}

export default connect(null, { add })(NewTodo);
