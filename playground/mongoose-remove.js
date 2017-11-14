const { Todo } = require("./../server/models/todo");
const { mongoose } = require("./../server/db/mongoose");
const { ObjectID } = require("mongodb");
var id = "5a0a571c9ed6210176fa1e30";

// Todo.remove({}).then(res => {
//     console.log(res);
// });

Todo.findOneAndRemove('5a0a571c9ed6210176fa1e30').then(todo => {
    console.log(todo);
});