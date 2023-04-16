import { useContext } from "react";
import { APIContext } from "../context/context";

const Trajet = () => {
  const [state, dispatch] = useContext(APIContext);

  const handleChange = (e) => {
    dispatch({ type: "TRAJET", payload: e.target.value });
  };

  return (
    <div>
      <p>Temps de trajet</p>
      <input type="range" id="cowbell" name="cowbell" min="0" max="110" value={state.filterTrajet} step="10" onChange={handleChange} />
      <p>{state.filterTrajet < 60 ? `${state.filterTrajet}  minutes` : ` 1 heure ${state.filterTrajet - 60} minutes`}</p>
    </div>
  );
};

export default Trajet;
