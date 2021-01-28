import React from "react";
import MusicIcon from "../../../assets/images/music.png";

const SongsList = (props) => {
  return (
    <div className="list">
      {props.songs.map((song, index) => {
        return (
          <div
            className={`song ${
              props.currentSongIndex === index ? "active" : null
            }`}
            key={song.id}
            onClick={() => props.setCurrentSongIndex(index)}
          >
            <span className="icon">
              <img src={MusicIcon} alt="icon" />
            </span>
            <span className="song-name">{song.title_short}</span>
          </div>
        );
      })}
    </div>
  );
};

export default SongsList;
