import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { nanoid } from "nanoid";

const AddExpenseForm = () => {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const { dispatch } = useContext(AppContext);

  const onSubmit = (event) => {
    event.preventDefault();

    const expense = {
      id: nanoid(),
      name,
      cost: parseInt(cost),
    };
    dispatch({
      type: "addExpense",
      payload: expense,
    });
    setName("");
    setCost("");
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              Name
            </span>
            <input
              type="text"
              class="form-control"
              required="required"
              aria-describedby="basic-addon1"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              Cost
            </span>
            <input
              type="number"
              class="form-control"
              required="required"
              aria-describedby="basic-addon1"
              placeholder="$"
              value={cost}
              onChange={(event) => setCost(event.target.value)}
            />
          </div>
        
      </div>
        <button type="submit" class="btn btn-primary">
          Save
        </button>
    </form>
  );
};

export default AddExpenseForm;
