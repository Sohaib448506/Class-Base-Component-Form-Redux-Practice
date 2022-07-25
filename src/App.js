import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.state = { array: [] };
    this.state = { object: {} };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (event) => {
    this.setState({ value: event.target.value });
    this.setState((x) => ({
      array: [event.target.value],
    }));
  };
  componentDidMount() {
    console.log("Hello I am Component did mount");
  }

  handleSubmit(event) {
    console.log(
      "🚀 ~ file: App.js ~ line 19 ~ App ~ handleSubmit ~ event",
      this.state.array
    );
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        {console.log("Component Re-render")}
        <input type="submit" value="Submit"></input>
      </form>
    );
  }
}
export default App;
