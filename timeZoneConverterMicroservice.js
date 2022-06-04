const express = require('express');

const PORT = 5000;

const app = express();
app.use(express.json());


app.get("/convert_time/:date", async (req, res) => {
    const eventDateArr = req.params.date.split("+");
    const eventDate = new Date(`${eventDateArr[0]}T${eventDateArr[1]}`);
    const convertedDate = eventDate.toLocaleString('en-US', { timeZone: `${eventDateArr[2].replace("_","/")}`, timeStyle: "short", dateStyle:"long"});
    res.send(convertedDate);
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}...`);
});