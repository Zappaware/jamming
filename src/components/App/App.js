import React from 'react';
import './App.css';
import '../SearchBar/SearchBar';
import '../SearchResults/SearchResults';
import '../PlayList/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../PlayList/Playlist';
import Spotify from '../../util/Spotify';

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
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName(this);
    this.savePlayList = this.savePlayList.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    if(!this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)){
      let newTrack = this.state.playlistTracks.push(track.id); 
      this.setState({playlistTracks: newTrack});
    }
  }

  removeTrack(track) {
    let removeTrack = this.playlistTracks.filter(savedTrack => savedTrack.id !== track.id)
    this.setState({playlistTracks: removeTrack })
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name});
  } 

  savePlayList() {
    let trackURIs = [];
    this.state.playlistTracks.forEach(playlistTrack => {
      trackURIs.push(playlistTrack.uri);
    });
    Spotify.savePlaylist(this.state.playlistName, trackURIs);
    this.setState({playlistTracks:[], playlistName: 'New Playlist', searchResults:[]});
  }
  
  search(searchTerm) {
    Spotify.search(searchTerm).then(tracks => this.setState({searchResults: tracks}))
  }

  render() { 
    return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar onSearch={this.search}/>
        <div className="App-playlist">
          <SearchResults 
          onAdd={this.addTrack} 
          searchResults={this.state.searchResults}
          />
          <Playlist 
          onRemove={this.removeTrack} 
          playlistName={this.state.playlistName} 
          playlistTracks={this.state.playlistTracks}
          onChangeName={this.updatePlaylistName}
          onSave={this.savePlayList}
          />
        </div>
      </div>
    </div>
  );
 }
}


export default App;
