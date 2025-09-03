/*  todos = [
    {
    title: "Go to gym",
    description: "Go to gym",
    }
    ]
*/

export function Todos({todos})       // This is a React component named Todos.
                                     // It takes a list of todos (array) and shows them on the screen.
{
    // Everything inside will be shown on the webpage.
    return <div>                     
        {todos.map(function(todo)            // todos.map() goes through each todo item in the list.
        {
            return <div>                  
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
            </div>         
        })}
    </div>
}



