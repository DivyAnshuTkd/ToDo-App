export function CreateTodo()        // Assume this is a function which return HTML(Actually it is XML but just for understanding)
{
    return <div>
        <input style = {{
            padding: 10,
            margin: 10
        }}type="text" placeholder="title"></input> <br/>
        
        <input style = {{
            padding: 10,
            margin: 10
        }} type="text" placeholder="desctiption"></input> <br/>

        <button style={{
            padding: 10,
            margin: 10
        }}>Add a todo</button>
    </div>
}