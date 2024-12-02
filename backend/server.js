const express = require("express");
const jwt = require("jsonwebtoken");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const SECRET_KEY = "mysecretkey"; // Replace with an environment variable in production

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "profile",
});

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL Connected...");
});

// Signup route
app.post("/signup", (req, res) => {
  const { username, email, password, role } = req.body;

  const table = `${role}s`;
  const checkQuery = `SELECT * FROM ${table} WHERE email = ?`;
  const insertQuery = `INSERT INTO ${table} (username, email, password) VALUES (?, ?, ?)`;

  db.query(checkQuery, [email], (err, results) => {
    if (err) return res.status(500).json({ message: "Database error" });
    if (results.length > 0)
      return res.status(400).json({ message: "Email already exists" });

    db.query(insertQuery, [username, email, password], (err) => {
      if (err) return res.status(500).json({ message: "Signup failed" });
      res.json({ success: true, message: `Signed up successfully as ${role}` });
    });
  });
});

// Login route
app.post("/login", (req, res) => {
    const { email, password, role } = req.body;
  
    const table = `${role}s`;
    const query = `SELECT * FROM ${table} WHERE email = ? AND password = ?`;
  
    db.query(query, [email, password], (err, results) => {
      if (err) return res.status(500).json({ message: "Database error" });
      if (results.length === 0)
        return res.status(400).json({ message: "Invalid email or password" });
  
      const token = jwt.sign({ id: results[0].id, role }, SECRET_KEY, {
        expiresIn: "1h",
      });
      res.json({
        success: true,
        token,
        message: `Login successful as ${role}`,
      });
    });
  });

// Protected route
app.get("/protected", (req, res) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).json({ message: "No token provided" });

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    res.json({ success: true, data: decoded });
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
