import React from 'react';
import '../App.css'

const Task = (props) => {
    const {todo, editTodo, editTodoId, onChangeEdit, onSubmitEdit} = props
    const {id, taskName} = props.todo
    return (
        <div className={'task'}>
            {todo.id === editTodoId
                ?
                (
                    <form onSubmit={onSubmitEdit}>
                        <p>
                            <input type="text" id={id} value={editTodo} onChange={onChangeEdit}
                            />
                            <span>
                    <button>Update</button>
                    <button onClick={() => props.clickHandleDelete(id)}>Delete</button>
                </span>
                        </p>
                    </form>
                )
                :
                (<p>{taskName}
                    <span>
                    <button onClick={() => props.toggleEditMode(id)}>Edit</button>
                    <button onClick={() => props.clickHandleDelete(id)}>Delete</button>
                </span>
                </p>)
            }

        </div>
    );
};
export default Task;
