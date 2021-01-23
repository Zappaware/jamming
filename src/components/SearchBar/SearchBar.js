import React from 'react';
import './SearchBar.css';


class SearchBar extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.handleSearchTerm = this.handleSearchTerm.bind(this);
  }

  search(){
    this.props.onSearch();
  }

  handleSearchTerm(e) {
    this.search(e.target.value);
  }
  render() { 
    return (
        <div onChange={this.handleTermChange}className="SearchBar">
            <input placeholder="Enter A Song, Album, or Artist" />
            <button className="SearchButton">SEARCH</button>
        </div>
  );
 }
}


export default SearchBar;
