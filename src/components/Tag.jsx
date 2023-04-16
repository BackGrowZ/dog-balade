import { Fragment, useState } from "react";

const Tag = ({ tag }) => {
  const [show, setShow] = useState(false);
  return (
    <Fragment>
      <button onClick={() => setShow(!show)}>{show ? "Masquer les tag" : "Afficher les tag"}</button>
      {show && (
        <Fragment>
          <p>tag:</p>
          <ul>
            {tag.map((e, i) => (
              <li key={i}>{e}</li>
            ))}
          </ul>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Tag;
