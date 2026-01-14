// DEPENDENCIES
const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT;

// MIDDLEWARE

// ROUTES

// LISTENER
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
