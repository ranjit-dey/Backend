import cors from "cors";
import express from "express";
const app = express();

/*== BASIC CONFIGURATION ==*/
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

/*== CORS CONFIGURATION ==*/
app.use(
    cors({
        origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH", "HEAD"],
        allowedHeaders: ["Content-Type", "Authorization"],
    }),
);

/*== IMPORT THE ROUTES ==*/
import healthCheckRouter from './routes/healthCheck.routes.js'

app.use('/api/v1/healthcheck', healthCheckRouter)

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.get("/about", (req, res) => {
    res.send("about");
});

app.get("/instagram", (req, res) => {
    res.send("<h1 style='text-align:center;'>Instagram page</h1>");
});

export default app;
