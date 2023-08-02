const Todo = (props)=>{
    const { todos,title,deletetodos} = props;

    const Handeldelete = (id) =>{
      deletetodos(id)
    }

    return(
        <div className='todos-container'>
            <div className="title">
                {props.title}
            </div>
          {todos.map(todo => {
            return(
              <div  key={todo.id} >
                <li className='todos-child'> 
                  {todo.title} 
                   <span onClick={() => Handeldelete(todo.id)}>X</span>
                </li>
              </div>
            )
          })}
         <hr/>
        </div>
    )
}
export default Todo;
