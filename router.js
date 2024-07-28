const { Router } = require("express");
const { TodoModel } = require("./model/todo.model");
const TaskController = require("./controller/task.controller");
const router = Router();


router.get("/", async (req, res) => {
    const todos = await TaskController.allTodo();
    res.render("main", {
        todos,
        message: '',
        error: false
    });
});

router.post("/add", async (req, res) => {
    const newTodo = req.body.add;
    let message = '';
    let error = false;

    if (newTodo.length <= 4) {
        message = "TodoName can't be empty. At least 5 characters required.";
        error = true;
    } else {
        await TaskController.addTodo(newTodo);
        message = "Todo added successfully!";
    }
    const todos = await TaskController.allTodo();
    res.render('main', {
        todos,
        message,
        error
    });
});


router.post("/delete", async (req, res) => {
    const name = req.query.id;
    let message = '';
    let error = false;
    const delete1 = await TaskController.removeTodo(name);
    console.log(delete1);
    const todos = await TaskController.allTodo();
    res.render("main", {
        todos,
        message,
        error
    });
});



module.exports = router