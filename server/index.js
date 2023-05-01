

const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const port = 6868;
const secretKey = 'ThisIsASecretKey';
const morgan=require("morgan")
app.use(morgan("combined"))
const bodyParser=require("body-parser")
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: false, limit: '10mb' }));
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
  userCollection = database.collection("Users");
  companyCollection = database.collection("company");

  const { ObjectId: objId } = require('mongodb');
  app.get("/api/job-application/:userID", cors(), async (req, res) => {
    const userId = req.params.userID;
    const result = await userCollection.find({ userID: userId }).toArray();
    res.send(result[0]);
  });

  app.put("/api/job-application/:userID", cors(), async (req, res) =>{
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

//   app.post("/job-application/:userID", cors(), async(req, res) => {
//     const userID = req.params.userID;
//     const cv = req.body;
//     const filter = { _id: ObjectId(userID) };
//     const update = { $push: { cv: cv } };
//     await userCollection.updateOne(filter, update);
//     res.send(cv);
// });

// app.post("/job-application/:userID/cv", cors(), (req, res) => {
//   const userID = req.params.userID;
//   const obj;
//   const cvArray = obj.cv
// cvarray.push(newcv)
// await userCollection.updateOne(filter,
//   {...obj
//    cv: cvArray
// });
//
//   const newCv = req.body;
//   const CvToUpdate = userCollection.find((cv) => cv.userID === userID);
//   if (CvToUpdate) {
//     CvToUpdate.cv.push(newCv);
//     res.send(userCollection);
//   } else {
//     res.status(404).send("Cv not found.");
//   }
// });

  app.get('/api/job-decription/:jobJD', cors(), async (req, res) => {
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
//api lấy tên
app.get('/api/applycv/jobJD', cors(), async (req, res) => {
  try {
    const jobJD = req.params.jobJD;
    const job = await jobCollection.findOne({ jobJD: jobJD });

    if (!job) {
      return res.status(404).send('Job not found');
    }

    const jobName = job.job_name; // Lấy giá trị của trường job_name
    res.send(jobName); // Trả về giá trị của job_name
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});



  app.get("/api/job",cors(),async(req,res)=>{

    const result = await jobCollection.find({}).toArray();
    res.send(result)
  })

  // job nào được lưu gắn liền với user đó
app.get("/api/savejob/:userID",cors(),async(req,res)=>{
  try {
    const userID = req.params.userID;
    const user = await userCollection.findOne({ userID: userID});
    const job = await jobCollection.find({ jobJD: { $in: user.JobJD } }).toArray();
    const saveJob ={user,job};
  res.send(saveJob);
} catch (err) {
  console.error(err);
  res.status(500).send('Server error');
}
})
//lấy jobJD với user
app.get("/api/getsavejob/:userID", cors(), async(req, res) => {
  try {
    const userID = req.params.userID;
    const user = await userCollection.findOne({ userID: userID });
    const savedJobs = user.JobJD;
    res.send(savedJobs);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

//lưu job
app.put('/api/savejob', cors(), async (req, res) => {
  const { userID, JobJD } = req.body;
  try {
    const user = await userCollection.findOne({ userID: userID});

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Make sure that user has a saveJob property
    if (!user.JobJD) {
      user.JobJD = [];
    }

    // Thực hiện hành động lưu công việc
    const isSaved = user.JobJD.some((job) => job.JobJD === JobJD);
    if (!isSaved) {
      user.JobJD.push( JobJD );
    }

    // Cập nhật thông tin người dùng trong cơ sở dữ liệu
    await userCollection.updateOne({ userID: userID }, { $set: { JobJD: user.JobJD } });

    res.status(200).json(user);
  } catch (error) {
    console.error(error.message);

  }
});
// xóa job
app.delete('/api/removejob/:userID/:JobJD', cors(), async (req, res) => {
  const { userID, JobJD } = req.params;
  try {
    const user = await userCollection.findOne({ userID });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Make sure that user has a saveJob property
    if (!user.JobJD) {
      user.JobJD = [];
    }

    // Remove the job with the given ID from the user's saved jobs
    const jobIndex = user.JobJD.findIndex((job) => job === JobJD);
    if (jobIndex !== -1) {
      user.JobJD.splice(jobIndex, 1);
      console.log(jobIndex)
      console.log(user)
      console.log(JobJD)
      console.log(userID)
    } else {
      return res.status(404).json({ message: 'Job not found' });
    }

    // Update the user's saved jobs in the database
    await userCollection.updateOne({ userID }, { $set: { JobJD: user.JobJD } });
    res.status(200).json(user);
  } catch (error) {
    console.error(error.message);
  }
});


app.get("/api/job/:position", cors(), async (req, res) => {
  const position = req.params.position;
  const result = await jobCollection.find({ position: position }).toArray();
  res.send(result);
});


app.get("/api/job/address/:address", cors(), async (req, res) => {
  const address = req.params.address;
  const result = await jobCollection.find({ address: { $regex: address, $options: "i" } }).toArray();
  res.send(result);
});


app.get("/api/job/category/:categories", cors(), async (req, res) => {
  const categories = req.params.categories.split(",");
  const result = await jobCollection.find({ category: { $in: categories } }).toArray();
  res.send(result);
});

// app.get("/job/:result", cors(), async (req, res) => {
//   const position = req.params.position;
//   const categories = req.params.categories.split(",");
//   const result = await jobCollection.find({ position: position, category: { $in: categories } }).toArray();
//   res.send(result);
// });

// TODO
// app.get("/user",cors(),async(req,res)=>{
//   const result = await userCollection.find({}).toArray();
//   res.send(result)
// })
//api đăng kí user
app.post("/users",cors(),async(req,res)=>{
var crypto = require('crypto');
salt = crypto.randomBytes(16).toString('hex');
UserCollection = database.collection("Users");
user=req.body
var existingUser = await UserCollection.findOne({
  $or: [
    { email: user.email },
    { phone: user.phone },
  ],
});
// Kiểm tra từng thông tin để trả về thông báo cụ thể cho người dùng
if (existingUser) {
  var errorMessages = [];
  if (existingUser.email === user.email) {
    errorMessages.push("Địa chỉ email đã được sử dụng");
  }
  if (existingUser.phone === user.phone) {
    errorMessages.push("Số điện thoại đã được sử dụng");
  }
  res.status(409).send({ error: errorMessages });
  return;
}
hash = crypto.pbkdf2Sync(user.password, salt, 1000, 64, `sha512`).toString(`hex`);
user.password=hash
user.salt=salt
await UserCollection.insertOne(user)
res.send(req.body)
})


// api đăng nhâp employee
app.post("/api/login",cors(),async(req,res)=>{
  email=req.body.email
  password=req.body.password
  var crypto = require('crypto')
  user=await userCollection.findOne({email:email})
  if(user==null)
    res.send({"email":email, "message":"not exist"})
  else{
    hash = crypto.pbkdf2Sync(password, user.salt,1000,64,`sha512`).toString(`hex`);
    if(user.password==hash){
      const token = jwt.sign({ email: email }, secretKey);
      res.json({ user, token, userEmail: user.email });
    }
    else
      res.send({"email":email,"password":password,"message":"wrong password"})
  }
})

// api register employer
app.post("/api/register",cors(),async(req,res)=>{
  var crypto = require('crypto');
  salt = crypto.randomBytes(16).toString('hex');
  EmployerCollection = database.collection("company");
  employer=req.body
  var existingEmployer = await EmployerCollection.findOne({
    $or: [
      { email: employer.email },
      { phone: employer.phone },
    ],
  });
  // Kiểm tra từng thông tin để trả về thông báo cụ thể cho người dùng
  if (existingEmployer) {
    var errorMessages = [];
    if (existingEmployer.email === employer.email) {
      errorMessages.push("Địa chỉ email đã được sử dụng");
    }
    if (existingEmployer.phone === employer.phone) {
      errorMessages.push("Số điện thoại đã được sử dụng");
    }
    res.status(409).send({ error: errorMessages });
    return;
  }
  hash = crypto.pbkdf2Sync(employer.password, salt, 1000, 64, `sha512`).toString(`hex`);
  employer.password=hash
  employer.salt=salt
  await EmployerCollection.insertOne(employer)
  res.send(req.body)
  })
// api đang nhập employer
app.post("/api/employer",cors(),async(req,res)=>{
  email=req.body.email
  password=req.body.password
  var crypto = require('crypto')
  EmployerCollection = database.collection("company");
  employer=await EmployerCollection.findOne({email:email})
  if(employer==null){
    res.send({"email":email, "message":"not exist"})
  }
  else{
    hash = crypto.pbkdf2Sync(password, employer.salt,1000,64,`sha512`).toString(`hex`);
    if(employer.password==hash){
      res.send(employer)
    }
    else{
      res.send({"email":email,"password":password,"message":"wrong password"})
    }
  }
})


// api get profile
app.get('/userID', async (req, res) => {
  const token = req.headers.authorization.split(' ')[1]
  if (!token) {
    return res.status(401).send('Unauthorized');
  }
  try {
    const decodedToken = jwt.verify(token, secretKey);
    const email = decodedToken.email;
    const user = await UsersCollection.findOne({ email: email });
    console.log('decodedToken:', decodedToken);
    console.log('user:', user);
    if (!user) {
      return res.status(404).send('User not found')
    }
    else{
      res.send(user);
    }
  } catch (error) {
    console.error(error);
    return res.status(401).send(` ${error.message}`);
  }
  });


// API lấy tên người dùng
app.get('/api/user', async (req, res) => {
  const token = req.headers.authorization.split(' ')[1]
  if (!token) {
    return res.status(401).send('Unauthorized');
  }
  try {
    const decodedToken = jwt.verify(token, secretKey);
    const email = decodedToken.email;
    const user = await userCollection.findOne({ email: email });


    console.log('decodedToken:', decodedToken);
    console.log('user:', user);
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.json(user.fullname);
  } catch (error) {
    console.error(error);
    return res.status(401).send(` ${error.message}`);
  }
});


  // api chỉnh sửa city
  app.put('/city', async (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).send('Unauthorized');
    }
    try {
      const decodedToken = jwt.verify(token, secretKey);
      const email = decodedToken.email;
      const user = await UsersCollection.findOneAndUpdate({ email: email }, { $set: { city: req.body.city } });
      console.log('decodedToken:', decodedToken);
      console.log('user:', user);
      if (!user) {
        return res.status(404).send('User not found');
      } else {
        res.send(user);
      }
    } catch (error) {
      console.error(error);
      return res.status(401).send(` ${error.message}`);
    }
  });

  // api chỉnh sửa DOB
  app.put('/DOB', async (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).send('Unauthorized');
    }
    try {
      const decodedToken = jwt.verify(token, secretKey);
      const email = decodedToken.email;
      const user = await UsersCollection.findOneAndUpdate({ email: email }, { $set: { DOB: req.body.DOB } });
      console.log('decodedToken:', decodedToken);
      console.log('user:', user);
      if (!user) {
        return res.status(404).send('User not found');
      } else {
        res.send(user);
      }
    } catch (error) {
      console.error(error);
      return res.status(401).send(` ${error.message}`);
    }
  });

  // api chỉnh sửa address
  app.put('/address', async (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).send('Unauthorized');
    }
    try {
      const decodedToken = jwt.verify(token, secretKey);
      const email = decodedToken.email;
      const user = await UsersCollection.findOneAndUpdate({ email: email }, { $set: { address: req.body.address } });
      console.log('decodedToken:', decodedToken);
      console.log('user:', user);
      if (!user) {
        return res.status(404).send('User not found');
      } else {
        res.send(user);
      }
    } catch (error) {
      console.error(error);
      return res.status(401).send(` ${error.message}`);
    }
  });

  // api chỉnh sửa gender
  app.put('/gender', async (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).send('Unauthorized');
    }
    try {
      const decodedToken = jwt.verify(token, secretKey);
      const email = decodedToken.email;
      const user = await UsersCollection.findOneAndUpdate({ email: email }, { $set: { gender: req.body.gender } });
      console.log('decodedToken:', decodedToken);
      console.log('user:', user);
      if (!user) {
        return res.status(404).send('User not found');
      } else {
        res.send(user);
      }
    } catch (error) {
      console.error(error);
      return res.status(401).send(` ${error.message}`);
    }
  });

   // api chỉnh sửa district
   app.put('/district', async (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).send('Unauthorized');
    }
    try {
      const decodedToken = jwt.verify(token, secretKey);
      const email = decodedToken.email;
      const user = await UsersCollection.findOneAndUpdate({ email: email }, { $set: { district: req.body.district } });
      console.log('decodedToken:', decodedToken);
      console.log('user:', user);
      if (!user) {
        return res.status(404).send('User not found');
      } else {
        res.send(user);
      }
    } catch (error) {
      console.error(error);
      return res.status(401).send(` ${error.message}`);
    }
  });

   // api chỉnh sửa image
   app.put('/image', async (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).send('Unauthorized');
    }
    try {
      const decodedToken = jwt.verify(token, secretKey);
      const email = decodedToken.email;
      const user = await UsersCollection.findOneAndUpdate({ email: email }, { $set: { image: req.body.image } });
      console.log('decodedToken:', decodedToken);
      console.log('user:', user);
      if (!user) {
        return res.status(404).send('User not found');
      } else {
        res.send(user);
      }
    } catch (error) {
      console.error(error);
      return res.status(401).send(` ${error.message}`);
    }
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
//admin
  app.get("/api/admin",cors(),async(req,res)=>{
    const companies = await companyCollection.find({}).toArray();
    const jobs = await jobCollection.find({}).toArray();
    const users = await userCollection.find({}).toArray();
    adminData = { companies, jobs, users }
    res.send(adminData)
  })
  app.post("/api/create-company",cors(),async(req,res)=>{
    await companyCollection.insertOne(req.body)
    res.send(req.body)
  });
  
