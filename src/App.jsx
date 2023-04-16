import { useContext, useState } from "react";
import Card from "./components/Card";
import Search from "./components/Search";
import { APIContext } from "./context/context";
import FilterTag from "./components/FilterTag";
import Trajet from "./components/Trajet";

function App() {
  const [show, setShow] = useState(true);
  const [state, dispatch] = useContext(APIContext);

  return (
    <div className="main">
      {show ? (
        <aside>
          <div className="aside-title">
            <h3>Filtre de recherche</h3>
            <button onClick={() => setShow(!show)}>X</button>
          </div>
          <hr />
          <Search />
          <FilterTag />
          <Trajet />
          <button onClick={() => dispatch({ type: "RESET" })}>Reset filtre</button>
        </aside>
      ) : (
        <button style={{ background: "#c9f6ff", height: "60px" }} onClick={() => setShow(!show)}>
          afficher
          <br />
          filtre
        </button>
      )}
      <div className="container invisible-scrollbar scroller">
        {state.data.map(({ name, map, description, tag, trajet }, i) => {
          if (
            state.filterTrajet >= trajet &&
            state.filterTag.every((e) => tag.includes(e.value)) &&
            name.toLowerCase().includes(state.search.toLowerCase())
          )
            return <Card key={i} name={name} map={map} trajet={trajet} description={description} tag={tag} />;
        })}
      </div>
    </div>
  );
}

export default App;
