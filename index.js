const express = require('express');
const fs = require('fs');

const PORT = 5000;

const app = express();
app.use(express.json());

app.get("/convert_time/:time", async (req, res) => {
    const eventTime = req.params.time.split("+");
    fs.writeFileSync('input.txt', `GMT ${eventTime[1]} ${eventTime[0]}`)
    await new Promise(r => setTimeout(r, 200));
    const convertedTime = fs.readFileSync('input.txt', 'utf8');
    res.send(convertedTime);
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}...`);
});