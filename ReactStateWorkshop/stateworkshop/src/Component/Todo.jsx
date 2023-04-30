import PropTypes from "prop-types"
import "./Todo.css"



const Todo = ({
    task : {description, id, done},
    handleDelete,
    handleDone
}) => {

    return (
        <div className="row">
            <div className="col-md-8">
                <span className={ done ? "done": "unDone"}>{description}</span>
            </div>

            <div className="col-md-1 justify-content-center">
                <img
                    src={require('../assets/delete-icon.png')}
                    alt="Delete"
                    style={{ width : 30}}
                    onClick={ () => handleDelete(id)}
                />

            </div>

            <div className="col-md-1 justify-content-center">
                <img
                    src={require('../assets/check-mark-icon.png')}
                    alt="Done"
                    style={{ width : 30}}
                    onClick={ () => handleDone(id)}
                />

            </div>


        </div>
    )
};

Todo.propTypes = {
    description : PropTypes.string,
    done : PropTypes.bool
}

export default Todo;