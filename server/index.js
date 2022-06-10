// in this we see all methods of creating api with nodejs mongoose and mongoDB.
// post, get, delete, put() all methods. and we try and tested all are working.

const express = require("express"); // import express
const db = require("./config"); // connection with mongoose.
const Product = require("./product"); // import our schema
const port = process.env.PORT || 5000;
const app = express();
app.use(express.json()); // use this to pass data in json formate.

// post() is used to send data.
app.post("/create", async (req, res) => {
  let data = new Product(req.body); // we called our schema.
  let result = await data.save();
  console.log(req.body);
  res.send(result);
});
// ------get9() is use  to get data from DB
app.get("/list", async (req, res) => {
  let data = await Product.find(); // find() is used to find all data.
  res.send(data);
});
//--------delet()
app.delete("/delete/:_id", async (req, res) => {
  console.log(req.params);
  let data = await Product.deleteOne(req.params);

  res.send(data);
});
//-=------- put() is used for update.
app.put("/update/:_id", async (req, res) => {
  console.log(req.params);
  let data = await Product.updateOne(
    req.params, //to grab data in DB. we get this by sending id in url
    {
      $set: req.body,
    } // what data to update.
  );
  res.send(data);;
});

app.listen(port, () => {
  console.log(`Server is runing on ${port}`);
});
