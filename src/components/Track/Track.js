import React from 'react';
import './Track.css';


class Track extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }
    addTrack() {
        this.props.onAdd(this.props.track);
    }

    removeTrack() {
        this.props.onRemove(this.props.track);
    }
  render() { 
    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{this.props.track.name}</h3>
                <p>{this.props.track.artist} | {this.props.track.album}--</p>
            </div>
            <button  className="Track-action"><a onClick={this.addTrack}> + </a> or <a onClick={this.removeTrack}></a> will go here --</button>
        </div>
  );
 }
}


export default Track;
