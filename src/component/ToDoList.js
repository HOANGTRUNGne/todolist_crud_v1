import React, {useState} from 'react';
import '../App.css'
import Title from './Title'
import AddToDo from './AddToDo'
import List from './List'


const ToDoList = () => {

    const [listTodo, setListTodo] = useState([])
    const [taskName, setTaskName] = useState()

    const [editTodo, setEditTodo] = useState('')
    const [editTodoId, setEditTodoId] = useState(null)
    

    const addTodo = (taskName) => {
        const data = [...listTodo, {id: Date.now(), taskName: taskName}]
        setListTodo(data);
    }

    const getIdToRemove = (id) => {
        const todoDelete = listTodo.filter((todo) => {
            return todo.id !== id
        })
        setListTodo(todoDelete)
    }

    const toggleEditMode = (id) =>{
        const todo = [...listTodo].find((todo) => {
            return todo.id === id
        } )
        setEditTodoId(id)
        setEditTodo(todo.taskName)
    }

    const onSubmitEdit = (e) => {
        e.preventDefault();
        const updateTodo = listTodo.map(item => {
            if (item.id === editTodoId) {
                return {...item, taskName: editTodo,}
            }else
                return item;
        });
        setListTodo(updateTodo);
        setEditTodoId('')
    }


    const onChangeEdit = (e) => {
        setEditTodo(e.target.value)
    }

    return (
        <div className={'container'}>
            <Title/>

            <AddToDo addTodo={addTodo} taskName={taskName} setTaskName={setTaskName}/>

            <List listTodo={listTodo}
                  getIdToRemove={getIdToRemove}

                  toggleEditMode={toggleEditMode}
                  onSubmitEdit={onSubmitEdit}
                  editTodo={editTodo}
                  editTodoId={editTodoId}
                  onChangeEdit={onChangeEdit}
            />
        </div>
    );
};

export default ToDoList;