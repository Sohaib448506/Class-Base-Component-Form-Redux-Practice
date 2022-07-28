import React from "react";
import "./App.css";
import Data from "./Data";
import { connect } from "react-redux";
import { action, arrayActioon, objectAction } from "./store/action";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      array: [1, 2, 3],
      object: { name: "Sohaib" },
      data: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (event) => {
    this.setState({ value: event.target.value });
    this.setState((x) => ({
      array: [...x.array, event.target.value],
    }));
    this.setState((x) => ({
      object: { ...x.object, name: event.target.value },
    }));
  };
  // componentWillUnmount() {
  //   console.log(
  //     "🚀 ~ file: App.js ~ line 21 ~ App ~ componentWillUnmount ~ componentWillUnmount"
  //   );
  // }
  // componentDidMount() {
  //   console.log("Hello I am Component did mount");
  // }
  componentDidUpdate(preProp, preState) {
    // console.log(
    //   "🚀 ~ file: App.js ~ line 25 ~ App ~ componentDidUpdate ~ componentDidUpdate",
    //   preState.data
    // );
    console.log(
      "🚀 ~ file: App.js ~ line 20 ~ App ~ componentDidUpdate ~ preState",
      preState.object
    );
  }
  dataToggle() {
    this.setState((x) => ({ data: !x.data }));
  }
  handleSubmit(event) {
    // alert("A name was submitted: " + this.state.object);
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        {" "}
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>

          <input type="submit" value="Submit"></input>
          {console.log("this.props", this.props)}
          <button
            onClick={() => {
              this.props.action(true);
              this.props.arrayActioon(this.state.array);
              this.props.objectAction(this.state.object);
            }}
          >
            Data Toogle
          </button>
          {<Data data={this.state} />}
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = { action, arrayActioon, objectAction };
export default connect(mapStateToProps, mapDispatchToProps)(App);
