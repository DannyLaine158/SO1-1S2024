const { createClient } = require('redis');
const express = require('express');
const port = process.env.PORT | 4000;

const app = express();

const client = createClient({
    url: 'redis://localhost:6379/15'
}); //creates a new client
client.on('error', err => console.log('Redis Client Error', err));

app.get("/getData", async (req, res) => {
    await client.connect();
    let data = await client.hGetAll("Guatemala - Argentina");
    return res.json(data);
});

app.listen(port, () => {
    console.log("Listen on port ", port);
});
