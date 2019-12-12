import React, { Component } from "react";
import { Row, Col, Button, Checkbox, Input } from "antd";
import { connect } from "react-redux";
import { update, del } from "../action.js";

class Todo extends Component {
  state = {
    value: "",
    onEdit: true
  };

  onDoubleClick = () => {
    this.setState({ onEdit: false });
  };

  render() {
    const { id, complete, task } = this.props;
    const { value, onEdit } = this.state;
    return (
      <Row>
        <Col span={2}>
          <Checkbox
            checked={complete}
            defaultChecked={complete}
            style={{ float: "float" }}
            onChange={e => {
              this.props.update({ status: e.target.checked }, this.props.id);
            }}
          />
        </Col>
        <Col span={14}>
          {onEdit ? (
            <label
              style={{
                textDecoration: complete ? "line-through" : "none"
              }}
              onDoubleClick={this.onDoubleClick}
            >
              {value ? value : task}
            </label>
          ) : (
            <Input
              value={value}
              onChange={e => {
                this.setState({ value: e.target.value });
              }}
              autoFocus="autoFocus"
              onPressEnter={e => {
                this.setState({ value: e.target.value });
                this.setState({ onEdit: true });
                if (e.target.value.trim()) {
                  this.props.update({ content: e.target.value }, id);
                }
              }}
            />
          )}
        </Col>
        <Col span={8}>
          <Button
            type="danger"
            style={{ float: "right" }}
            onClick={() => {
              this.props.delete(this.props.id);
            }}
          >
            删除
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  delete: id => dispatch(del(id)),
  update: (status, id) => {
    dispatch(update(status, id));
  },
  dispatch
});

export default connect(null, mapDispatchToProps)(Todo);
