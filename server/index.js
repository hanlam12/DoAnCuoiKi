const express = require('express');
const app = express();
const port = 6868;
const morgan=require("morgan");
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


 app.get("/job", cors(), async (req, res)=>{
  const result = await jobCollection.find({}).toArray();
  res.send(result)
 })
 app.get("/company", cors(), async (req, res)=>{
  const result = await companyCollection.find({}).toArray();
  res.send(result)
 })
 const { ObjectId: objId } = require('mongodb');

app.get("/job/:position", cors(), async (req, res) => {
  const position = req.params.position;
  const result = await jobCollection.find({ position: position }).toArray();
  res.send(result);
});

app.get("/job/address/:address", cors(), async (req, res) => {
  const address = req.params.address;
  const result = await jobCollection.find({ address: { $regex: address, $options: "i" } }).toArray();
  res.send(result);
});

app.get("/job/category/:categories", cors(), async (req, res) => {
  const categories = req.params.categories.split(",");
  const result = await jobCollection.find({ category: { $in: categories } }).toArray();
  res.send(result);
});

app.get("/api/company",cors(),async(req,res)=>{
  const result = await companyCollection.find({}).toArray();
  res.send(result)
})
// API lấy thông tin công ty

  app.get('/api/company/:id', async (req, res) => {
    try {
      const companyId = req.params.id;

      // Find company by name
      const company = await companyCollection.findOne({ company_id: companyId });

      // Find jobs by company name
      const jobs = await jobCollection.find({ company: company.company_name }).toArray();

      const companyData = { company, jobs };

      // Send company and job data in response
      res.send(companyData);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  });

