import React from 'react';
import '../App.css'
import Task from './Task'

const List = (props) => {
    const {getIdToRemove, listTodo , toggleEditMode, editTodo, editTodoId, onChangeEdit, onSubmitEdit} = props

    const clickHandleDelete = (id) => {
        getIdToRemove(id)
    }

    // const clickHandleEdit = (value, id) =>{
    //     const updateTodo = listTodo.map(item =>{
    //         if(item.id === id){
    //             item.taskName = value
    // }

    const renderListTodo = listTodo.map(todo => {
        return (
            <Task todo={todo}

                  toggleEditMode={toggleEditMode}
                  editTodo={editTodo} editTodoId={editTodoId}
                  onChangeEdit={onChangeEdit}
                  onSubmitEdit={onSubmitEdit}

                  clickHandleDelete={clickHandleDelete} key={todo.id} />
        )
    })
    return (
        <div className={'list'}>
            {renderListTodo}
        </div>
    );
};

export default List;