import TodoItem from './TodoItem'; 


function TodoList({todos, toggleComplete, removeTodo, editTodo, updateTodo, closeEditView}){

    return(
        <>
            {todos.map(todo => 
                <TodoItem key={todo.id}     
                    todo={todo} 
                    toggleComplete={toggleComplete}
                    removeTodo = {removeTodo} 
                    editTodo={editTodo}
                    updateTodo={updateTodo}
                    closeEditView={closeEditView}
                />         
        )}
        </>
        
    )

}


export default TodoList;