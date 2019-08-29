const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require("mongodb").ObjectID;
const db_url=
    'mongodb+srv://admin1blakeffr:BlakeHelio2@cluster0-s2mfp.mongodb.net/test?retryWrites=true&w=majority'

app.use(express.json())
app.use(cors())

const client = new MongoClient(db_url, { useNewUrlParser: true, useUnifiedTopology: true });

// MongoClient.connect('mongodb+srv://admin1blakeffr:BlakeHelio2@cluster0-s2mfp.mongodb.net/test?retryWrites=true&w=majority', function (err, db){
//     if (err) throw err
//     db.collection('Shirts').find().toArray(function (err, result){
//         if (err) throw err
//         console.log(result)
//     })
// }) now I need to do a fetch on the front end to talk to API. We're talking to mongo now


app.get('/', (req, res) => {
    client.connect (err => {
        const collection = client.db("FFR").collection("Shirts");
        const results = collection.find({}).toArray((err, docs)=> {
            console.log(docs)
            res.send(docs)
        });

        client.close();
    });
   });

   app.post("/", (req, res) => {
    const body = req.body;
    client.connect(async err => {
      const collection = client.db("FFR").collection("Shirts");
      // perform actions on the collection object
      const results = await collection.insertOne(body)
      res.send(results.insertedId);
      
      client.close();
    });
});

//post many new leads
app.post("/", (req, res) => {
    const body = req.body;
    client.connect(async err => {
      const collection = client.db("FFR").collection("Shirts");
      // perform actions on the collection object
      const results = await collection.insertMany(body)
      res.send(results);
      
      client.close();
    });
});

//update lead by ID
app.put("/:ID", (req, res) => {
  const body = req.body;
  client.connect(async err => {
    const collection = client.db("FFR").collection("Shirts");
    // perform actions on the collection object
    const results = await collection.updateOne({_id: ObjectId(req.params.ID)},{$set: body});
    res.send(results);

    client.close();
  });
});

//delete lead by ID
app.delete("/:ID", (req, res) => {
  client.connect(async err => {
    const collection = client.db("FFR").collection("Shirts");
    // perform actions on the collection object
    const results = await collection.deleteOne({_id: ObjectId(req.params.ID)});
    res.send(results);

    client.close();
  });
});


app.listen(port,() => {console.log(`Listening on port ${port}`)})


