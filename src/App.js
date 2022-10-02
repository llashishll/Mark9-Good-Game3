import "./styles.css";
import React, { useState } from "react";

const gameLibrary = {
  OpenWorld: [
    {
      name: "Grand Theft Auto 5",
      metascore: "96",
    },
    {
      name: "Mafia 3",
      metascore: "68",
    },
    {
      name: "Assassin's Creed Valhalla",
      metascore: "84",
    },
    {
      name: "Days Gone",
      metascore: "76",
    },
    {
      name: "Ghost of Tsuhima",
      metascore: "83",
    },
  ],

  FPS: [
    {
      name: "Call of Duty : Vanguard",
      metascore: "73",
    },

    {
      name: "Battlefield 2042",
      metascore: "68",
    },
    {
      name: "Tom Clancy's Rainbow Six Siege",
      metascore: "73",
    },
    {
      name: "Apex Legends",
      metascore: "88",
    },
    {
      name: "Halo Infinite",
      metascore: "87",
    },
  ],
  RPG: [
    {
      name: "The Witcher:Wild Hunt",
      metascore: "93",
    },
    {
      name: "Elden Ring",
      metascore: "94",
    },
    {
      name: "Fallout 4",
      metascore: " 84",
    },
    {
      name: "CyberPunk",
      metascore: "86",
    },
    {
      name: "The Elder Scroll V:Skyrim",
      metascore: "94",
    },
  ],
};

export default function App() {
  const [selectedGenre, setGenre] = useState("FPS");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> GoodGames </h1>
      <p style={{ fontSize: "larger" }}>
        This website provides with a list of video games from different genre
        and their Metascore out of 100.
      </p>
      <div>
        {Object.keys(gameLibrary).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem",
              textAlign: "center",
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div>
        <ul>
          {gameLibrary[selectedGenre].map((game) => (
            <li
              key={game.name}
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "auto",
                textAlign: "center",
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                borderRadius: "0.5rem",
              }}
            >
              <div style={{ fontSize: "larger" }}> {game.name} </div>
              <div style={{ fontSize: "smaller" }}>
                Metascore:{game.metascore}{" "}
              </div>
              <div>{game.image}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
