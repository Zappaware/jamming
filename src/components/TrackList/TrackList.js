import React from 'react';
import './TrackList.css';


class TrackList extends React.Component {
  render() { 
    return (
        <div tracks={this.props.searchResults} class="TrackList">
          {
          this.props.tracks.map(track => {
            return <track track={track} key={track.id} />
          })
          }
        </div>
  );
 }
}


export default TrackList;
