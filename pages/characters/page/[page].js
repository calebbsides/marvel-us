import { useEffect } from "react";
import { useMarvelCharacters } from "../../../context/MarvelCharacters";
import { CharacterList } from "../../../components/CharacterList";
import Pagination from "../../../components/Pagination";

export default function CharacterPage({ characters }) {
  const { setCharacters } = useMarvelCharacters();

  useEffect(() => {
    setCharacters(characters);
  }, [characters]);

  return (
    <>
      <Pagination />
      <CharacterList />
    </>
  );
}

export const getStaticProps = async (context) => {
  const limit = 20;

  const url =
    process.env.HOST +
    `/api/characters?limit=${limit}&offset=${
      (context.params.page - 1) * limit
    }`;
  const res = await fetch(url);
  const characters = await res.json();

  return {
    props: {
      characters: characters.data.results,
    },
  };
};

export const getStaticPaths = async () => {
  const limit = 20;

  const url =
    process.env.HOST + `/api/characters?limit=${limit}&offset=${0 * limit}`;
  const res = await fetch(url);
  const characters = await res.json();

  const numPages = Math.ceil(characters.data.total / limit);
  const paths = [];
  for (let i = 0; i < numPages; i++) {
    paths.push({ params: { page: i.toString() } });
  }

  return {
    paths,
    fallback: false,
  };
};
