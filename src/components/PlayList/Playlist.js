import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  handleNameChange(e) {
    this.props.onNameChange(e.target.value);
  }
  render() { 
    return (
        <div className="Playlist">
            <input onChange={this.handleNameChange} value="New Playlist"/>
            <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true}/>
            <button onSave={this.props.onSave} className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
  );
 }
}


export default Playlist;
