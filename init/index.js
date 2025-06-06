const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://localhost:27017/wandurlust";

main()
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
 initData.data = initData.data.map((obj) => ({ ...obj, owner: "683211bd27d14b09982a0354" }));
  await Listing.insertMany(initData.data);
  console.log("Data was initialized");
};

initDB();
