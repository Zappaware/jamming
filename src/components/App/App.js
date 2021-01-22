import React from 'react';
import './App.css';
import '../SearchBar/SearchBar';
import '../SearchResults/SearchResults';
import '../PlayList/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../PlayList/Playlist';

class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {searchResults: []};
  }
  render() { 
    return (
    <div>
      <h1>Ja<span class="highlight">mmm</span>ing</h1>
      <div class="App">
        <SearchBar />
        <div class="App-playlist">
          <SearchResults searchResults={this.state.searchResults}/>
          <Playlist />
        </div>
      </div>
    </div>
  );
 }
}


export default App;
