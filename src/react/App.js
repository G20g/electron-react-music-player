import React, { useState, useEffect } from "react";
import "./App.css";
import SongsList from "./containers/SongList";
import MusicPlayer from "./containers/MusicPlayer";
import axios from "axios";

function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://deezerdevs-deezer.p.rapidapi.com/search",
      params: { q: "eminem" },
      headers: {
        "x-rapidapi-key": "fa762e1dd8mshd2f6c1bca4f4d0dp1e2f8ejsn0ba37c0e97d7",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setSongs(response.data.data.slice(0, 9));
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  console.log(songs);
  return (
    <div className="row">
      {songs.length ? (
        <>
          {" "}
          <div className="list-container">
            <SongsList
              songs={songs}
              setCurrentSongIndex={setCurrentSongIndex}
              currentSongIndex={currentSongIndex}
            />
          </div>
          <div className="player">
            <MusicPlayer
              songs={songs}
              setCurrentSongIndex={setCurrentSongIndex}
              currentSongIndex={currentSongIndex}
            />
          </div>
        </>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}

export default App;
