import { TodoDiv } from "./styles/Todo.styled";
const TodoDivContainer = ({ item, deleteTodo, completed }) => {
  return (
    <TodoDiv iscomplete={item.complete} isactive={item.active}>
      <span onClick={() => completed(item.id)}>
        {item.complete && <img src="/images/icon-check.svg" alt="" />}
      </span>
      <p>
        {item.value}
        <span onClick={() => deleteTodo(item.id)}>
          <img src="/images/icon-cross.svg" alt="Delete to-do" />
        </span>
      </p>
    </TodoDiv>
  );
};

export default TodoDivContainer;
