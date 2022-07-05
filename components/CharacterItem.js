import Link from "next/link";
import styles from "../styles/Characters.module.css";

export const CharacterItem = ({ character }) => {
  return (
    <Link href={`/characters/${character.id}`}>
      <div className={styles.card}>
        <img
          src={`${character.thumbnail.path}/portrait_incredible.${character.thumbnail.extension}`}
        />
        <h3>{character.name} &rarr;</h3>
      </div>
    </Link>
  );
};
