import { Formik, Form, Field } from "formik";
import React from "react";
import { connect } from "react-redux";
import setName from "../redux/action"


export  function Login(props) {
  const handleSubmit = (val) => {
      props.changeNameLogin(val.name)
    console.log(val.name);
  };
  return (
    <Formik initialValues={{ name: "" }} onSubmit={handleSubmit}>
      {() => (
        <Form className="form-controller">
          <Field type="text" name="name" className=" mt-3 form-control" />

          <button type="submit" className=" mt-3 btn btn-primary">
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default connect(undefined, (dispatch) => {
  return {
    changeNameLogin:function(newName)  {
        dispatch(setName(newName))
    },
  };
})(Login);
