import React from "react";
import { connect } from "react-redux";
function HeaderComp(props) {
  return <h1>My name is : {props.userName}</h1>;
}
export default connect((state) => {
  return {
    userName: state.name,
  };
}, null)(HeaderComp);
