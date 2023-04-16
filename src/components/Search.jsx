import { useContext } from "react";
import { APIContext } from "../context/context";

const Search = () => {
  const [{ search }, dispatch] = useContext(APIContext);

  const handleChange = (e) => {
    dispatch({ type: "SEARCH", payload: e.target.value });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label htmlFor="search">Recherche</label>
      <input id="search" type="text" value={search} onChange={handleChange} />
    </div>
  );
};

export default Search;
