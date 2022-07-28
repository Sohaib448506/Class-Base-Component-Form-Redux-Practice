import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";

export class test extends Component {
  static propTypes = {
    second: third,
  };

  render() {
    return <div>test</div>;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(test);
