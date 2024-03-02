import React from 'react';
import TodosList from '../TodosList';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { connect } from 'react-redux';
import { TODO_VALID_SCHEMA } from '../../utils/validSchema';
import { addTodo } from '../../store/slices/todoSlice';

const todosInitialValues = { todoText: '' };

function TodoContainer({ todos = [], addNewTodo }) {
  const handleSubmit = (values, actions) => {
    const { todoText } = values;
    const newTodo = {
      userId: 100,
      id: todos[todos.length - 1].id + 1,
      title: todoText,
      completed: false,
    };
    addNewTodo(newTodo);
  };
  return (
    <div>
      <h2>Todos ({todos.length})</h2>
      <Formik
        initialValues={todosInitialValues}
        onSubmit={handleSubmit}
        validationSchema={TODO_VALID_SCHEMA}
      >
        <Form>
          <Field type="text" name="todoText" placeholder="New Todo"></Field>
          <ErrorMessage name="todoText"></ErrorMessage>
          <button type="submit">Add</button>
        </Form>
      </Formik>
      <TodosList />
    </div>
  );
}

const mapStateToProps = ({ todos }) => todos;
const mapDispatchToProps = (dispatch) => ({
  addNewTodo: (todo) => dispatch(addTodo(todo)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
