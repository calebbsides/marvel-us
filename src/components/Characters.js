import React, { useContext } from "react";
import styled from "styled-components";
import { MarvelContext } from "../context/MarvelContext";

const CharacterCard = styled.div`
    display: flex;
    flex-direction: column;
    height: 500px;
    align-items: center;
    width: 400px;
    border: 2px solid black;
    background-image: url(http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/portrait_xlarge.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 -30px;
    justify-content: flex-end;
    padding-bottom: 20px;
`;

const Charactertext = styled.div`
    padding: 5px;
    background-color: lightgrey;
    text-align: center;
    border-radius: 10px;
`;

function Characters() {
    const { characters } = useContext(MarvelContext);

    console.log(characters[0]);

    return characters?.length > 0
        ? characters.map((character) => (
              <CharacterCard
                  key={character.id}
                  image={`${character.thumbnail.path}/portrait_incredible.${character.thumbnail.extension}`}>
                  <Charactertext>
                      <h3>{character.name}</h3>
                      <p>{character.description}</p>
                  </Charactertext>
              </CharacterCard>
          ))
        : null;
}

export default Characters;