const CircularJSON = require('circular-json');

function replacer(key, value) {
  if (value instanceof Object && !(value instanceof Array)) {
    if (value.hasOwnProperty('_id')) {
      return { ...value, _id: value._id.toString() };
    }
    return Object.entries(value).reduce((acc, [k, v]) => {
      return { ...acc, [k]: replacer(k, v) };
    }, {});
  }
  return value;
}

// ...


app.put("/api/put-company", async (req, res) => {
  await companyCollection.updateOne(
    {_id:new ObjectId(req.body._id)},//condition for update
    { $set: { //Field for updating
      company_name: req.body.company_name,
      company_intro: req.body.company_intro,
      company_scale: req.body.company_scale,
      company_address: req.body.company_address,
      company_website: req.body.company_website,
      company_id: req.body.company_id,
      company_image: req.body.company_image
    }
    }
    )
    var o_id = new ObjectId(req.body._id);
    const result = await companyCollection.find({_id:o_id}).toArray();
    const updatedCompanyJSON = CircularJSON.stringify(result, replacer);
    res.send(updatedCompanyJSON);
});

app.delete("/api/delete-company",cors(),async(req,res)=>{
  var o_id = new ObjectId(req.body._id);
  const result = await companyCollection.find({_id:o_id}).toArray();
  await companyCollection.deleteOne(
  {_id:o_id}
  )
  res.send(result[0])
  });


