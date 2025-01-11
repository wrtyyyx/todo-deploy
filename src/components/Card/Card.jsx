import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Card = ({ done, index, text, toggleDone, deleteTodo }) => {
    const btnClassnames = classNames("btn btn-sm border", {
        "btn-secondary": done,
        "btn-primary": !done,
    });

    return (
        <div className="col">
            <div className={`card ${done ? "bg-secondary text-white" : ""} shadow-sm`}>
                <div className="card-body">
                    <h5 className="card-title">
                        Task №{index + 1} | Completed: {done ? "✅" : "❌"}
                    </h5>
                    <hr />
                    <p className="card-text">{text}</p>
                </div>

                <div className="d-grid gap-2 d-md-flex justify-content-md-end p-2">
                    <button onClick={() => toggleDone(index)} className={btnClassnames}>
                        {done ? "Mark as Undone" : "Mark as Done"}
                    </button>
                    <button onClick={() => deleteTodo(index)} className="btn btn-danger">
                        Delete Task
                    </button>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    done: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    toggleDone: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
};

export default Card;
