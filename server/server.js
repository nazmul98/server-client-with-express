const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
app.use(cors())
app.use(bodyParser.json())
const port = 3000

class Persson{
    constructor (id, name, email, age){
        this.id = id;
        this.name = name;
        this.email = email;
        this.age = age;
    }
}
const personOne = new Persson('1', "Nazmul Hoque", "nazmul@gmail.com", 25);
const personTwo = new Persson('2', "Anayet Ullah", "anayet@gmail.com", 26);
const personThree = new Persson('3', "Towhid Ahmded", "towhid@gmail.com", 22);
const personFour = new Persson('4', "Mukta Hoque", "mukta@gmail.com", 20);
const personFive = new Persson('5', "Jhankar Mahbub", "jhankar@gmail.com", 26);

const users = [personOne, personTwo, personThree, personFour, personFive];
// Get Request
app.get('/', (req, res) => res.send('Hello World!'))

app.get('/users', (req, res) => {
    res.send(users);
})
// Get Data by dynamic id
app.get('/users/:id', (req, res) => {
    let id = req.params.id;
    const user = users.find(user => user.id === id);
    res.send(user);
});

// Post Request
app.post('/addUser', (req, res) => {
    const user = req.body;
    res.send(user);
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))