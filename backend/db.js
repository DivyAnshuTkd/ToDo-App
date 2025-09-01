/*
    Todo
    {
        title: string;
        description: string;
        completed: boolean
    }
*/
const mongoose = require("mongoose");
// mongodb url handy
// mongodb+srv://ToDoApp_123:ToDoApp_123@cluster1.bwassnv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1

mongoose.connect("mongodb+srv://ToDoApp_123:ToDoApp_123@cluster1.bwassnv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todo', todoSchema);

module.exports = {
    todo: todo
}