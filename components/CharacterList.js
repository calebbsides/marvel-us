import React from "react";
import { useMarvelCharacters } from "../context/MarvelCharacters";
import { CharacterItem } from "./CharacterItem";
import styles from "../styles/Characters.module.css";

export const CharacterList = () => {
  const { characters } = useMarvelCharacters();

  return (
    <div className={styles.grid}>
      {characters.map((character) => (
        <CharacterItem key={character.id} character={character} />
      ))}
    </div>
  );
};
