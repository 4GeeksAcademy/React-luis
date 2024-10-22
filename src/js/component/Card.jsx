import React from "react";
import PropTypes from "prop-types";

const Card = ({srcImage, name, description}) => {
    return(<div className="card" >
        <img src={srcImage} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>)
}

Card.prototype = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string
}

export default Card;