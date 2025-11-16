const express = require('express');
const router =require( './routes/notesRoutes')
const {connectDB} = require( './config/db' );
const app = express();
const rateLimiter = require("./config/upstash")

connectDB().then(res=>console.log("Ok"));
app.use(rateLimiter);
app.use(express.json());
app.use('/api/notes',router)
// app.get('/api/notes', (req, res) => {
//     res.status(200).send("Notes ready")
// })
//
// app.post('/api/notes', (req, res) => {
//     res.status(201).json({"message": "Notes added successfully"})
// })
//
// app.put('/api/notes:id', (req, res) => {
//     res.status(200).json({"message": "Notes updated successfully"})
// })
//
// app.delete('/api/notes:id', (req, res) => {
//     res.status(200).json({"message": "Notes deleted successfully"})
// })

app.listen(3000,(req, res) => {
    console.log('Server is running on port 3000');
})
