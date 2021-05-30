const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//mongodb connection
mongoose.set('useCreateIndex', true);
mongoose.connect("mongodb://localhost/productsDb",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
  console.log("Connected to the database");
})
.catch(err =>{
  console.log("Cannot connect to the database",err);
  process.exit();
});


const usersRouter = require('./Routes/users');
const booksRouter = require('./Routes/books');
const loginRouter = require('./Routes/login');






app.use('/users', usersRouter);
app.use('/books', booksRouter);
app.use('/login', loginRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

















/*const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const routeshandler = require('./routes/handler');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config()

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());
app.use('/app', routeshandler);

//Routes
app.use('/routes',require('./routes/user'));

// DB Connection
mongoose.connect("mongodb+srv://neha_goindani:panda.com12@cluster0.l2tsv.mongodb.net/Users_DB?retryWrites=true&w=majority", {useNewUrlParser:true, useUnifiedTopology:true})
.then( () => {
    console.log("DB Connected!");
})
.catch( (err) => {
    console.log(err);
});


const PORT = process.env.PORT||4000; // backend routing port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});*/