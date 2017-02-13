import React from 'react';
import Songs from './Songs';

// const DUMMY_GENRE_NAME = 'Jazz';

// const DUMMY_SONGS = [{
//   id: 1,
//   name: "A Love Supreme",
//   genre: "Jazz",
//   artists: [{ name: "John Coltrane" }]
// }];
// const DUMMY_CURRENT_SONG = {};
// const DUMMY_IS_PLAYING = false;
// const DUMMY_TOGGLE_ONE = function () {};


export default function (props) {
  const songs = props.songs; 
  const genreName = props.genreName; 
  const toggleOne = props.toggleOne; 
  const isPlaying = props.isPlaying;
  const currentSong = props.currentSong;



  return (
    <div>
      <h3>{ genreName } Station</h3>
      <Songs 
        songs={ songs } 
        currentSong={ currentSong } 
        isPlaying={ isPlaying } 
        toggleOne={ toggleOne }
      />
    </div>
  );
}