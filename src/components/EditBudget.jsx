import React, { useState } from "react";

const EditBudget = (props) => {
  const [value, setValue] = useState(props.budget);
  return (
    <>
      <input
        className="form-control me-3"
        id="name"
        type="number"
        required="required"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => props.handleSaveClick(value)}
      >
        Save
      </button>
    </>
  );
};

export default EditBudget;
