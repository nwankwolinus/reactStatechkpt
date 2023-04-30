import PropTypes from "prop-types"
import Todo from "./Todo";

const TodoList =  ({
    todos, handleDelete, handleDone
}) => {

    return (
        <div>
            {
                todos.map((task, key) => (
                    <Todo
                        task={task}
                        key={key}
                        handleDelete={handleDelete}
                        handleDone={handleDone}
                    />
                ))
            }
        </div>
    )
};

TodoList.propTypes = {
    todos : PropTypes.object,
    handleDelete : PropTypes.func,
    handleDone : PropTypes.func
}


export default TodoList;