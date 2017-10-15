import React from "react";

const EditExpensePage = props => {
  console.log("props", props);
  return <div>EditExpensePage page with id: {props.match.params.id}</div>;
};

export default EditExpensePage;
