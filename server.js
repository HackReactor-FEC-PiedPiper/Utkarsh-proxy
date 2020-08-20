const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 4001;

app.use(express.static(path.join(__dirname, "./client")));

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
