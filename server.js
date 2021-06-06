const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let userGoal = 'Do the dishes!!';
let goalArray = [];

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <link rel="stylesheet" href="styles.css">
      </head>
      <body>
        <section>
          <h2>My To-Do List</h2>
          <h3>${userGoal}</h3>
        </section>
        <form action="/store-goal" method="POST">
          <div class="form-control">
            <label>To-Do:</label>
            <input type="text" name="goal">
          </div>
          <button>Set Task</button>
        </form>
      </body>
    </html>
  `);
});

app.post('/store-goal', (req, res) => {
  const enteredGoal = req.body.goal;
  console.log(enteredGoal);
  userGoal = enteredGoal;
  goalArray.push(enteredGoal);
  res.redirect('/');
});

app.listen(80);
