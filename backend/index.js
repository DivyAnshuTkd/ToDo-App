const express = require("express");
const { createTodo } = require("./types");
const { todo } = require("./db");
const app = express();

app.use(express.json());

app.post("/todo", async function(req, res)
{
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success)
    {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    // put it in monogodb

    await todo.create({                 // .create({...}) → Inserts a new document (record) into that collection.
        title: createPayload.title,     // The title field in MongoDB will get the value from createPayload.title.
        description: createPayload.description,       // description: createPayload.description → The description field in MongoDB will get the value from createPayload.description.
        complete: false                 // false initially as task is not done initially
    })                      // await → Since .create() returns a Promise, await waits until MongoDB confirms the insertion.

    res.json({
        msg: "To do created"
    })
})

app.get("/todos", async function(req, res)
{
    const todos = await todo.find({});          // you have to definitely wait while you find something from database
    
    res.json({
        todos        // return the todo data
    });
});    

app.put("/completed", async function(req, res)
{
    const updatePayload = req.body;
    const parsePayload = createTodo.safeParse(updatePayload);

    if(!parsePayload.success)
    {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        });
        return;
    }

    await todo.update({
        _id: req.body.id            // It looks for a document where the _id field matches the id sent in the request body.
    }, {
        completed: true
    });
});
