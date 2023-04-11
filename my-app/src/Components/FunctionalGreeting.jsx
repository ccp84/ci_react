import React from "react";

const FunctionalGreeting = (props) => {
  return (
    <h1>
      Hello {props.name} {props.greeting}
    </h1>
  );
};

export default FunctionalGreeting;
