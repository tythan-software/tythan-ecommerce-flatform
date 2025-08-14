import express from "express";
import "dotenv/config";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";
import { readdirSync, readFileSync } from "fs";
import dbConnect from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import swaggerUi from 'swagger-ui-express';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve swagger.json
app.get('/swagger.json', (req, res) => {
  const swaggerPath = path.resolve(__dirname, 'swagger.json');
  const swaggerDoc = JSON.parse(readFileSync(swaggerPath, 'utf8'));
  res.json(swaggerDoc);
});

// Serve Swagger UI
const swaggerPath = path.resolve(__dirname, 'swagger.json');
const swaggerDoc = JSON.parse(readFileSync(swaggerPath, 'utf8'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// CORS configuration using config system
const allowedOrigins = [
  process.env.ADMIN_URL,
  process.env.CLIENT_URL,
].filter(Boolean);

console.log("Allowed CORS Origins:", allowedOrigins);

app.use(
  cors({
    origin: function (origin, callback) {
      console.log("CORS request from origin:", origin);

      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);

      // In development, allow all origins for easier testing
      if (process.env.NODE_ENV === "development") {
        console.log("Development mode: allowing all origins");
        return callback(null, true);
      }

      if (allowedOrigins.indexOf(origin) !== -1) {
        console.log("Origin allowed:", origin);
        callback(null, true);
      } else {
        console.log("Origin blocked:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

// Healthcheck
dbConnect();
connectCloudinary();

// Load all route files
const routesPath = path.resolve(__dirname, "./routes");
const routeFiles = readdirSync(routesPath);
routeFiles.map(async (file) => {
  const routeModule = await import(`./routes/${file}`);
  app.use("/", routeModule.default);
});
app.get("/", (req, res) => {
  res.send("Welcome to Tythan Ecommerce API. See /api-docs for documentation.");
});

// Start the server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
