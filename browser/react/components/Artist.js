import React from 'react';
import {Link} from 'react-router';

export default function (props) {
  console.log("PROPS", props); 

  const artist = props.selectedArtist;
  const songs = props.selectedArtist.songs; 
  const albums = props.selectedArtist.albums; 
  const toggleOne = props.toggleOne; 
  const isPlaying = props.isPlaying;
  const currentSong = props.currentSong;

  console.log("SONGS", songs); 


  return (
    <div>
      <h3>{ artist.name }</h3>
      <ul className="nav nav-tabs">
        <li><Link to={`/artists/${artist.id}/albums`}>ALBUMS</Link></li>
        <li><Link to={`/artists/${artist.id}/songs`}>SONGS</Link></li>
      </ul>
      {
        props.children && React.cloneElement(props.children, Object.assign({}, props, {
          albums: albums,
          songs: songs
        }))
      }
    </div>
  );

};