import React from "react";
import Smurf from "./Smurf";

export default props => {
  const smurf = props.smurfs.find(
    smurf => `${smurf.id}` === props.match.params.id
  );

  const deleteSmurf = () => {
    props.deleteSmurf(smurf.id);
    props.history.push("/");
  };
  return (
    <div>
      <Smurf
        name={smurf.name}
        id={smurf.id}
        age={smurf.age}
        height={smurf.height}
        key={smurf.id}
      />
      <div>
        <button onClick={deleteSmurf}>Delete</button>
      </div>
    </div>
  );
};
