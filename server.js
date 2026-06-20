const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Health check endpoint - hii ndio ya kwanza tujaribu
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'StudyHub API is alive from Pwani!' });
});

// Homepage endpoint  
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to StudyHub API - Built for students worldwide' });
});


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

