import React, { Component } from "react";
import { connect } from "react-redux";
export class Data extends Component {
  //   componentDidMount() {
  //     console.log("Hello I am Data Component did mount");
  //   }
  //   componentDidUpdate(preProp, preState) {
  //     console.log(
  //       "🚀 ~ file: Data.js ~ line 8 ~ Data ~ componentDidUpdate ~ componentDidUpdate"
  //     );
  //   }
  //   componentWillUnmount() {
  //     console.log(
  //       "🚀 ~ file: App.js ~ line 21 ~ App ~ componentWillUnmount ~ componentWillUnmount"
  //     );
  //   }
  render() {
    return (
      <>
        {this.props.dataToggle && (
          <div>
            Data
            {console.log("Data Component Re-render")}
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("🚀 ~ file: App.js ~ line 78 ~ mapStateToProps ~ state", state);
  return state;
};
export default connect(mapStateToProps)(Data);
