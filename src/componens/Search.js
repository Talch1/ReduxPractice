import React from "react";
import { Field, Form, Formik } from "formik";
import { connect } from "react-redux";
import { fetchTasks } from "../redux/reducers/actions/todo.actions";

function Search({ tasks, fetchTasks }) {
  const handleSubmit = (values) => {
    console.log(values);
    fetchTasks(values.search);
  };

  const findNewestTask = () => {
    let newest = null;
    for (let task of tasks) {
      const currentDate = new Date(task.when);
      if (newest == null || newest < currentDate) {
        newest = currentDate;
      }
    }
    return newest && newest.toISOString();
  };
  return (
    <Formik initialValues={{ search: "" }} onSubmit={handleSubmit}>
      <Form>
        <Field name="search" type="search" />
        <div>
          <p>Number of tasks:{tasks.length}</p>
          <p>Newest task :{findNewestTask}</p>
        </div>
      </Form>
    </Formik>
  );
}

export default connect(
  (state) => ({
    tasks: state.todo.tasks,
  }),
  {
    fetchTasks() {},
  }
)(Search);
