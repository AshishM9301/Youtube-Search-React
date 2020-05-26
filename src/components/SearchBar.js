import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = {
    term: '',
  };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onFromSubmit(this.state.term);
  };

  render() {
    return (
      <div className='ui segment search-bar'>
        <form className='ui form' onSubmit={this.onFormSubmit}>
          <div className='field'>
            <label>Video Search</label>
            <input
              onChange={this.onInputChange}
              value={this.state.term}
              type='text'
            />
          </div>
        </form>
      </div>
    );
  }
}
