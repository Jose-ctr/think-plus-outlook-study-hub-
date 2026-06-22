const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
// Database yetu ya wanafunzi
let students = [
  { id: 1, name: "Joseph Mbui", course: "CDAC" },
  { id: 2, name: "Neville Mwambui", course: "KCSE Math" }
];
// Health check endpoint - hii ndio ya kwanza tujaribu
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Think Plus Outlook API is alive!' })
});

// Homepage endpoint  
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Think Plus Outlook API - Built for students worldwide' })
});
// GET endpoint - kuonyesha wanafunzi wote
app.get('/students', (req, res) => {
  res.json([
    {id: 1, name: "Joseph Mbui", course: "Computer Science"},
    {id: 2, name: "Neville Mwaumbui", course: "IT"}
  ]);
});

// GET endpoint - kuonyesha courses
app.get('/courses', (req, res) => {
  res.json([
    {id: 1, name: "Math 101"},
    {id: 2, name: "Programming 101"}
]);

}); // GET endpoint imefungwa

// POST endpoint - kuongeza student mpya
app.post('/students', (req, res) => {
  const student = req.body;
  student.id = students.length + 1;
  students.push(student);

  res.status(201).json({
    message: "Student added successfully!",
    student: student
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
