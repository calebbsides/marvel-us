import { useMarvelCharacters } from "../context/MarvelCharacters";
import Router, { useRouter } from "next/router";
import { useEffect } from "react";

export default function Pagination() {
  const { page, setPage } = useMarvelCharacters();

  function movePage(newPage) {
    Router.push(`/characters/page/${newPage}`);
    setPage(newPage);
  }

  return (
    <>
      <div>
        <button onClick={() => movePage(page - 1)} disabled={page === 1}>
          Prev
        </button>
        <span> ... {page} ... </span>
        <button onClick={() => movePage(page + 1)} disabled={page === 79}>
          Next
        </button>
      </div>
    </>
  );
}
