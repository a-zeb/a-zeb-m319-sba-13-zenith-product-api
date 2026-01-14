// DEPENDENCIES
const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT;

// MIDDLEWARE
app.use(express.json());

// ROUTES
app.use("/api/products", require("./routes/productRoutes"));

// LISTENER
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
