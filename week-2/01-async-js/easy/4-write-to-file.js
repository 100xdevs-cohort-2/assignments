const fs = require('fs');
let dataToWrite = ` 
                    In the realm of code, where languages intertwine,
                    A script emerges, elegant and fine.
                    Its name is JavaScript, a force so grand,
                    Weaving the web with a skilled, digital hand.

                    From the client's browser to the server's might,
                    JavaScript dances in the cybernight.
                    A language versatile, dynamic, and free,
                    Unleashing the power of the web's vast sea.

                    In the browser's domain, it takes its place,
                    Animating pages with a swift embrace.
                    Events unfold with each click and scroll,
                    A symphony of logic, taking control.

                    Variables and functions, they play their part,
                    Crafting the logic, a work of digital art.
                    Loops and conditions, a rhythmic beat,
                    Guiding the program through logic's sweet feat.

                    Objects and arrays, like building blocks,
                    Constructing structures that withstand the knocks.
                    Prototypes extend, inheritance flows,
                    In the world of JavaScript, creativity grows.

                    Async whispers in the asynchronous breeze,
                    Promises kept, fulfilling each tease.
                    Callbacks and awaits, a dance so sublime,
                    Handling the flow of time, one step at a time.

                    Node.js rises, server-side might,
                    JavaScript conquers both day and night.
                    With npm packages, a vast library's tale,
                    A treasure trove where solutions set sail.

                    Frameworks emerge, like constellations bright,
                    Angular, React, Vue in the coding light.
                    Express and NestJS, building the server's song,
                    In the symphony of the web, they all belong.

                    So here's to JavaScript, the language so vast,
                    In the digital tapestry, it's woven fast.
                    A language of the web, a virtual guide,
                    In the landscape of code, forever will it reside.
                    `;

fs.writeFile('4-random.txt', dataToWrite, (err) => {
    if(err) throw err;
    console.log("New data added successfully");
});