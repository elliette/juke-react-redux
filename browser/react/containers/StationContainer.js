/* 
We need to pull songs, isPlaying and and currentSong off of state. The songs we pass down as props needs to be filtered down to only the songs that match the chosen genreName. It would help to pass down the genreName as a prop as well, so that we can display it in the header.

For behavior, we need to define the toggleOne method, like we've done before.
*/ 

import { connect } from 'react-redux';
import Station from '../components/Station';
import {convertSong} from '../utils'; 
import { toggleSong } from '../action-creators/player';

const mapStateToProps = function (state, ownProps) {
  return {
    genreName: ownProps.params.genreName,
    songs: state.songs
      .filter(song => song.genre === ownProps.params.genreName)
      .map(convertSong),
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying
  };
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    toggleOne: function (song, list) {
      dispatch(toggleSong(song, list));
    }
  };
};

const StationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Station);

export default StationContainer;