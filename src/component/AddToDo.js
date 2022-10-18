import React from 'react';
import '../App.css'
const AddToDo = (props) => {
   const {taskName, setTaskName} = props

    const initialValue = ''


    const onChangeTaskName = (e) => {
        setTaskName(e.target.value)
    }


    const onSubmitTask = (e) => {
        e.preventDefault();
        if (taskName === "") {
            alert("Don't Empty")
            return
        }
        props.addTodo(taskName)
        setTaskName(initialValue)
    }

    return (
        <form id={'form-add'}  onSubmit={onSubmitTask}>
            <input className={'inputAddTodo'} type="text" placeholder={'Add todo'} value={taskName} name={'taskName'} onChange={onChangeTaskName}/>
            <button  className={"button"}>Add Todo</button>
        </form>
    );
};

export default AddToDo;