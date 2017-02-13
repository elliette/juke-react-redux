import React, {Component} from 'react';
import Album from '../components/Album';
import {toggleSong} from '../action-creators/player';
import {connect} from 'react-redux'; 


function mapStateToProps(state){ 
  return {selectedAlbum: state.albums.selected, player: state.player}; 
}

function mapDispatchToProps(dispatch){
  return {toggleOne: 
    function toggle(song, list){
      dispatch(toggleSong(song, list))}}
}

export default connect(mapStateToProps, mapDispatchToProps)(Album); 

// export default class extends Component {

//   constructor() {
//     super();
//     this.state = store.getState();
//   }

//   componentDidMount() {
//     this.unsubscribe = store.subscribe(() => {
//       this.setState(store.getState());
//     });
//   }

//   componentWillUnmount() {
//     this.unsubscribe();
//   }

//   toggle(song, list) {
//     store.dispatch(toggleSong(song, list));
//   }

//   render() {
//     return <Album
//       selectedAlbum={this.state.albums.selected}
//       currentSong={this.state.player.currentSong}
//       isPlaying={this.state.player.isPlaying}
//       toggleOne={this.toggle}
//     />;
//   }

// }