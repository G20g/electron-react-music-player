import React, { useState, useEffect, useRef } from "react";
import MusicIcon from "../../../assets/images/headphones.png";
import PlayIcon from "../../../assets/images/play.png";
import PauseIcon from "../../../assets/images/pause.png";
import NextIcon from "../../../assets/images/next.png";
import PreviousIcon from "../../../assets/images/previous.png";
import FastIcon from "../../../assets/images/fast.png";
import SlowIcon from "../../../assets/images/slow.png";

const MusicPlayer = (props) => {
  const ref = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    props.currentSongIndex > 0 ? setIsPlaying(true) : setIsPlaying(false);
  }, [props.currentSongIndex]);

  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  });

  const next = () => {
    props.setCurrentSongIndex(() => {
      let temp = props.currentSongIndex;
      temp++;

      if (temp > props.songs.length - 1) {
        temp = 0;
      }

      return temp;
    });
  };

  const prev = () => {
    props.setCurrentSongIndex(() => {
      let temp = props.currentSongIndex;
      temp--;

      if (temp < 0) {
        temp = props.songs.length - 1;
      }

      return temp;
    });
  };
  const fast = () => {
    if (isPlaying) {
      ref.current.playbackRate += 0.5;
    }
  };
  const slow = () => {
    if (isPlaying) {
      ref.current.playbackRate -= 0.5;
    }
  };

  return (
    <div className="text-center">
      <audio src={props.songs[props.currentSongIndex].preview} ref={ref} />
      <div className="player-image">
        <img src={props.songs[props.currentSongIndex].album.cover} alt="icon" />
      </div>
      <div className="song-name-player">
        <marquee>{props.songs[props.currentSongIndex].title_short}</marquee>
      </div>

      <button className="control-btn" onClick={() => slow()}>
        <img src={SlowIcon} alt="ioc" />
      </button>
      <button className="control-btn" onClick={() => prev()}>
        <img src={PreviousIcon} alt="ioc" />
      </button>
      <button className="control-btn" onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? (
          <img src={PauseIcon} alt="ioc" />
        ) : (
          <img src={PlayIcon} alt="ioc" />
        )}
      </button>
      <button className="control-btn" onClick={() => next()}>
        <img src={NextIcon} alt="ioc" />
      </button>
      <button className="control-btn" onClick={() => fast()}>
        <img src={FastIcon} alt="ioc" />
      </button>
    </div>
  );
};

export default MusicPlayer;
