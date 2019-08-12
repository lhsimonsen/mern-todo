const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Todo = require('./models/todoModel');

const app = express();
const PORT = 4000;

const todoRoutes = express.Router();


app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/mern_todos', { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB database connection established successfully')
});

todoRoutes
  .route('/')
  .get((req, res) => {
    Todo.find((err, todos) => {
      if(err) {
        console.log(err);
      } else {
        res.json(todos);
      }
    });
  });

todoRoutes
  .route('/add')
  .post((req, res) => {
    let todo = new Todo(req.body);
    console.log('req.body:', req.body);
    console.log('todo:', todo);
    todo.save()
      .then(todo => {
        res.status(200).json({'todo': `todo added successfully: ${todo}`});
      })
      .catch(err => {
        res.status(400).send('adding new todo failed');
      })
    });

app.use('/todos', todoRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});