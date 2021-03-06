var express = require("express");
var bodyParser = require("body-parser");
var { mongoose } = require("./db/mongoose");
var { Todo } = require("./models/todo");
var { User } = require("./models/user");
var { ObjectID } = require("mongodb");

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// app.post("/todos", (req, res) => {
//     var todo = new Todo({
//         text: req.body.text
//     });
//     todo.save().then(
//         doc => {
//             res.send(doc);
//         },
//         err => {
//             res.status(400).send(err);
//         }
//     );
// });

// app.get("/todos", (req, res) => {
//     Todo.find()
//         .then(
//             todos => {
//                 re.send({
//                     todos
//                 });
//             },
//             err => {
//                 res.status(400).send(e);
//             }
//         );
// });

app.get("/todos/:id", (req, res) => {
    var id = req.params.id;
    // valid id using is valid
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    Todo.findById(id)
        .then(todo => {
            if (!todo) {
                return res.status(404).send();
            }
            res.send({
                todo
            });
        })
        .catch(e => {
            res.status(400).send();
        });
});

app.delete("/todos/:id", (req, res) => {
    var id = req.param.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    Todo.findByIdAndRemove(id).then(todo => {
        if (!todo) {
            return res.status(404).send();
        }
        res.send(todo);
    }).catch(e => {
        res.status(400).send();
    });
});

app.listen(port, () => {
    console.log(`Start port: ${port}`);
});

module.exports = { app };