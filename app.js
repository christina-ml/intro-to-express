// Dependencies
const express = require('express');

// Configuration
const app = express();
const PORT = 3003;

// Routes
app.get('/', (request, response)=>{
    response.send('Hello, World');
})

/* 
    Activity - Catchphrase Express: 
*/
app.get('/terminator', (request, response)=>{
    response.send("I'll be back");
    // response.send("Hasta la vista, baby"); // this doesn't work - you can only have one response for every request
})

app.get('/emeril', (request, response)=>{
    response.send("Bam!");
})

app.get('/steve-mcgarrett', (request, response)=>{
    response.send("Book 'em Danno!");
})

app.get('/coach-taylor', (request, response)=>{
    response.send("Clear eyes, full hearts, can't Lose");
})

app.get('/homer-simpson', (request, response)=>{
    response.send("D'Oh");
})

app.get('/bruce-banner', (request, response)=>{
    response.send("Don't make me angry");
})

app.get('/jj-evans', (request, response)=>{
    response.send("Dy-no-myte!");
})

app.get('/batman', (request, response)=>{
    response.send("To the Batmobile!");
})

app.get('/hannibal-smith', (request, response)=>{
    response.send("I love it when a plan comes together");
})

app.get('/fraiser', (request, response)=>{
    response.send("I'm listening");
})

app.get('/regis', (request, response)=>{
    response.send("Is that your final answer?");
})

app.get('/borg', (request, response)=>{
    response.send("Resistance is futile");
})

app.get('/fox-mulder', (request, response)=>{
    response.send("The truth is out there");
})

app.get('/harry-callahan', (request, response)=>{
    response.send("Go ahead, make my day");
})

app.get('/travis-bickle', (request, response)=>{
    response.send("You talkin' to me?");
})

app.get('/tony-montana', (request, response)=>{
    response.send("Say hello to my little friend");
})

app.get('/zeus', (request, response)=>{
    response.send("Release the Kraken");
})

app.get('/james-bond', (request, response)=>{
    response.send("the name is Bond, James Bond");
})

app.get('/dorothy', (request, response)=>{
    response.send("Toto, I've got a feeling we're not in Kansas anymore");
})


/* 
    Activity - Magic 8 Ball: 
*/
app.get('/magic8', (request, response)=>{
    const magic8Responses = [
        "It is certain",
        "It is decidedly so",
        "Without a doubt",
        "Yes - Definitely",
        "You may rely on it",
        "As I see it, yes",
        "Most likely",
        "Outlook good",
        "Yes, and signs point to yes",
        "Reply hazy, try again",
        "Ask again later",
        "Better not tell you now",
        "Cannot predict now",
        "Concentrate and ask again",
        "Don't count on it",
        "My reply is no",
        "My sources say no",
        "Outlook not so good",
        "Very doubtful"
      ]

     const magic8Answer = magic8Responses[Math.floor(Math.random()*magic8Responses.length)];

    response.send(`<h1>${magic8Answer}</h1>`);
})

// Listen
app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})