app.put("/api/put-user", async (req, res) => {
  await userCollection.updateOne(
    {_id:new ObjectId(req.body._id)},//condition for update
    { $set: { //Field for updating
      userID: req.body.userID,
    }
    }
    )
    var o_id = new ObjectId(req.body._id);
    const result = await userCollection.find({_id:o_id}).toArray();
    const updatedUserJSON = CircularJSON.stringify(result, replacer);
    res.send(updatedUserJSON);
});

app.delete("/api/delete-user",cors(),async(req,res)=>{
  var o_id = new ObjectId(req.body._id);
  const result = await userCollection.find({_id:o_id}).toArray();
  await userCollection.deleteOne(
  {_id:o_id}
  )
  res.send(result[0])
  });

app.put("/api/put-job", async (req, res) => {
  await jobCollection.updateOne(
    {_id:new ObjectId(req.body._id)},//condition for update
    { $set: { //Field for updating
      jobJD: req.body.jobJD,
    }
    }
    )
    var o_id = new ObjectId(req.body._id);
    const result = await jobCollection.find({_id:o_id}).toArray();
    const updatedUserJSON = CircularJSON.stringify(result, replacer);
    res.send(updatedUserJSON);
});


app.delete("/api/delete-job",cors(),async(req,res)=>{
  var o_id = new ObjectId(req.body._id);
  const result = await jobCollection.find({_id:o_id}).toArray();
  await jobCollection.deleteOne(
  {_id:o_id}
  )
  res.send(result[0])
  });


