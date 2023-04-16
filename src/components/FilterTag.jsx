import { useContext } from "react";
import { APIContext } from "../context/context";
import Select from "react-select";

const options = [
  { value: "parc", label: "Parc" },
  { value: "foret", label: "Foret" },
  { value: "eau", label: "Eau" },
  { value: "pique-nique", label: "Pique-Nique" },
];

const FilterTag = () => {
  const [{ filterTag }, dispatch] = useContext(APIContext);

  const handleChange = (el) => {
    dispatch({ type: "FILTER", payload: el });
  };

  return (
    <div>
      <p>Filter par tag</p>
      <div style={{ color: "#242424" }}>
        <Select options={options} isMulti isSearchable value={filterTag} onChange={handleChange} />
      </div>
    </div>
  );
};

export default FilterTag;
