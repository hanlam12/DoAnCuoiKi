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

  app.get("/job-application/:userID", cors(), async (req, res) => {
    const userId = req.params.userID;
    const result = await userCollection.find({ userID: userId }).toArray();
    res.send(result[0]);
  });

  app.put("/job-application/:userID", cors(), async (req, res) =>{
    const userID = req.params.userID;
    const image = req.body.image;
    const title = req.body.cv[0].title;
    const YOB = req.body.cv[0].YOB;
    const career = req.body.cv[0].career;
    const experience = req.body.cv[0].experience;
    const qualification = req.body.cv[0].qualification;
    const english_level = req.body.cv[0].english_level;
    const work_location = req.body.cv[0].work_location;
    const working_form = req.body.cv[0].working_form;
    const desired_salary = req.body.cv[0].desired_salary;
    const CV_chinh = req.body.cv[0].CV_chinh;
    await userCollection.updateOne(
      { userID: userID },
      { $set: {
        "image": image,
        "cv.0.title": title,
        "cv.0.YOB": YOB,
        "cv.0.career": career,
        "cv.0.experience": experience,
        "cv.0.qualification": qualification,
        "cv.0.english_level": english_level,
        "cv.0.work_location": work_location,
        "cv.0.working_form": working_form,
        "cv.0.desired_salary": desired_salary,
        "cv.0.CV_chinh": CV_chinh
      }}
    );
    const updatedUser = await userCollection.findOne({ userID: userID });
    res.send(updatedUser);
  });

  app.get('/job-decription/:jobJD', cors(), async (req, res) => {
    try {
        const jobJD = req.params.jobJD;
        const job = await jobCollection.findOne({ jobJD: jobJD });
        const company = await companyCollection.find({ company_id: job.company_id }).toArray();
        const jobData = { job, company };
      res.send(jobData);

    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  });



