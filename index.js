const express = require("express")
const app = express();
const cors = require("cors")
const env = require("dotenv")
const mongoose = require("mongoose")
const bodyParser = require("body-parser"); // TO HANDLE POST AND PUT REQUEST
const helmet = require("helmet"); // META TAGS AND SEO
const morgan = require("morgan"); // LOGGING TOOL 

const register = require("./controllers/register")
const login = require("./controllers/login"); 
const updateInvoice = require("./controllers/updateInvoice");
const createInvoice = require("./controllers/invoices");
const createProduct = require("./controllers/products");
const getProducts = require("./controllers/getProducts");

// CONFIGURATIONS
env.config();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}))
app.use(morgan("common"))
// app.use(bodyParser.json());
app.use(cors({
    credentials: true,
    origin: true 
}))

// ROUTES
app.post("/register", register);
app.post("/login", login);
app.post("/createInvoice", createInvoice);
app.put("/updateInvoice", updateInvoice);
app.post("/createProduct", createProduct);
app.use("/:invoiceId/getProducts", getProducts)

const PORT = process.env.PORT || 3002;

// MONGO_DB CONNECTION
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));
var db = mongoose.connection;


// BACKEND CONNECTION
app.get("/", async (req, res) => {
    res.send("Hello, server!!");
  });
  
  app.listen(PORT, () => {
    console.log("Server is running!!");
  });