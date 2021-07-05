import React, { cloneElement } from "react";

export default (props) => {
  return (
    <div>
      {props.children.map((child, i) => {
        return cloneElement(child, { ...props, key: i });
      })}

      {/* No caso a gente não teria acesso ao filho, 'familia membro' */}
    </div>
  );
};
