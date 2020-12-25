import React from "react";

export default (props) => {
  return (
    <>
      <span>{props.section.text}</span>
      <pre>{JSON.stringify(props)}</pre>
    </>
  );
};
