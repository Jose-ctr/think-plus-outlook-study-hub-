const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Health check endpoint - hii ndio ya kwanza tujaribu
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Think Plus Outlook API is alive!' })
});

// Homepage endpoint  
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Think Plus Outlook API - Built for students worldwide' })
});
app.get('/courses', (req, res) => {
  res.json({
    status: "success",
    message: "Think Plus Outlook Courses",
    courses: [
      { id: 1, name: "KCSE Math", level: "High School" },
      { id: 2, name: "CBC Grade 7", level: "Junior" },
      { id: 3, name: "CDAC", level: "College" }
    ]
  })
})

// POST endpoint - kuongeza student mpya
app.post('/students', (req, res) => {
  const student = req.body
  res.status(201).json({ 
    message: "Student added successfully!",
    student: student 
  })
})
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

