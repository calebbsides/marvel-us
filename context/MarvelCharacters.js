import { useContext, createContext, useReducer } from "react";
import MarvelCharacterReducer from "./MarvelCharacterReducer";

const initialState = {
  characters: [],
  page: 1,
};

const MarvelCharacterContext = createContext();

export function useMarvelCharacters() {
  return useContext(MarvelCharacterContext);
}

export function MarvelCharacterProvider({ children }) {
  const [state, dispatch] = useReducer(MarvelCharacterReducer, initialState);

  function setCharacters(characters) {
    dispatch({
      type: "SET_CHARACTERS",
      payload: characters,
    });
  }

  function setPage(page) {
    dispatch({
      type: "SET_PAGE",
      payload: page,
    });
  }

  return (
    <MarvelCharacterContext.Provider
      value={{
        characters: state.characters,
        page: state.page,
        setCharacters,
        setPage,
      }}
    >
      {children}
    </MarvelCharacterContext.Provider>
  );
}
