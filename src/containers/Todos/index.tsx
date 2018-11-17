import * as React from "react";
import Todo from "../../models/Todo";
import { connect } from "react-redux";
import { State } from "../../reducers";
import { getTodos } from "../../selectors/todos";
import { toggleTodo } from "../../actions/todo";

interface Props {
  todos: Todo[];
  onTodoClicked: (todoId: number) => void;
}

class AddTodoForm extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { todos, onTodoClicked } = this.props;
    return (
      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            onClick={() => onTodoClicked(todo.id)}
            style={{
              textDecoration: `${todo.done ? "line-through" : ""}`,
              cursor: "pointer"
            }}
          >
            {todo.name}
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state: State) => ({
  todos: getTodos(state)
});

const mapDispatchToProps = {
  onTodoClicked: toggleTodo
};

export default connect<any, any, any>(
  mapStateToProps,
  mapDispatchToProps
)(AddTodoForm);
