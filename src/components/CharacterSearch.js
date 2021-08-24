import React, { useState, useContext } from "react";
import { MarvelContext } from "../context/MarvelContext";

function CharacterSearch() {
    const { lookupCharacters } = useContext(MarvelContext);
    const [searchInput, setSearchInput] = useState({});

    function submitForm(e) {
        e.preventDefault();

        lookupCharacters(searchInput);
    }

    function updateSearchInput(e) {
        e.preventDefault();

        if (e.target.value) {
            setSearchInput((prevInput) => {
                return {
                    ...prevInput,
                    [e.target.name]: e.target.value,
                };
            });
        } else {
            const removedInput = delete searchInput[e.target.name];
            setSearchInput(removedInput);
        }
    }

    return (
        <form onSubmit={submitForm}>
            <label>Name: </label>
            <input value={searchInput.name ?? ""} name="name" onChange={updateSearchInput} />
        </form>
    );
}

export default CharacterSearch;
