import React from "react";
import CharacterCard from "../components/CharacterCard/CharacterCard";

function CharacterList(props) {
    return (
        <div className="characters">
        {props.characterData.map(character => {
            return (
                <CharacterCard 
                name={character.name}
                weight={character.mass}
                height={character.height}
                birthyear={character.birth_year}
                />
            );
        })}
        </div>
    );
}

export default CharacterList;