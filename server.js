import express from 'express';
import cors from 'cors';
import { exec } from 'child_process';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('frontend'));

app.post('/api/execute', (req, res) => {
  const { command } = req.body;
  
  exec(command, (error, stdout, stderr) => {
    const output = stdout + stderr;
    res.send(output || 'Command completed');
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});