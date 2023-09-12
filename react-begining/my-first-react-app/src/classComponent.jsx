import  { Component } from "react";

class ClassInput extends Component {
  constructor(props) {
    super(props);
  }
  // Some more code goes here

  render() {
    return (
      <section
        className="functional-input"
      >
        {/* eslint-disable-next-line react/prop-types*/}
        <h3>{this.props.name}</h3>
        {/* The input field to enter To-Do's */}
        <form>
          <label htmlFor="task-entry">Enter a task: </label>
          <input type="text" name="task-entry" />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        {/* The list of all the To-Do's, displayed */}
        <ul></ul>
      </section>
    );
  }
}

export default ClassInput;