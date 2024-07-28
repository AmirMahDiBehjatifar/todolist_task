const { TodoModel } = require("../model/todo.model");

async function addTodo(name) {
    const result = await TodoModel.create({ todoname: name });
    return result;
}
async function removeTodo(name) {
    const result = await TodoModel.deleteOne({ todoname: name });
    return result
}
async function findTodo(name) {
    const result = await TodoModel.findOne({ todoname: name });
    return result;
}
async function allTodo() {
    const result = await TodoModel.find({},{
        _id:1,
        __v:0
    });
    return result;
}
const TaskController = {
    allTodo,
    addTodo,
    removeTodo,
    findTodo
}
module.exports = TaskController;