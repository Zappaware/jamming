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
    this.state = {
      searchResults: [],
      playlistName: 'Playlist',
      playlistTracks: []
    };
    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track) {
    if(!this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)){
      let newTrack = this.state.playlistTracks.push(track.id); 
      this.setState({playlistTracks: newTrack});
    }
  }

  render() { 
    return (
    <div>
      <h1>Ja<span class="highlight">mmm</span>ing</h1>
      <div class="App">
        <SearchBar />
        <div class="App-playlist">
          <SearchResults searchResults={this.state.searchResults}/>
          <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
        </div>
      </div>
    </div>
  );
 }
}


export default App;
