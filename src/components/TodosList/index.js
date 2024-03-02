import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTodos } from '../../store/slices/todoSlice';

function TodosList({ todos, isFetching, error, loadTodos }) {
  useEffect(() => {
    loadTodos();
  }, []);

  if (isFetching) return <div>LOADING...</div>;
  if (error) return <div>ERROR</div>;
  console.log(todos); //TODO
  return (
    <ul>
      {todos.map((t) => (
        <li key={t.id}>{JSON.stringify(t)}</li>
      ))}
    </ul>
  );
}

const mapStateToProps = ({ todos }) => todos;
const mapDispatchToProps = (dispatch) => ({
  loadTodos: () => dispatch(getTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
