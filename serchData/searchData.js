const express = require("express");
const app = express();
const Db = require("./config");
const Product = require("./product");
app.use = express.json();

app.get("/search/:key", async (req, res) => {
  console.log(req.params.key);
  let data = await Product.find({
    $or: [{ "Category": { $regex: req.params.key } }], // we are searching inside Db so the fileds we use should be match with our schema always.
  });
  res.send(data);
  console.log(data)
});

app.listen(5000, () => {
  console.log("server is running on 5000");
});
