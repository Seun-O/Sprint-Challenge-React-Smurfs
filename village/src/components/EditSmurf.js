import React from "react";
import Form from "./SmurfForm";

export default props => {
  const smurf = props.smurfs.find(
    smurf => `${smurf.id}` === props.match.params.id
  );
  return (
    <div>
      <h1>{smurf.name}</h1>
      <Form smurf={smurf} {...props} action={props.editSmurf} btnTxt="Update" />
    </div>
  );
};
