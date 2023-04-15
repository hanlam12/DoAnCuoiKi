const express = require('express');
const app = express();
const port = 6868;
const morgan=require("morgan")
app.use(morgan("combined"))
const bodyParser=require("body-parser")
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(express.json());
const cors=require("cors");
app.use(cors())
const jwt = require('jsonwebtoken');
const secretKey = 'ThisIsASecretKey';
app.listen(port,()=>{
  console.log(`My Server listening on port ${port}`)
  })
  app.get("/",(req,res)=>{
  res.send("This Web server is processed for MongoDB")
  })
  const { MongoClient, ObjectId } = require('mongodb');
  client = new MongoClient("mongodb://127.0.0.1:27017");
  client.connect();
  database = client.db("WorkZone");
  jobCollection = database.collection("job");
  userCollection = database.collection("user");
  companyCollection = database.collection("company");

  // API Login
  
  app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await userCollection.findOne({ email: email });
  
    if (!user || user.password !== password) {
      return res.status(401).send('Invalid email or password');
    }
  
    const token = jwt.sign({ email: email }, secretKey);
  
    res.json({ token });
  });


  
