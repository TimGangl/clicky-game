import React from "react";
import "./cardcontainer.css";
import images from "../../assets/images/simpsons.json";
function CardContainer() {

  return (
    <div className="container-fluid">
      {
        images.map((char) => {
          return (
            <img key={char.id} className="img img-thumbnails" src={require(char.image + ".jpg")} alt={char.alt}></img>
          )
        })

      }
    </div>
  )
};

export default CardContainer;