const express = require("express");
const port = 8000;
const cors = require("cors");
const app = express();
const db_name = "bestjokes2020db";

app.use(cors());
app.use(express.json());

require("./config/mongoose")(db_name);
require("./config/routes")(app);

app.listen(port, () => console.log(`Listening on port ${port}`));