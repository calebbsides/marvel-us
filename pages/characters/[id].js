import Link from "next/link";

export default function Character({ character }) {
  return (
    <>
      <div>
        <img
          src={`${character.thumbnail.path}/portrait_incredible.${character.thumbnail.extension}`}
        />
        <h2>{character.name}</h2>
        <p>{character.description}</p>
      </div>
      <Link href="/">Go Back</Link>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const url = process.env.HOST + "/api/characters/" + context.params.id;
  const res = await fetch(url);
  const character = await res.json();

  return {
    props: {
      character: character.data.results[0],
    },
  };
};
