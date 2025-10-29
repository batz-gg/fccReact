import React from 'react';
import "./moodBoard.css";

export function MoodBoardItem({color, image, description}) {
  return <div className = "mood-board-item" style={{backgroundColor: color}}>
    <img className="mood-board-image" src={image} />
    <h3 className="mood-board-text">{description}</h3>
  </div>
}

export function MoodBoard(){
  const datas = [
    {
      id: 1,
      color: "rgb(52, 165, 83)",
      image: "https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg",
      description: "Caribbean"
    },
    {
      id: 2,
      color: "rgb(141, 72, 171)",
      image: "https://cdn.freecodecamp.org/curriculum/labs/shore.jpg",
      description: "Gawadar Beach"
    },
    {
      id: 3,
      color: "rgb(58, 153, 216)",
      image: "https://cdn.freecodecamp.org/curriculum/labs/grass.jpg",
      description: "Cape Town"
    },
    {
      id: 4,
      color: "rgb(189, 64, 126)",
      image: "https://cdn.freecodecamp.org/curriculum/labs/ship.jpg",
      description: "Seuez Canal"
    },
    {
      id: 5,
      color: "rgb(229, 77, 66)",
      image: "https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg",
      description: "Santorini"
    },
    {
      id: 6,
      color: "rgb(149, 165, 166)",
      image: "https://cdn.freecodecamp.org/curriculum/labs/pigeon.jpg",
      description: "Istanbul"
    },
  ]
  return (
    <div>
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      <div className="mood-board">
        {datas.map((data) => (
          <MoodBoardItem
            key={data.id}
            color={data.color}
            image={data.image}
            description={data.description}
          />
        ))}
      </div>
    </div>
  );
}