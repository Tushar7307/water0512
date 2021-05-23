const mongoose = require('mongoose');
const express = require('express');
const app = express();
const List = require('./models/list');
const Task = require('./models/task');
const User = require('./models/user');
const Auth = require('./models/auth');
const lists = require('./routes/lists');
const tasks = require('./routes/tasks');
const users = require('./routes/users');
const auths = require('./routes/auths');

const cors = require('cors');



mongoose.connect('mongodb://localhost/demo',{ useNewUrlParser: true,useUnifiedTopology: true })
.then(()=>console.log('mongodb is connected to server'))
.catch(err=>console.log('mongodb could not connect to server'))

app.use(cors());

app.use(express.json());

app.use('/api/lists',lists);
app.use('/api/tasks',tasks);
app.use('/api/users',users);
app.use('/api/auths',auths);


app.listen(3000, (req,res)=>{
    console.log('listening on port 3000....');
});

