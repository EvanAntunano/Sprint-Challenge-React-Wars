
import React from "react";

function CharacterCard(props) {
    return (
        <div className="character">
            <div className="character-content">
            <h3>Name: {props.name}</h3>
            <h3>Weight: {props.mass}</h3>
            <h3>Height: {props.height}</h3>
            <h3>BirthYear: {props.birth_year}</h3>
            </div>
        </div>
    )
}

export default CharacterCard;