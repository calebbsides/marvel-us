import "./App.css";
import { MarvelProvider } from "./context/MarvelContext";
import CharacterSearch from "./components/CharacterSearch";
import Characters from "./components/Characters";

function App() {
    return (
        <div>
            <MarvelProvider>
                <CharacterSearch />
                <Characters />
            </MarvelProvider>
        </div>
    );
}

export default App;
