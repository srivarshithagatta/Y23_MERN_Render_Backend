import dotenv from "dotenv"; 
dotenv.config(); 
import express from "express";
import cors from "cors";
const app = express(); 
const PORT = process.env.PORT || 8080; 
// Middleware 
app.use(cors()); 
app.use(express.json()); 
// Sample API route 
app.get("/api/hello", (req, res) => { 
res.json({ message: "Hello from Node + Express backend!" }); 
}); 
// Start server 
app.listen(PORT, () => console.log('Server running on port ${PORT}'));