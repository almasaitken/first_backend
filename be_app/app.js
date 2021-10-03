import express from "express";
import basicAuth from "express-basic-auth";

const port = 8080;
const app = express();

const songs = ["All of Me", "All of You", "All the Way", "Anything", "Angel Eyes", "As Long as I Live", "Available", 
"Barbara", "Ave Maria", "Black", "Blue", "Blue lace", "Blue Moon", "Blue Skies", "Brazil", "Brown", "Call me", 
"Close to You", "Cycles", "Day by Day"];

app.listen(port, () => { console.log("The server started at port " + port);
})

app.get('/', (req, res) => {
    const random_index = (Math.floor(Math.random()*songs.length));
    res.send(songs[random_index]);
})

app.get('/birth_date', (req, res) => {
    res.send("December 12, 1995");
})
  
app.get('/birth_city', (req, res) => {
    res.send("Hoboken, New Jersey");
})

app.get('/wives', (req, res) => {
    res.send("Nancy Barbato, Ava Gardner, Mia Farrow, Barbara Marx");
})

app.get('/picture', (req, res) => {
    res.send('<img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Frank_Sinatra_%2757.jpg"></img>');
})

app.get('/public', (req, res) => {
    res.send("Everybody can see this page");
})

app.get('/close', (req, res) => {
    process.exit();
})

app.get('/protected',basicAuth({
    users: { 'admin': 'admin' }, 
    unauthorizedResponse: (req) => {
        return "Not authorized";
      }
}) ,(req, res) => {
        res.send("Welcome, authenticated client");
  });

