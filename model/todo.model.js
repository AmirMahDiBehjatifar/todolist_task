const { Schema, model } = require("mongoose");

const TodoSchema = new Schema({
    todoname: { type: String },
    date :{type: String}
})

const TodoModel = model("Todolist", TodoSchema);

module.exports = {
    TodoModel
}

