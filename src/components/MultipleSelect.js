import React, { Component } from 'react';

class MultipleSelect extends Component {
  state = { value: '' };

  handleBlur = (event) => {
    console.log('onBlur');
    this.setState({ value: event.target.value });
  };

  handleChange = () => {
    console.log('onChange');
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { value } = this.state;
    console.log(value);
  };

  render() {
    const { value } = this.state;
    return (
      // <button
      //   type="button"
      //   className="ui fluid dropdown selection multiple"
      //   onClick={clickOpen}
      //   onKeyDown={clickOpen}
      // >
      <form onSubmit={this.handleSubmit}>
        <select
          name="skills"
          onBlur={this.handleBlur}
          // onChange={this.handleChange}
          value={value}
        >
          <option value="">Skills</option>
          <option value="angular">Angular</option>
          <option value="css">CSS</option>
          <option value="design">Graphic Design</option>
          <option value="ember">Ember</option>
          <option value="html">HTML</option>
          <option value="ia">Information Architecture</option>
          <option value="javascript">Javascript</option>
          <option value="mech">Mechanical Engineering</option>
          <option value="meteor">Meteor</option>
          <option value="node">NodeJS</option>
          <option value="plumbing">Plumbing</option>
          <option value="python">Python</option>
          <option value="rails">Rails</option>
          <option value="react">React</option>
          <option value="repair">Kitchen Repair</option>
          <option value="ruby">Ruby</option>
          <option value="ui">UI Design</option>
          <option value="ux">User Experience</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
      // <i className="dropdown icon" />
      // <div className="default text">Skills</div>
      // <div className="menu transition hidden">
      //   <div className="item" data-value="angular">
      //     angular
      //   </div>
      // </div>
      // </button>
    );
  }
}

export default MultipleSelect;
